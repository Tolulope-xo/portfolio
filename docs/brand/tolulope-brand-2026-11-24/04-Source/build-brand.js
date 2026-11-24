// Generates the Tolulope Olatunji logo package (SVG masters + proofs).
// Usage: node build-brand.js <font.otf> <outDir>
const fs = require("fs");
const path = require("path");
const opentype = require("opentype.js");

const [fontPath, outDir] = process.argv.slice(2);
const font = opentype.loadSync(fontPath);

const INK = "#0B0C0E";
const PAPER = "#F4F7FA";
const ACCENT = "#455CE9";

// ---- Mark geometry (64-unit grid) ----------------------------------------
// Stroke S = 7, gap G = 5. Crossbar spans the full width of the T and O;
// the O sits under the right arm, one gap from the bar and one from the stem.
const S = 7, G = 5;
const bar = { x: 10, y: 13, w: 44, h: S };
const stem = { x: 16, y: 13, w: S, h: 38 };
const oOuter = 13; // outer radius => 26 diameter
const o = { cx: stem.x + S + G + oOuter, cy: bar.y + S + G + oOuter, r: oOuter - S / 2 };
// sanity: O right edge meets crossbar end, O bottom meets stem bottom
if (o.cx + oOuter !== bar.x + bar.w) throw new Error("O/right misaligned");
if (o.cy + oOuter !== stem.y + stem.h) throw new Error("O/bottom misaligned");

const markShapes = (t, oFill) =>
  `<rect x="${bar.x}" y="${bar.y}" width="${bar.w}" height="${bar.h}" fill="${t}"/>` +
  `<rect x="${stem.x}" y="${stem.y}" width="${stem.w}" height="${stem.h}" fill="${t}"/>` +
  `<circle cx="${o.cx}" cy="${o.cy}" r="${o.r}" fill="none" stroke="${oFill}" stroke-width="${S}"/>`;

const svg = (vb, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-labelledby="t">` +
  `<title id="t">${title}</title>${body}</svg>\n`;

const files = {};
const T = "Tolulope Olatunji";

// App-icon tile (used for favicon / app icon)
files["01-Logo-Masters/tolulope-mark-tile.svg"] = svg(
  "0 0 64 64",
  `<rect width="64" height="64" rx="14" fill="${INK}"/>` + markShapes(PAPER, ACCENT),
  `${T} logo`
);
// Bare marks, cropped to the mark bounds (10..54 x 13..51)
const markVB = `${bar.x} ${bar.y} ${bar.w} ${stem.h}`;
const marks = {
  colour: [INK, ACCENT],
  reversed: [PAPER, ACCENT],
  black: [INK, INK],
  white: [PAPER, PAPER],
};
for (const [name, [t, oc]] of Object.entries(marks)) {
  files[`01-Logo-Masters/tolulope-mark-${name}.svg`] = svg(markVB, markShapes(t, oc), `${T} logo`);
}

// ---- Wordmark lockup ------------------------------------------------------
// Cap height of the name = O diameter (26). Baseline = stem bottom (51).
// Mark-to-name gap = 2G.
const capH = (font.tables.os2.sCapHeight || 700) / font.unitsPerEm;
const fontSize = (2 * oOuter) / capH;
const textX = bar.x + bar.w + 2 * G;
const baseline = stem.y + stem.h;
const textPath = font.getPath(T, textX, baseline, fontSize);
const bb = textPath.getBoundingBox();
const d = textPath.toPathData(2);
const lockW = Math.ceil(bb.x2) - bar.x;
const lockH = Math.max(stem.y + stem.h, Math.ceil(bb.y2)) - bar.y;
const lockVB = `${bar.x} ${bar.y} ${lockW} ${lockH}`;
const lockups = {
  colour: [INK, ACCENT, INK],
  reversed: [PAPER, ACCENT, PAPER],
  black: [INK, INK, INK],
  white: [PAPER, PAPER, PAPER],
};
for (const [name, [t, oc, txt]] of Object.entries(lockups)) {
  files[`01-Logo-Masters/tolulope-lockup-${name}.svg`] = svg(
    lockVB,
    markShapes(t, oc) + `<path d="${d}" fill="${txt}"/>`,
    T
  );
}

// ---- Proofs ---------------------------------------------------------------
const gridLines = [];
for (let i = 0; i <= 64; i += 1) {
  const major = i % 8 === 0;
  gridLines.push(
    `<line x1="${i}" y1="0" x2="${i}" y2="64" stroke="${major ? "#9AA6B2" : "#D5DCE3"}" stroke-width="${major ? 0.12 : 0.06}"/>`,
    `<line x1="0" y1="${i}" x2="64" y2="${i}" stroke="${major ? "#9AA6B2" : "#D5DCE3"}" stroke-width="${major ? 0.12 : 0.06}"/>`
  );
}
const dim = (x1, y1, x2, y2, label, lx, ly) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#E5484D" stroke-width="0.25"/>` +
  `<text x="${lx}" y="${ly}" font-family="monospace" font-size="1.8" fill="#E5484D">${label}</text>`;
files["03-Proofs/construction.svg"] = svg(
  "-4 -4 72 72",
  `<rect x="-4" y="-4" width="72" height="72" fill="#FFFFFF"/>` +
    gridLines.join("") +
    `<g opacity="0.85">${markShapes(INK, ACCENT)}</g>` +
    `<circle cx="${o.cx}" cy="${o.cy}" r="${oOuter}" fill="none" stroke="#E5484D" stroke-width="0.15" stroke-dasharray="0.6 0.6"/>` +
    `<circle cx="${o.cx}" cy="${o.cy}" r="${oOuter - S}" fill="none" stroke="#E5484D" stroke-width="0.15" stroke-dasharray="0.6 0.6"/>` +
    `<line x1="32" y1="0" x2="32" y2="64" stroke="#E5484D" stroke-width="0.12" stroke-dasharray="1 1"/>` +
    `<line x1="0" y1="32" x2="64" y2="32" stroke="#E5484D" stroke-width="0.12" stroke-dasharray="1 1"/>` +
    dim(bar.x, 10.5, bar.x + bar.w, 10.5, "44", 30.5, 10) +
    dim(7.5, bar.y, 7.5, bar.y + S, "S=7", 1.2, 17.2) +
    dim(stem.x + S, 45, stem.x + S + G, 45, "G=5", 23.3, 44.3) +
    dim(44, bar.y + S, 44, bar.y + S + G, "G=5", 44.6, 23.6) +
    dim(o.cx - oOuter, 55, o.cx + oOuter, 55, "Ø26", 38.5, 57.6) +
    dim(stem.x, 55, stem.x + S, 55, "S=7", 16.5, 57.6),
  "Logo construction grid"
);
// Clear space: one O diameter's half (13) is too generous for headers; use 2G = 10.
const cs = 2 * G;
files["03-Proofs/clear-space.svg"] = svg(
  `${bar.x - cs - 2} ${bar.y - cs - 2} ${bar.w + 2 * cs + 4} ${stem.h + 2 * cs + 4}`,
  `<rect x="${bar.x - cs - 2}" y="${bar.y - cs - 2}" width="${bar.w + 2 * cs + 4}" height="${stem.h + 2 * cs + 4}" fill="#FFFFFF"/>` +
    `<rect x="${bar.x - cs}" y="${bar.y - cs}" width="${bar.w + 2 * cs}" height="${stem.h + 2 * cs}" fill="#EEF1FD" stroke="${ACCENT}" stroke-width="0.2" stroke-dasharray="1 0.6"/>` +
    `<rect x="${bar.x}" y="${bar.y}" width="${bar.w}" height="${stem.h}" fill="#FFFFFF"/>` +
    markShapes(INK, ACCENT) +
    `<text x="${bar.x - cs + 1}" y="${bar.y - 4}" font-family="monospace" font-size="2.2" fill="${ACCENT}">clear space = 2G = 10 units</text>`,
  "Logo clear space"
);

// Size ladder proof (HTML so PNG export can render it)
files["03-Proofs/size-ladder.html"] = `<!doctype html><meta charset="utf-8"><title>Size ladder</title>
<body style="margin:0;padding:40px;font:14px system-ui;background:#fff;color:${INK}">
<div style="display:flex;gap:32px;align-items:end">
${[16, 24, 32, 48, 64, 128, 256]
  .map((s) => `<figure style="margin:0;text-align:center"><img src="../01-Logo-Masters/tolulope-mark-tile.svg" width="${s}" height="${s}"><figcaption>${s}px</figcaption></figure>`)
  .join("\n")}
</div>
<div style="display:flex;gap:32px;margin-top:40px;align-items:center">
<div style="background:#fff;padding:24px;border:1px solid #ddd"><img src="../01-Logo-Masters/tolulope-lockup-colour.svg" height="40"></div>
<div style="background:${INK};padding:24px"><img src="../01-Logo-Masters/tolulope-lockup-reversed.svg" height="40"></div>
<div style="background:#C7D0D9;padding:24px"><img src="../01-Logo-Masters/tolulope-lockup-black.svg" height="40"></div>
</div></body>
`;

files["spec.json"] =
  JSON.stringify(
    {
      name: "Tolulope Olatunji logo",
      version: "1.0.0",
      date: "2026-11-24",
      grid: 64,
      stroke: S,
      gap: G,
      crossbar: bar,
      stem,
      o: { cx: o.cx, cy: o.cy, outerDiameter: 2 * oOuter, innerDiameter: 2 * (oOuter - S) },
      markBounds: { x: bar.x, y: bar.y, w: bar.w, h: stem.h },
      lockup: { font: "Neue Montreal Bold (outlined)", fontSize: +fontSize.toFixed(3), capHeight: 2 * oOuter, textX, baseline, viewBox: lockVB },
      clearSpace: cs,
      minSize: { markPx: 16, lockupHeightPx: 24 },
      colours: { ink: INK, paper: PAPER, accent: ACCENT },
    },
    null,
    2
  ) + "\n";

for (const [rel, content] of Object.entries(files)) {
  const p = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}
console.log(JSON.stringify({ fontSize, lockVB, d: d.length }));
