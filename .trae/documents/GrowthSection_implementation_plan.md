# Growth Section (1440p) Implementation Plan

## Repository Research

**Current state:**
- `GrowthSection.tsx` exists with a simple two-column layout (text+stats left, generic AI image right with MiniCourseCard + ProgressCard) but does NOT match the 1440p spec.
- `CreatorSection.tsx` exists as a SEPARATE section with the "Create & Manage Courses Easily." copy + checklist on the right and a generic creator image left.
- Per the 1440p reference image AND CSS spec (`Frame 15`), these two should be MERGED into a SINGLE `GrowthSection` spanning 1440×1460 with two stacked rows (gap 72px).
- Home page `page.tsx` currently renders BOTH `<GrowthSection />` followed by `<CreatorSection />`. After this change, only the new merged GrowthSection appears.

**Design tokens already established (from prior sections / tailwind.config.ts):**
- Fonts: `Poppins` (headings, `font-heading`) and `Satoshi` (body, default `font-sans` family via CSS).
- Colors: `#003BE2` (Persian Blue / brand-blue), `#CBFC01` / `#D4FB20` (Electric Lime variants), `#242528` (#Shuttle Gray 950 / text), `#4B4C53` (Shuttle Gray 700 / muted body), `#FAFAFA` (section background).
- Public SVG assets available: `boy AI.svg`, `girl AI.svg`, `spiral.svg` (plus `Spiral 2d.svg`, `frame.png` for re-use).
- Public PNG assets available: `frame.png` (used on Course cards).
- `FloatingCards.tsx` already contains `ProgressCard` (Learning Progress design for 55%), `StudentStatCard` (Happy Students), and generic `RevenueCard`/`ViewsCard` — but the spec requires custom-sized blue revenue & YTD cards for the girl visual (not the generic white variants). These will be inlined in GrowthSection.

**CSS Spec file key measurements (1440 × 1460 frame):**
- Background: `#FAFAFA`
- 5 blurred radial-gradient ellipses (lime + blue) across the full section.
- Inner container: 1258×1220 at `left:121 top:120`, `flex-col`, `gap:72`.
  - **Row 1 (Frame 13):** 1258×552, `flex-row align-items:center`, `gap:63`.
    - Left (Text/Stats): 574×404, `flex-col`, `gap:40`.
      - H: "Your Path to Professional Growth Starts Here!" — Poppins 600, 44/120%, -0.01em tracking, #242528, 577×106.
      - Body: 477×145, Satoshi 400, 18/160%, #4B4C53.
      - Stats row: 314×73, `flex-row align-items:flex-end`, `gap:56`.
        - 12K (Poppins 500, 36/44, #003BE2, 53×44) + Students (Satoshi 400, 18/160%, #4B4C53, 69×29)
        - 70+ (Poppins 500, 36/44, #003BE2, 61×44) + Courses (65×29)
        - 16 (Poppins 500, 36/44, #003BE2, 34×44) + Creators (68×29)
    - Right (Visual, Frame 11): 621×552, absolute sub-layout.
      - Mini course card (Course_Card_1): 373×384 at (0,0). Border 1px #CED0D3, radius 24.
        - Image: 341×195.14 at (16,16), radius 12, bg `/frame.png`.
        - Glass chips row: 315×32 at (12,150), gap 12.
          - 17 Lessons (81×32), 2 hours 16 mins (109×32), 59 Comments (101×32) — each `rgba(246,246,246,0.6)`, backdrop-filter blur(4px), radius 24.
        - Text block: 237×136 at (16,232), `flex-col`, `gap:16`.
          - Title: "Learn Figma from Basic" (Poppins 600, 20/28, #000, 234×28)
          - Byline: "by purepearl studio" (Satoshi 400, 12/20, #4F4F4F, 101×20)
          - Row: Beginner pill 97×32 (#F5F5F6, icon + "Beginner" Satoshi 500 12/20 #4B4C53, radius 24), Avatar stack 128×32 (4×32px avatars, margin 0 -8px; black 32px pill with "26+" white), and price row ($25 Poppins 500 20/28 #003BE2 + /lifetime Satoshi 400 12/20 #4F4F4F).
        - Rating: 51×28 at (306,232) — "4.5" (Satoshi 500, 18/28, #4F4F4F) + star 24×24 #D4FB20.
      - boy AI SVG: 577×540 at (0,12), hero drop-shadow filter (same 8 layers as hero section).
      - Learning Progress card: 232×138 at (345,213). White bg, radius 16, padding 16, gap 8, backdrop blur(10).
        - Label "Learning Progress": Satoshi 500 14/24 #242528.
        - "55%": Poppins 600 48/120% #242528.
        - Progress bar: 200×8, track #F6F6F6, 112px fill #D4FB20.
      - Lime spiral SVG (`spiral.svg` tinted lime via CSS filter) positioned behind progress card (top-right area ~size 215px).
  - **Row 2 (Frame 14):** 1200×596, `flex-row align-items:center`, `gap:79`.
    - Left (Visual, Frame 12): 541×596, absolute sub-layout.
      - Revenue card (blue): 232×119 at (0,44). BG `#003BE2`, radius 16, padding 16, gap 8, backdrop blur(10).
        - "Total Revenue" (Satoshi 500, 16/120%, #F5F5F6, 101×19) + "July 1-28" (Satoshi 400, 10/120%, #F5F5F6, 40×12).
        - Row: "$120.29" (Poppins 600, 24/32, #F5F5F6) + "+12$" pill (#CBFC01 bg, 38×24, radius 24, Satoshi 500 10/200% #242528).
        - Bar: 200×8 at y=95, white track, 112px #D4FB20 fill.
      - YTD card (blue): 134×135 at (0,194). BG `#003BE2`, radius 16, padding 16, gap 8.
        - "Year to Date" (Satoshi 500 16/120% #F5F5F6) + "2023" (Satoshi 400 10/120% #F5F5F6).
        - "$1,200.38" (Poppins 600 24/32 #F5F5F6).
        - "+12$" pill (#CBFC01, 38×24).
      - girl AI SVG: 435×596, horizontally centered via `left: calc(50% - 435px/2 - 25px)`, top 0, same drop-shadow filter.
      - Happy Students card: 258×123 at (283,413). White bg, radius 16, padding 16, gap 8, backdrop blur(10).
        - Label + rating row: "Happy Students" (Satoshi 500 16/24 #242528) + "4.5 (240)" (Satoshi 700 10/150% #242528) + lime star (16×16, #D4FB20).
        - Avatar stack: 7× (43×43 avatars, margin 0 -16px) + `2K+` lime circle (43×43, #D4FB20, + centered 2K+ text Satoshi 700 12/150% #242528).
      - Lime spiral SVG (tinted lime via filter) ~215px in upper-right region of this visual.
    - Right (Text/Checklist): 580×388, `flex-col`, `gap:40`.
      - H: "Create & Manage Courses Easily." — Poppins 600 44/120% -0.01em #242528, 391×106.
      - Body: "ByteSpace supports individuals..." — Satoshi 700 (bold) 18/28 #242528, 574×58.
      - Checklist: 231×144, `flex-col`, `gap:16`. 4 items. Each item: `flex-row align-items:flex-end`, `gap:8`.
        - 24×24 filled check-circle icon (`#003BE2` fill, white tick).
        - Label (Satoshi 500 18/120% #242528):
          1. Share Your Expertise (167×22)
          2. Monetize Your Passion (182×22)
          3. Flexibility and Autonomy (199×22)
          4. Build a Community (155×22)

## Files and Modules

- `src/components/home/GrowthSection.tsx` — **Complete rewrite** to the merged 2-row 1440p spec (eliminates old generic Growth layout).
- `src/app/page.tsx` — Remove `CreatorSection` import and its `<CreatorSection />` element; its content is now inside the merged GrowthSection.
- (Optional — no changes): `src/components/home/CreatorSection.tsx` — left as-is / orphaned; not imported anymore. We do not delete it (safe default).
- (Optional — no changes): `src/components/ui/FloatingCards.tsx` — existing cards are NOT re-used directly (Growth cards use custom sizes and new blue variants); re-use `StudentStatCard` default happy-students variant if dimensions match, otherwise inline all cards for pixel control.

## Implementation Steps

1. **Rewrite `GrowthSection.tsx`** from scratch using the absolute-positioned-1440-frame pattern (same approach as CreatorCTA, HeroSection 1440p sections):
   - 1440×1460 outer `<section>` with `#FAFAFA` background, overflow hidden, `mx-auto` constrained to max-width 1440.
   - 5 blurred radial-gradient ellipse layers (absolute, pointer-events-none) matching the exact CSS ellipse positions/colors/blur 20px.
   - Inner 1258×1220 flex-col container at `left:121 top:120` with `gap:72`.
   - **Row 1 (Frame 13):**
     - Left Text/Stats column (flex-col gap 40, 574×404): heading, body, stats row (3 stat blocks).
     - Right Visual column (621×552 absolute sub-layout):
       - Mini course card (373×384 at 0,0) — inline structure (image, glass chips, title/byline, beginner pill, avatar stack, price, rating). Use `/frame.png` for card image, pravatar avatars 32×32 (from existing `AVATAR_A` pattern).
       - `<Image src="/boy AI.svg" ...>` 577×540 at (0,12) with the 8-layer drop-shadow filter.
       - Inline Learning Progress card (232×138 at 345,213) with 55% value.
       - Lime spiral ornament (`spiral.svg` + lime CSS filter) ~215px in upper-right of the boy visual (match Frame 1214–1246 in spec: 215px wide absolute element).
   - **Row 2 (Frame 14):**
     - Left Visual column (541×596 absolute sub-layout):
       - Inline blue Revenue card (232×119 at 0,44).
       - Inline blue YTD card (134×135 at 0,194).
       - `<Image src="/girl AI.svg" ...>` 435×596 centered, drop-shadow.
       - Inline Happy Students card (258×123 at 283,413) with 7 43×43 pravatars + 2K+ lime pill.
       - Lime spiral ornament (`spiral.svg` + lime CSS filter) ~215px.
     - Right Text/Checklist column (580×388, flex-col gap 40): heading, bold body, 4-point checklist with 24px blue filled check circles (use lucide `CheckCircle2` filled or inline SVG — preference: inline SVG to match exact blue fill `#003BE2` with white tick on 24px circle).

2. **Update `src/app/page.tsx`:**
   - Remove `import { CreatorSection } ...` line.
   - Remove `<CreatorSection />` JSX element between GrowthSection and CreatorCTA.

3. **Re-use public assets correctly:**
   - Boy character: `src="/boy AI.svg"` (public).
   - Girl character: `src="/girl AI.svg"` (public).
   - Spirals: `src="/spiral.svg"` (public) with lime CSS filter (same `LIME_FILTER` as CreatorCTA, but possibly at ~70–80% intensity per reference).
   - Course card image: `src="/frame.png"` (public).

## Dependencies and Considerations

- All public folder assets are referenced by string path (no `import ... from`), consistent with the SVG routing fix applied earlier in this session.
- The 8-layer drop-shadow filter used for Hero boy AI is re-applied here for both boy and girl AI SVGs for visual parity.
- Tailwind preflight resets margins/paddings; we use inline `style` objects for all pixel-accurate dimensions to match the spec exactly (same convention as HeroSection/CreatorCTA 1440p sections).
- The lime CSS filter constants can be re-exported or duplicated locally; to keep self-contained we duplicate the `LIME_FILTER` locally in GrowthSection.tsx.
- We do NOT touch CreatorSection.tsx itself (no delete) — leave as dead module to avoid unintended blast radius. If the user wants it deleted they can ask explicitly.

## Validation

- `npm run lint` — must return 0 warnings/errors.
- `npx tsc --noEmit` or `npm run build` — must compile without TypeScript errors. (We fixed Course.description earlier so build baseline is green.)
- Manual visual review: confirm both rows render inside a 1440-wide frame with background `#FAFAFA`, all cards at exact pixel offsets, both AI SVGs visible, and the CreatorSection no longer renders as a separate section on the home page.

## Risks

- **Avatar stack math:** Multiple overlapping circles need exact negative margins (`margin: 0 -8px` for 32px, `0 -16px` for 43px) — double-check against spec to prevent gaps/overlap issues.
- **Deep absolute nesting inside 1440 frame:** All absolute positions in the visuals are relative to the 621×552 and 541×596 parent containers (which themselves are inside the 1258-wide inner flex container). If we set `position:relative` on each visual wrapper correctly, offsets match the CSS spec.
- **Spiral SVG tinting without canvas bleed:** Re-use the proven CSS filter-based approach from CreatorCTA rather than modifying the SVG, ensuring transparent canvas stays transparent.
