# Hero Section (1440p) — Public SVG Ornaments + Spec Alignment Plan

## Repository Research

**Current HeroSection.tsx state (before fix):**
- Frame 1440 × 1024, `#003BE2` bg, grid-bg overlay at 0.12 opacity.
- Decorations: Renders 11 custom SVG primitive shapes via `src/components/ui/Decorations.tsx` (LimeBlob × 3, WhiteRing, WhiteSquiggle × 2, WhiteTriangle, LimeRing, LimeSquiggle × 2) placed at absolute coordinates.
- Center text block: "Get Access to Hundreds Courses Available" heading (Poopins 600/72px/120%/−0.01em) + sub-copy "Unlock your creativity…" (Satoshi 400/18/160% #E5E6E8) + 581×52 search bar (input 461×52 radius 24 bg white + Search outlined icon 24/24 #82868E + placeholder "Course, topic, creator"; button 104×46 radius 24 bg #D4FB20, label "Search" Satoshi 500/18/120% #242528).
- 1149×1149 lime ring (320px solid #CBFC01 border, top 560).
- Boy AI SVG 578×541 with the 8-layer drop-shadow.
- 3 floating cards at absolute coords (FloatingCards.tsx: MiniCourseCard 218×80 at 390,615; ProgressCard 232×131 at 850,631; StudentStatCard 258×121 at 328,837).

**CSS spec (Hero_Fr....txt) deviations & ornament assignments:**
Per the CSS spec lines 1170–1670, the 4 public SVGs must replace the custom decorations as follows (plus a cone on both sides):

| Public Asset        | Color filter | CSS frame position / 1440 coordinates (from spec) |
|---------------------|--------------|---------------------------------------------------|
| `spiral.svg`        | Lime via filter (D4FB20) | Spec Group 1 Frame 222x222 at (1130, 445) — approx 220×220 spiral (matches ref image **left spiral**? Ref image actually shows spiral on LEFT. Reconcile with: left side also needs a lime spiral 385×385 at top-left ~(−59,142) spec lines 1201-1221. Place TWO lime-tinted `spiral.svg` instances: 330×330 at left (−59,142), 220×220 at right (1155,445). |
| `Spiral 2d.svg`     | White (no filter) | Spec lines 1222-1230 (80-76% range of frame): 175×175 white spiral ~(90,420) — matches the ref white squiggle/spiral behind boy image upper-left. |
| `Spiral 2d.svg`     | White (no filter) | Spec lines 1233-1241: 180×180 white spiral at right (1155,785) — matches ref right-side lower white squiggle/spiral. |
| `Donut.svg`         | White (no filter) | Spec lines 1244-1262: WhiteRing / Donut at 28,791, size 188×188 — replace the Decorations.tsx WhiteRing with actual `/Donut.svg`. |
| `Donut.svg`         | **Lime** via filter, width 175, matrix horizontal scale −1 | Spec lines 1395-1452: Lime ring (width 175) at left (127, 475) flipped matrix(-1,0,0,1) — matches lime ring on left-middle in ref. |
| `Cone.svg`          | White (no filter) | Spec lines 1455-1508 + 1565-1618: 2 separate white Cone placements. One large 342 wide at left bottom (−152, 682), one smaller 188 wide at right (1180, 470) |
| `Cone.svg`          | Lime via filter, 370 wide | Spec lines 1510-1562: Lime cone 370×370 at top-right (1205, 220) — matches large lime cone on upper-right of ref image! |

Additionally:
- **Text block top**: CSS spec says 1200×345 at `top: 169px` (spec line 315, also height 345). Current code has 245 height at top: 100, gap 60. Fix to 345 tall, top 169.
- **Lime ring (Ellipse 7)**: Spec top 582, not 560 (current). Fix.
- **Boy AI image position**: Spec lines 751-759: 578×541 at `left: calc(50% - 578px/2)`, top **512**. Current: top **485**. Fix.
- **MiniCourseCard / UI/UX card**: Spec lines 1620-1639 says width **208×70** at (404, 639) — currently uses 218×80 at (390,615). We'll extend `MiniCourseCard` in FloatingCards.tsx to accept optional `width`/`height`/`padding` override props (with defaults), then pass 208×70/padding 16 from Hero.
- **Learning Progress card**: Spec says **232×131** at (842, 651) (current 850,631 close but wrong position + label should be `14px / 17px height` (Spec line 785-793: "width 115, height 17, size 14px/120%") — current FloatingCards ProgressCard is correct at 232×131/55%/label 115×17 for hero, but wrong coords; fix.
- **Happy Students card**: Spec lines 888-1166: 258×121 at (328, 837) — current coordinates are already correct; keep as-is.
- **Remove Decorations imports entirely** from HeroSection.tsx → replace with pure public SVG Image instances (spiral, Spiral 2d, Donut, Cone) using the proven color-filter approach from CreatorCTA/GrowthSection (no more `Decorations.tsx` for this file).

**Color filters (re-use from CreatorCTA/GrowthSection — proven not to bleed transparent canvas):**
- Lime: `saturate(0) sepia(1) saturate(5.8) hue-rotate(54deg) brightness(1.2) contrast(1.12)`
- White: `saturate(0) sepia(0) brightness(100) contrast(100)` — forces any color to pure white while staying on shape pixels only.

Public folder audit: All 4 required SVGs confirmed present in `/public/`:
✅ `spiral.svg` ✅ `Spiral 2d.svg` ✅ `Donut.svg` ✅ `Cone.svg`

## Files and Modules

- `src/components/home/HeroSection.tsx` — Rewrite ornaments layer to use 8 `<Image>` instances from the 4 public SVGs (with correct lime/white filters, cone flip transforms, exact positions/sizes per spec), fix text block position to `top:169 height:345`, fix Ellipse 7 top=582, fix boy AI top=512 left=center, pass correct width/height/padding overrides into the 3 FloatingCards and correct absolute positions for MiniCourseCard (208×70 @ 404,639) and ProgressCard (232×131 @ 842,651).
- `src/components/ui/FloatingCards.tsx` — Add optional `width?: number; height?: number; padding?: number; borderRadius?: number` props to `MiniCourseCard`, `ProgressCard` (StudentStatCard already has correct 258×121 default, keep unchanged). Existing callers that don't pass these props get current behavior (backward-compat with HeroSection in FloatingCards defaults? Need to check defaults: MiniCourseCard hero currently 218×80 padding 18; ProgressCard hero is 232×131 padding 16 — ProgressCard size is already correct so only MiniCourseCard needs the sizing override mechanism + values adjusted).

## Implementation Steps

1. **Update FloatingCards.tsx `MiniCourseCard`**:
   - Add optional `width?: number; height?: number; padding?: number; borderRadius?: number | string` props.
   - Default values remain `width:218, height:80, padding:18, borderRadius:16` so existing Hero/Growth callers stay same when no override supplied, and Hero can pass the spec's 208×70 with padding 16.

2. **Rewrite HeroSection.tsx**:
   - Delete imports of `LimeBlob, WhiteRing, WhiteTriangle, WhiteSquiggle, LimeRing, LimeSquiggle` from Decorations.
   - Add local constants: `LIME_FILTER` and `WHITE_FILTER`.
   - Keep Header grid-bg + search bar (search UI dimensions are correct in current code — matches spec lines 384-517 exactly).
   - Adjust **Hero content block** top to 169px and height 345px (spec line 314).
   - Adjust **Ellipse 7 lime ring** top to 582px (spec line 297).
   - Adjust **boy AI image** top to 512px and correct left formula `calc(50% - 578px/2)` — remove the old 460-centered math.
   - Adjust floating cards positions/sizes:
     - MiniCourseCard: pass `width={208} height={70} padding={16}`, position at absolute `(404, 639)`.
     - ProgressCard: position at absolute `(842, 651)` (size is 232×131 default already correct).
     - StudentStatCard: keep at `(328, 837)` (matches spec line 898-901).
   - **Ornaments layer (pointer-events-none, absolute 1440×1024)**: Build with 8 `<Image>` nodes with correct filters, flips, sizes and coordinates matching the CSS spec frames:
     1. Lime-tinted `spiral.svg` left-top: 330×330 at (−59, 142).
     2. Lime-tinted `spiral.svg` right-mid: 220×220 at (1155, 445).
     3. White-tinted `Spiral 2d.svg` left-mid above boy: 175×175 at (100, 420).
     4. White-tinted `Spiral 2d.svg` right-bottom below cone: 185×185 at (1155, 790).
     5. White `Donut.svg` (no filter? Use WHITE_FILTER for safety): 188×188 at (28, 791).
     6. Lime-tinted **& flipped horizontally** `Donut.svg` (matrix(-1,0,0,1,0,0) → `transform: scaleX(-1)`): 175×175 at (127, 475).
     7. **Lime-tinted** `Cone.svg` top-right big: 370×370 at (1205, 220).
     8. **White-tinted** `Cone.svg` left-bottom large: 342×342 at (−152, 682).
     9. **White-tinted** `Cone.svg` right-mid small: 188×188 at (1180, 470).
   - Use `position: absolute` + manual x/y on wrapper `<div>`, then `Image fill sizes=... className=object-contain` pattern (consistent with GrowthSection SVG ornaments). All paths use string literals `/spiral.svg`, `/Spiral 2d.svg`, etc.

## Dependencies and Considerations

- Color filter technique is battle-tested from CreatorCTA and GrowthSection (no canvas bleed, only shapes get tinted) — safe to re-apply for white and lime.
- Next.js `Image fill` + `object-contain` with wrapping relative div and explicit pixel dimensions prevents any SVG stretch/skew.
- `mix-blend-mode: hard-light` from spec lines 1337/1391/etc applies to 3D matcap assets, NOT to our flat SVG ornaments — ignore blend modes, they were tied to the old "Matcap Collection" bitmaps.
- Public SVGs have case-sensitive filenames (`Spiral 2d.svg` vs `spiral.svg`) — use exact casing from `Glob` audit output above.
- All FloatingCards.tsx changes are backward-compatible (optional props with existing defaults) so other consumers are safe (there are none today besides Hero, but defensive).

## Validation

1. `GetDiagnostics` HeroSection.tsx & FloatingCards.tsx → 0 errors.
2. `npm run lint` → 0 warnings.
3. `npm run build` → production build succeeds.
4. Visual sanity:
   - No `Decorations.tsx` based shapes on hero.
   - 4 distinct SVG shapes visible across screen: spiral (lime ×2), spiral 2d (white ×2), donut (white ×1 + lime flipped ×1), cone (lime top-right + white bottom-left + white mid-right).
   - Title/search block is 69px lower (top 169 not 100).
   - Boy is 27px lower (top 512 not 485).
   - MiniCourseCard is smaller (208×70 vs old 218×80).
   - Progress card shifted to (842,651) per spec.

## Risks

- **White saturation filter edge cases**: If `Spiral 2d.svg` already has white pixels, WHITE_FILTER still works correctly (whiter → still white; any color → pure white). If any ornament is 100% transparent, nothing renders (correct behavior). Mitigation: use white filter for all white-marked ones for consistency regardless of base SVG color.
- **Cone left-bottom placement bleeds off-screen left**: Spec has −152 left which is intentional; use `overflow-hidden` on outer `<section>` (already set) so it's clipped naturally.
- **ScaleX(-1) flip on lime donut**: Next.js Image with transform scaleX on the wrapping div is okay (applied via style). Double-check that size still matches 175×175 after flipping (it does, flip is axis-only).
