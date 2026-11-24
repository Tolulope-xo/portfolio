# Brand: Tolulope Olatunji logo

The final logo package is **`tolulope-brand-2026-11-24/`** (zipped alongside as
`tolulope-brand-2026-11-24.zip`). Checksums for every file and the zip are in
[`SHA256SUMS`](SHA256SUMS); verify with:

```bash
cd docs/brand && shasum -a 256 -c SHA256SUMS
```

## The mark

A "To" monogram on a 64-unit grid: the T's crossbar runs the full width and
the O sits under its right arm.

| Rule | Value |
| --- | --- |
| Stroke (S) | 7 units, identical for crossbar, stem and O ring |
| Gap (G) | 5 units, identical between bar→O and stem→O |
| O | Ø26 outer / Ø12 inner; right edge meets the crossbar end, bottom meets the stem foot |
| Mark bounds | x 10–54, y 13–51 (centred in the 64 tile) |
| Clear space | 2G = 10 units on every side |
| Minimum size | mark 16px; lockup 24px tall |
| Colours | ink `#0B0C0E`, paper `#F4F7FA`, accent `#455CE9` (O only) |

Full numbers: [`spec.json`](tolulope-brand-2026-11-24/spec.json).

## Package contents

- `01-Logo-Masters/`: SVG masters. `tolulope-mark-tile.svg` (app icon),
  `tolulope-mark-{colour,reversed,black,white}.svg`, and
  `tolulope-lockup-{colour,reversed,black,white}.svg` (name outlined in
  Neue Montreal Bold, cap height = O diameter, baseline = stem foot).
- `02-Digital-Exports/`: PNG exports (tile 32/180/512/1024, marks 440px,
  lockups 96px tall).
- `03-Proofs/`: construction grid, clear-space and size-ladder proofs.
- `04-Source/build-brand.js`: generator for the masters and proofs
  (`node build-brand.js <NeueMontreal-Bold.otf> <outDir>`, needs `opentype.js`).

## Where it is used on the site

- `src/app/components/Logo.jsx`: inline mark + live-text name (header, footer, About)
- `src/app/icon.svg`: copy of `tolulope-mark-tile.svg`
- `src/app/apple-icon.png`: copy of `tolulope-mark-tile-180px.png`
- `src/app/opengraph-image.tsx`: reversed mark on the share card

If the masters change, regenerate them, update these four places, and refresh
`SHA256SUMS`. Never redraw the mark by hand in a component; copy the geometry.
