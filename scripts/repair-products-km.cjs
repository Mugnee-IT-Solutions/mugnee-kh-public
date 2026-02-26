const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const filePath = path.join(process.cwd(), "app", "data", "products.ts");
const sourceText = fs.readFileSync(filePath, "utf8");
const sf = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

const khmerRe = /[\u1780-\u17FF]/g;
const controlRe = /[\u0000-\u001F]/g;
const mojibakeHintRe = /[\u00C3\u00C2\u00E2\u00E1\uFFFD]/;
const mojibakeTokenRe = /[\u00C3\u00C2\u00E2\u00E1\uFFFD]/g;

const cp1252Reverse = {
  0x20ac: 0x80, 0x201a: 0x82, 0x0192: 0x83, 0x201e: 0x84, 0x2026: 0x85,
  0x2020: 0x86, 0x2021: 0x87, 0x02c6: 0x88, 0x2030: 0x89, 0x0160: 0x8a,
  0x2039: 0x8b, 0x0152: 0x8c, 0x017d: 0x8e, 0x2018: 0x91, 0x2019: 0x92,
  0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
  0x02dc: 0x98, 0x2122: 0x99, 0x0161: 0x9a, 0x203a: 0x9b, 0x0153: 0x9c,
  0x017e: 0x9e, 0x0178: 0x9f,
};

function toCp1252Bytes(str) {
  const bytes = [];
  for (const ch of str) {
    const cp = ch.codePointAt(0);
    if (cp <= 0xff) {
      bytes.push(cp);
    } else if (cp1252Reverse[cp] != null) {
      bytes.push(cp1252Reverse[cp]);
    } else {
      bytes.push(0x3f);
    }
  }
  return Buffer.from(bytes);
}

function decodeCp1252Utf8(input) {
  try {
    return toCp1252Bytes(input).toString("utf8");
  } catch {
    return input;
  }
}

function metrics(text) {
  const khmer = (text.match(khmerRe) || []).length;
  const controls = (text.match(controlRe) || []).length;
  const mojibake = (text.match(mojibakeTokenRe) || []).length;
  const replacement = (text.match(/\uFFFD/g) || []).length;
  const qmarks = (text.match(/\?/g) || []).length;
  const score = khmer * 5 - mojibake * 3 - controls * 12 - replacement * 8 - qmarks * 2;
  return { khmer, controls, mojibake, replacement, qmarks, score, len: text.length };
}

function decodeIfBetter(value) {
  if (!mojibakeHintRe.test(value)) return value;

  let best = value;
  let bestM = metrics(value);
  let current = value;

  for (let i = 0; i < 6; i += 1) {
    const next = decodeCp1252Utf8(current);
    if (!next || next === current) break;
    const m = metrics(next);
    if (m.score > bestM.score) {
      best = next;
      bestM = m;
    }
    current = next;
  }

  if (bestM.controls > 0) return value;

  const base = metrics(value);
  const improved =
    bestM.score > base.score &&
    (bestM.khmer > base.khmer || bestM.mojibake < base.mojibake || bestM.replacement < base.replacement);

  return improved ? best : value;
}

const replacements = [];

function queueStringReplacement(node, oldText) {
  const updated = decodeIfBetter(oldText);
  if (updated === oldText) return;
  replacements.push({ start: node.getStart(sf), end: node.end, text: JSON.stringify(updated) });
}

function visit(node) {
  if (ts.isPropertyAssignment(node)) {
    const keyText = node.name.getText(sf).replace(/^["']|["']$/g, "");
    if (keyText.endsWith("Km")) {
      const init = node.initializer;
      if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) {
        queueStringReplacement(init, init.text);
      } else if (ts.isArrayLiteralExpression(init)) {
        init.elements.forEach((el) => {
          if (ts.isStringLiteral(el) || ts.isNoSubstitutionTemplateLiteral(el)) {
            queueStringReplacement(el, el.text);
          }
        });
      }
    }
  }
  ts.forEachChild(node, visit);
}

visit(sf);

if (replacements.length === 0) {
  console.log("No Km-string replacements found.");
  process.exit(0);
}

replacements.sort((a, b) => b.start - a.start);
let out = sourceText;
for (const r of replacements) {
  out = out.slice(0, r.start) + r.text + out.slice(r.end);
}

fs.writeFileSync(filePath, out, "utf8");
console.log(`Updated ${replacements.length} Km string literals in app/data/products.ts`);

