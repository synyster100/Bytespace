# CourseCard ← Growth Mini-Course Layout Implementation Plan

## Repository Research

**Goal**: Replace the current `CourseCard` body design with the layout from the **GrowthSection's mini course card** (GrowthSection.tsx lines 385–813), which contains 5 distinct zones compared against the current `CourseCard`:

### Growth Section mini-card anatomy (373×384, ref "Course_Card_1"):
1. **Image** (341×195.14 at 16,16) — radius 12.
2. **Glass chips row** (315×32 at 12,150, gap 12) — 3 pills with `rgba(246,246,246,0.6)` + `backdrop-filter: blur(4px)`, radius 24. Chip text Satoshi 500/12/20 #4F4F4F:
   - `17 Lessons` (81×32), `2 hours 16 mins` (109×32), `59 Comments` (101×32).
3. **Text block** (237×136 at 16,232, flex-col gap 16):
   - Title (Poppins 600, 20/28, #000) + by-line "by purepearl studio" (Satoshi 400, 12/20, #003BE2).
   - Inline row (gap 12): **Beginner pill** (97×32, #F5F5F6, signal icon + Satoshi 500/12/20 #4B4C53, radius 24) followed by **Avatar stack** (128×32, 4×32px avatars with margin `0 -8px`, border 2px white + "26+" black 32px counter pill).
4. **Price row** (absolute 78×24 at 16,344): $25 (Poppins 500, 20/28 #003BE2) + /lifetime (Satoshi 400, 12/20 #4F4F4F).
5. **Rating** (absolute 51×28 at 306,232): 4.5 (Satoshi 500, 18/28 #4F4F4F) + lime Star 24×24 #D4FB20.

### Current CourseCard anatomy (project rules: 440 max-width × 460 tall, 1px #CED0D3 border, radius 24):
- Shell: 12px inner padding, flex-col gap 24. Cover 416×240, glass-chip-based chip row (different bg `rgba(245,245,246,0.85)`, padding 6/14, Satoshi 400/12/22, color #242528, bottom-left).
- Text body: 6 distinct rows (padded 4px, gap 12): title + rating/star row, by creator, description line-clamp-2, level pill (bordered 1px #CED0D3 with bars icon) vs avatar + green extraCount stack row, price row.
- Has a description field from the `Course` interface (added earlier to make build pass).

### Key design differences (→ proposed resolution):
- **Image position**: Growth card puts image at top inside with absolute chips overlay. Current card also does this → re-use cover layout but **align chips to match the Growth card styles** (`rgba(246,246,246,0.6)` + blur 4 + exact sizes from Growth spec).
- **Rating placement**: Current card puts rating inline next to the title. **Growth card puts rating at the same y as the title but on the far right, 51×28, star lime-filled 24×24.** We replicate exactly.
- **Byline**: Current card uses Satoshi 14/20 #003BE2 blue. Growth card uses **Satoshi 12/20** with creator-name portion in #003BE2 → adopt Growth typography.
- **Level pill**: Current card has bordered pill with bars icon + 14/22 Satoshi. **Growth card uses a filled #F5F5F6 pill 97×32 with custom signal icon (3 bar-chevrons) + Satoshi 500/12/20 #4B4C53.** Replace level pill design with the Growth version (size up slightly to maintain 36 px-ish visual weight at 440-card scale — width auto instead of fixed 97 so e.g. "Intermediate" fits).
- **Avatar stack + extraCount pill**: Current card puts these on the right of a justify-between row, on top of a 36×36 circle stack with extraCount lime circle. Growth card uses **32×32 avatars, −8px margin (tighter), with a BLACK counter pill (32×32) white text.** Replace with the Growth stack + black counter (use `course.extraCount` as the value). Position this **to the right of the Beginner pill** (same row, gap 12) matching Growth's inline-row 2 pattern.
- **Price row**: Current card uses Poppins 24/32 weight 700 #003BE2 + 14/22 Satoshi suffix. Growth spec uses **Poppins 500/20/28** + **Satoshi 400/12/20 #4F4F4F suffix** — adopt exactly per the reference layout.
- **Description**: The current card has a description line-clamp-2. The Growth **mini** card intentionally has no description (it's a smaller floating card). Since the project-level Course interface already mandates description and 460px-tall shells need the vertical fill, we **retain description in CourseCard** as a line-clamp-2 paragraph (Satoshi 14/20 #6B6F78, same values currently used) inserted after the byline to use the extra vertical space afforded by the 440-wide shell. This is the sole deviation from the pure mini-layout transplant because:
  1. CourseCard shell is 460 tall (vs mini 384) — would leave empty blank otherwise.
  2. The Course interface was recently updated to require `description` for all courses, and it would be wasted data otherwise.
  3. All other visual elements (chips style, rating position, level pill style + signal icon, avatar stack + BLACK counter, price typography) perfectly match the Growth layout.

**Shell size retention**: Per project rules ("CourseCard shell must be 440px max width, 460px tall, 24px radius, 1px #CED0D3 border"), the 440×460 shell dimensions are preserved; all relative inner spacings scale to use the 12px card padding.

**Consumers / blast radius audit**:
- `CourseGrid.tsx` → `<CourseCard course={course} />` (primary consumer, 6 grid cards on home page)
- `HeroSection.tsx` → uses `MiniCourseCard` from `FloatingCards.tsx` (not `CourseCard`, unaffected)
- `FloatingCards.tsx` → has `MiniCourseCard` type, independent of `CourseCard`
- `Course` interface (courses.ts): already has `image, lessons, duration, comments, title, creator, rating, price, priceSuffix, level, avatars, extraCount, description, category`. **No new fields needed.**

## Files and Modules

- `src/components/home/CourseCard.tsx` — Rewrite internals to match Growth mini-card layout (preserving 440×460 shell and keeping description fill paragraph). This is the ONLY change needed.
- (No changes) `src/data/courses.ts` — interface already has every required field.
- (No changes) `src/components/home/CourseGrid.tsx` / `CourseExplorer.tsx` — card API unchanged.
- (No changes) `GrowthSection.tsx` — its inline mini course card may optionally be refactored later to use `CourseCard`, but that is out of scope to avoid diff bloat; right now we only port the layout INTO the main `CourseCard` component.

## Implementation Steps

1. Rewrite `CourseCard.tsx`:
   - **Shell**: Keep 440w × 460h, 1px #CED0D3, 24 radius, `padding: 12px`, `gap: 24` (per project rules).
   - **Cover area** (now 416×240, radius 16):
     - Top image using `course.image` (Next `<Image fill>` + `object-cover`).
     - Overlay chip row at `left:14 bottom:14` (as current) with 3 chips but **change chip styling to match Growth spec**: `rgba(246,246,246,0.6)` + `backdrop-filter: blur(4px)`, radius 24, `padding:6px 12px`, chip text **Satoshi 500/12/20 #4F4F4F** (replace the old chip styling; make the Chip component accept optional style tweaks OR in-place styles). Chips: `{course.lessons} Lessons`, `{course.duration}`, `{course.comments} Comments`.
   - **Text body area** (below cover, `width:100%`, `padding: 0 4px`, flex-col, gap 12):
     - **Row A: Title + rating** (flex-row align-items center justify-between):
       - Title left: Poppins 600/20/28, −0.01em, #000, line-clamp-1.
       - Rating far-right (use Growth positioning spec, 51×28 size): Satoshi 500/18/28 #4F4F4F number + 24×24 lime-filled Star (`fill: #D4FB20`, same approach as Growth). Use lucide `<Star>` with fill + color both `#D4FB20` — matches Growth rating exactly (remove `StarHalf` helper from the file since it won't be used anymore, simplifying imports).
     - **Row B: Byline**: Satoshi 400/12/20 #4F4F4F prefix "by " + `#003BE2` colored creator name (Growth uses the blue wrap on the creator only; we replicate with a span).
     - **Row C: Description** (the only added fill element): line-clamp-2, Satoshi 14/20 #6B6F78.
     - **Row D: Level pill + avatar stack (inline row, gap 12, no justify-between)** (exact Growth pattern):
       - Level pill — adopt Growth design (replace the bordered bars-level-pill): filled `#F5F5F6` bg, radius 24, `padding:6px 12px`, inline-flex gap 4, growth custom **signal icon (3 chevrons pointing up-right, same SVG as `SignalIcon` used in Growth)**. Width auto so e.g. "Intermediate" fits; text: Satoshi 500/12/20 #4B4C53.
       - Avatar stack — match Growth: 32×32 per avatar, white 2px border, margin `i==0 ? "0 -8px 0 0" : "0 -8px"`, `relative`, box-sizing border-box. Counter pill (for `extraCount`) → BLACK 32×32 bg `#000000`, white text "26+"-style Satoshi 500/12/20. Replace the current lime counter with this black one to match Growth.
     - **Row E: Price** (flex-row items-end):
       - Value Poppins 500/20/28 #003BE2 −0.01em, suffix Satoshi 400/12/20 #4F4F4F.
2. Delete unused helper components from the file if orphaned after refactor:
   - Remove `StarHalf` function (no longer used after switching to the lime lucide Star).
   - Remove old `LevelPill` function (replace with Growth-level inline design, or rename/reuse).
   - Update `Chip` to match exact Growth chip design (simplify).

## Dependencies and Considerations

- `lucide-react` `Star` is already in-use in `GrowthSection.tsx`; CourseCard.tsx will need `import { Star } from "lucide-react"`.
- Shell constraints (440×460) preserved per project memory so CourseGrid layout (gap-6 3-col) continues to align.
- Rating precision: current course data uses `4.5` for all courses; in the future if courses have `4.2` etc they'll still render fine.
- **Category is unused** in the new layout (consistent with Growth mini-card, which doesn't display it either) — we leave `category` on the Course interface since it's used by `CategoryFilters` and other routes potentially.
- All `course.*` fields referenced exist on the interface already: `image, lessons, duration, comments, title, creator, rating, price, priceSuffix, level, avatars, extraCount, description`. No TS additions.

## Validation

1. **Diagnostics**: `GetDiagnostics` for CourseCard.tsx → 0 errors.
2. **Lint**: `npm run lint` → 0 warnings.
3. **Build**: `npm run build` → success. (Course.description field added earlier keeps tsc happy.)
4. **Visual sanity**: 6 grid cards on `/` should now:
   - Have `rgba(246,246,246,0.6) blur(4px)` glassy chips (not 0.85 opaquer variant).
   - Rating pushed to far right at title row (24px lime star, not 20px half-star).
   - Level pill filled #F5F5F6 with signal icon (no bordered bars pill).
   - Avatar counter is **black with white text** (no lime green), 32×32 tighter circles (margin -8).
   - Price uses Poppins 500/20 (not 700/24), with smaller Satoshi 12 suffix.
   - Description still present (line-clamp-2).

## Risks

- **"Description paragraph" deviation**: Some might argue the pure Growth transplant should remove description entirely. Mitigation: justified because the shell is 76px taller than 384 and interface already has `description`; if user wants zero-description, they can ask for a second pass — flagged explicitly.
- **Avatar counter color change**: The counter flips from lime-filled to black-filled (per Growth spec reference) — this is intentional but a noticeable visual change vs. the current CourseCard; flagged as a known difference the user requested by referencing Growth layout (4.5 satoshi + star layout explicitly uses a black counter too in the Growth mini version).
- **Level pill icon swap**: Replaces "bars" icon with the chevron-up-right "Signal" icon — matches the Growth Beginner pill exactly (used in the spec).
