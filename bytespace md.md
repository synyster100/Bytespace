# ByteSpace Landing Page: Next.js Pixel-Perfect Build Specification

## 1. Objective

Build the ByteSpace landing page shown in the supplied reference image
(`Home.png`) as a component-based Next.js application.

The implementation must reproduce the reference as closely as possible
in:

-   Layout
-   Typography
-   Colors
-   Spacing
-   Borders
-   Shadows
-   Cards
-   Decorative shapes
-   Image composition
-   Text/content
-   Section ordering
-   Navigation
-   Buttons
-   Course cards
-   Testimonial cards
-   Footer structure

Do **not** redesign, simplify, modernize, or replace the visual
direction. The reference image is the source of truth.

The page should be implemented as real HTML/CSS/React components, not as
one large screenshot/background image.

------------------------------------------------------------------------

# 2. Recommended Stack

Use:

-   Next.js with App Router
-   TypeScript
-   Tailwind CSS
-   React
-   Lucide React or another lightweight icon library where icons are
    required
-   Next/Image for raster images
-   CSS gradients and positioned elements for decorative shapes
-   Google Font or locally hosted font matching the reference as closely
    as possible

Suggested project setup:

``` text
Next.js
TypeScript
Tailwind CSS
App Router
ESLint
Prettier
```

------------------------------------------------------------------------

# 3. Suggested Project Structure

``` text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── BrandStrip.tsx
│   │   ├── CategoryFilters.tsx
│   │   ├── CourseCard.tsx
│   │   ├── CourseGrid.tsx
│   │   ├── LearningPaths.tsx
│   │   ├── GrowthSection.tsx
│   │   ├── CreatorSection.tsx
│   │   ├── CreatorCTA.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── TestimonialCard.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── AvatarStack.tsx
│       └── SectionHeading.tsx
│
├── data/
│   ├── courses.ts
│   ├── categories.ts
│   ├── learningPaths.ts
│   └── testimonials.ts
│
└── public/
    ├── images/
    ├── icons/
    └── logos/
```

------------------------------------------------------------------------

# 4. Global Visual System

## Primary Colors

The dominant brand colors visible in the reference are:

``` text
Primary Blue:      #003BE2 / close visual match
Bright Lime:       #D4FB20 / close visual match
White:             #FFFFFF
Near Black:        #111111
Soft Gray:         #F5F5F5
Border Gray:       #E5E5E5
Muted Text:        #777777
```

The exact values should be tuned against the reference screenshot during
implementation.

## Visual Characteristics

The design uses:

-   Strong electric blue backgrounds
-   Bright lime-green accents
-   Large white headings
-   Rounded cards
-   Thin light-gray borders
-   Soft shadows
-   Large whitespace areas
-   Floating UI cards
-   Circular and abstract decorative shapes
-   Grid-line patterns in blue sections
-   Rounded pills
-   Minimal black/dark typography
-   Large centered section headings

## Border Radius

Use a consistent rounded visual language:

``` text
Small pills:       9999px
Buttons:           9999px
Course cards:      10px-14px
Content cards:     10px-14px
Large panels:      16px-24px
```

------------------------------------------------------------------------

# 5. Page Section Order

The complete page must appear in this order:

``` text
1. Header
2. Hero
3. Brand / Logo Strip
4. Discover Your Passion / Course Explorer
5. Course Grid
6. Learning Paths
7. Professional Growth Section
8. Creator Management Section
9. Creator CTA
10. Testimonials
11. Footer
```

------------------------------------------------------------------------

# 6. Header Component

Component:

``` text
Header.tsx
```

## Layout

Desktop:

``` text
[ByteSpace Logo]          Home   Courses   Creators          Sign Up   Join Us   Bag/Icon
```

The header sits over the blue hero background.

Use a centered max-width container.

Approximate structure:

``` tsx
<header>
  <div className="container">
    <Logo />
    <nav>
      <a>Home</a>
      <a>Courses</a>
      <a>Creators</a>
    </nav>

    <div>
      <a>Sign Up</a>
      <a>Join Us</a>
      <Icon />
    </div>
  </div>
</header>
```

## Visual Requirements

-   Blue background
-   Very thin vertical grid lines
-   Small white/light navigation text
-   ByteSpace logo at the top-left
-   Small navigation typography
-   Generous horizontal spacing
-   Header should remain visually integrated with Hero

## Mobile

Collapse navigation into a compact menu.

The desktop composition is the pixel-perfect reference, but mobile must
remain usable.

------------------------------------------------------------------------

# 7. Hero Section

Component:

``` text
HeroSection.tsx
```

## Background

Use the same strong electric blue as the header.

Add a subtle square/grid pattern.

The grid should resemble:

``` text
|   |   |   |   |
----+---+---+----
|   |   |   |   |
----+---+---+----
|   |   |   |   |
```

The grid lines should be subtle and low-opacity.

## Main Heading

Exact text:

``` text
Get Access to Hundreds
Courses Available
```

The heading is centered and white.

Desktop:

-   Very large bold typography
-   Two lines
-   Tight line-height
-   Center aligned

## Supporting Text

Use:

``` text
Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
```

The screenshot contains a small, centered supporting sentence beneath
the heading. Keep it compact and muted against the blue background.

## Search

Centered search interface:

``` text
[ Search Course, topic, creator ] [ Search ]
```

Search input:

-   White background
-   Rounded pill
-   Small search icon
-   Gray placeholder
-   Compact height

Search button:

-   Bright lime background
-   Dark text
-   Pill-shaped

## Hero Visual

The bottom half of the hero contains a large student/creator image
surrounded by floating course UI cards.

Important visual elements:

### Main image

A smiling young creator holding a laptop.

Place the image approximately centered horizontally and overlapping the
lower hero boundary.

### Floating card: UI/UX Design

Small white card positioned toward the upper-left of the person.

Content:

``` text
UI/UX Design
$20 Course
```

### Floating card: Learning Progress

Position toward the upper-right.

Content:

``` text
Learning Progress

55%
```

The `55%` should be visually prominent.

### Floating card: Happy Students

Position lower-left.

Content:

``` text
Happy Students
45.7K
```

Include a small avatar stack.

### Decorative shapes

Use:

-   Lime abstract rounded shape on the left
-   Lime abstract shape on the right
-   Large lime circular/arc shape behind the person
-   White abstract ring on the lower-left
-   White triangular shape on the right
-   Small white/lime squiggle shapes
-   Black/dark shadow behind the main image where visible

Do not replace these with generic emojis.

Use CSS/SVG shapes or supplied image assets.

------------------------------------------------------------------------

# 8. Brand Strip

Component:

``` text
BrandStrip.tsx
```

Place immediately below the hero.

Background:

``` text
#F5F5F5
```

Horizontal row of five gray placeholder brand logos.

The reference shows repeated:

``` text
Logipsum
Logipsum
Logipsum
Logipsum
Logipsum
```

Use gray monochrome logo treatments.

Desktop:

``` text
Logo  Logo  Logo  Logo  Logo
```

Mobile:

Allow horizontal wrapping or a horizontal scroll.

------------------------------------------------------------------------

# 9. Course Discovery Section

Components:

``` text
SectionHeading.tsx
CategoryFilters.tsx
CourseGrid.tsx
CourseCard.tsx
```

## Section Heading

Heading:

``` text
Discover Your Passion,
Build Your Skills
```

Centered.

Supporting text:

``` text
At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
```

Keep the typography small and centered as shown.

------------------------------------------------------------------------

# 10. Category Filters

Display pill-shaped category buttons.

Visible categories from the reference:

``` text
Featured
Music
Drawing & Painting
Marketing
Animation
Social Media
UI/UX Design
Creative Marketing
Digital Illustration
Film & Video
Crafts
Finance & Entrepreneurship
Graphic Design
Photography
Productivity
Web Development
Data Science
Cooking
+ More
```

The first category is selected.

Selected state:

-   Lime background
-   Dark text

Unselected:

-   Very light gray/white background
-   Dark/gray text
-   Thin border

The pills should wrap naturally.

------------------------------------------------------------------------

# 11. Course Grid

Use a six-card visible desktop grid arrangement similar to the
reference.

Desktop:

``` text
Card  Card  Card
Card  Card  Card
```

Each card should be approximately equal width.

Component:

``` text
CourseCard.tsx
```

## Course Card Structure

``` text
┌──────────────────────────┐
│                          │
│       Course Image       │
│                          │
├──────────────────────────┤
│ Course Title       4.5 ★ │
│ by Creator               │
│                          │
│ avatars + students       │
│                          │
│ $25                      │
└──────────────────────────┘
```

## Visible Course Titles

Use the exact titles visible in the screenshot:

``` text
Learn Figma from Basic
Build Digital Asset
The Power of Big Data
Balancing Productivity on...
Mastering Money Manage...
From Idea to Startup Succ...
```

Where the screenshot truncates a title, preserve the visual truncation
with CSS rather than inventing additional copy.

## Card metadata

Include:

``` text
4.5 ★
```

Creator text:

``` text
by [creator]
```

Include small circular avatars.

Include a lime circular/rounded student count badge where visible.

Price:

``` text
$25
```

The price is displayed near the bottom-left of each card.

## Card image

The six cards use different course imagery:

1.  Figma/design workspace
2.  Digital asset/design interface
3.  Data visualization/code
4.  Productivity workspace
5.  Financial/data chart
6.  Startup/team meeting

Use appropriately matched images if original assets are unavailable, but
preserve:

-   Image crop
-   Aspect ratio
-   Card height
-   Rounded image corners
-   Overlay labels

------------------------------------------------------------------------

# 12. Learning Paths Section

Component:

``` text
LearningPaths.tsx
```

Heading:

``` text
Explore Diverse Learning Paths at ByteSpace
```

Supporting text:

``` text
At ByteSpace, we believe in empowering individuals through knowledge. Our diverse range of course topics covers
fields, ensuring there's something for everyone. Unlock your potential and explore our carefully curated categories.
```

## Category Cards

Display six compact category cards.

Visible categories:

``` text
Design
Development
IT & Software
Business
Marketing
Photography
```

Each card contains:

-   Rounded square/rectangular white card
-   Thin border
-   Lime circular icon container
-   Dark icon
-   Small label

Desktop layout:

``` text
[Design] [Development] [IT & Software] [Business] [Marketing] [Photography]
```

------------------------------------------------------------------------

# 13. Professional Growth Section

Component:

``` text
GrowthSection.tsx
```

This is a large light gradient section.

Background:

-   White
-   Very subtle lime glow
-   Very subtle pale blue glow

Use radial gradients.

## Left Content

Heading:

``` text
Your Path to Professional
Growth Starts Here!
```

Supporting paragraph:

``` text
Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path, you'll have the resources you need.
```

Stats:

``` text
12K+
Students

70+
Courses

16
Creators
```

Use blue/lime accent styling.

## Right Visual

Use the same visual language as the hero:

-   Student image
-   Course card
-   Learning progress card
-   Lime decorative squiggle
-   Soft shadow

This section should feel like a continuation of the hero visual system.

------------------------------------------------------------------------

# 14. Creator Management Section

This section is visually split into two columns.

## Left

Large creator image:

-   Female creator
-   Tablet/device
-   Floating revenue card
-   Floating views card
-   Happy students card
-   Lime decorative shape

Floating metrics:

``` text
Total Revenue
$120.29
```

and:

``` text
Views on Posts
$1,200.38
```

The exact screenshot text should be preserved where legible.

## Right

Heading:

``` text
Create & Manage
Courses Easily.
```

Supporting copy:

``` text
ByteSpace supports individuals or entities in the creation, publication,
and administration of educational courses.
```

Checklist:

``` text
Share Your Expertise
Monetize Your Passion
Flexibility and Autonomy
Build a Community
```

Each item uses a small blue circular check icon.

------------------------------------------------------------------------

# 15. Creator CTA Section

Component:

``` text
CreatorCTA.tsx
```

Full-width blue section.

Use the same grid pattern as the Hero.

## Heading

Exact text:

``` text
Unlock Your Potential as a
Creator with ByteSpace
```

Centered, white.

## Supporting text

Use the reference copy:

``` text
Experience the collaboration of numerous creators and a expanding selection of courses. Together we can find success in part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your first course on the ByteSpace Course Library.
```

Keep text width narrow and centered.

## Button

``` text
Join as Creator
```

Lime pill button.

## Decorations

Use the same decorative visual language as the hero:

-   Lime blobs
-   White triangle
-   White squiggle
-   Lime ring
-   Grid background

------------------------------------------------------------------------

# 16. Testimonials Section

Component:

``` text
TestimonialsSection.tsx
TestimonialCard.tsx
```

Background:

-   White
-   Very subtle lime/blue glow behind content

## Heading

``` text
Discover What Our
Community Is Saying
```

Left aligned.

## Supporting copy

The right side contains introductory text:

``` text
At ByteSpace, our vibrant community of learners and creators is at the
heart of what we do. Hear directly from those who have experienced the
transformative journey of learning and creating on our platform.
```

## Testimonial Cards

Three cards:

### Card 1

``` text
Sarah M.
Enthusiastic Learner
```

Quote:

``` text
"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
```

### Card 2

``` text
James L.
Lifelong Learner
```

Quote:

``` text
"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
```

### Card 3

``` text
Alex B.
Engaging Creator
```

Quote:

``` text
"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
```

Each card contains:

-   Circular profile image
-   Name
-   Blue role/category
-   Paragraph
-   White background
-   Rounded corners
-   Subtle shadow/border

------------------------------------------------------------------------

# 17. Footer

Component:

``` text
Footer.tsx
```

White background.

## Left column

ByteSpace logo.

Text:

``` text
Stay Up to date with our latest features and releases by joining our newsletter.
```

Email field:

``` text
Enter your email
```

Button:

``` text
Subscribe
```

Small privacy/terms text underneath.

## Footer navigation columns

Visible headings:

``` text
Product
Resources
Design
```

and:

``` text
Development
Marketing
Photography
```

and:

``` text
Resources & Contact
```

and:

``` text
API
Contact
Help
About
```

Preserve the small typography and compact spacing shown in the
reference.

## Bottom Bar

Copyright:

``` text
© 2023 ByteSpace. All rights reserved.
```

Right-side links:

``` text
Privacy Policy
Terms of Service
Cookie Settings
```

Use a thin top border to separate the bottom bar.

------------------------------------------------------------------------

# 18. Data Modeling

Do not hard-code all course cards directly inside JSX.

Use data files.

Example:

``` ts
export const courses = [
  {
    title: "Learn Figma from Basic",
    category: "Design",
    rating: 4.5,
    price: 25,
    image: "/images/courses/figma.jpg",
    creator: "Creator",
  },
  {
    title: "Build Digital Asset",
    category: "Design",
    rating: 4.5,
    price: 25,
    image: "/images/courses/digital-assets.jpg",
    creator: "Creator",
  },
  // ...
];
```

Likewise:

``` ts
export const categories = [...]
export const learningPaths = [...]
export const testimonials = [...]
```

This allows the UI to remain reusable and easy to maintain.

------------------------------------------------------------------------

# 19. Responsive Behavior

The reference is primarily a desktop landing page, but the
implementation must support:

``` text
Desktop: 1440px+
Laptop: 1024px-1439px
Tablet: 768px-1023px
Mobile: <768px
```

## Desktop

Match the screenshot as closely as possible.

Use:

``` css
max-width: 1200px;
margin: 0 auto;
```

or tune the container width against the reference.

## Tablet

-   Course grid becomes two columns
-   Learning paths can become three columns
-   Hero decorations scale down
-   Floating cards remain visible
-   Header navigation becomes more compact

## Mobile

-   Header collapses
-   Hero heading becomes 38px-44px
-   Search stacks or becomes full width
-   Course grid becomes one column
-   Learning paths become two columns
-   Growth section becomes one column
-   Creator section becomes one column
-   Testimonials become one column
-   Decorative shapes scale down or hide when they interfere with
    content

Do not allow decorative elements to cause horizontal overflow.

------------------------------------------------------------------------

# 20. Typography

Use a modern geometric/sans-serif font.

The visual reference resembles a clean modern UI font.

Recommended candidates:

``` text
Inter
Manrope
Plus Jakarta Sans
DM Sans
```

Choose one and use it consistently.

Suggested weights:

``` text
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

Hero heading:

``` text
font-weight: 700;
line-height: 0.95-1.05;
```

Section headings:

``` text
font-weight: 700;
line-height: 1.05-1.15;
```

Body:

``` text
font-weight: 400;
line-height: 1.5-1.7;
```

------------------------------------------------------------------------

# 21. Decorative Graphics

The decorative graphics are a major part of the visual identity.

Do not remove them.

Create reusable components where appropriate:

``` text
LimeBlob
WhiteRing
WhiteTriangle
LimeSquiggle
WhiteSquiggle
GridBackground
```

Example:

``` tsx
<GridBackground />
<LimeBlob />
<WhiteRing />
<LimeSquiggle />
```

Prefer SVG/CSS for simple shapes.

For complex illustrated shapes, use actual image assets.

Decorations should be absolutely positioned inside sections and never
affect document flow.

------------------------------------------------------------------------

# 22. Hero/Image Composition

The reference heavily relies on layered imagery.

Use this pattern:

``` tsx
<div className="relative">
  <Image ... />

  <div className="absolute ...">
    <CourseMiniCard />
  </div>

  <div className="absolute ...">
    <ProgressCard />
  </div>

  <div className="absolute ...">
    <StudentCountCard />
  </div>

  <Decorations />
</div>
```

Do not flatten these elements into a single image.

This ensures the design remains responsive.

------------------------------------------------------------------------

# 23. Reusable UI Components

Create reusable components for:

``` text
Button
Pill
Badge
Avatar
AvatarStack
CourseCard
MiniCourseCard
ProgressCard
StatCard
CategoryChip
LearningPathCard
TestimonialCard
SectionHeading
```

This keeps the implementation component-based rather than creating a
monolithic `page.tsx`.

------------------------------------------------------------------------

# 24. Page Composition

`app/page.tsx` should be simple:

``` tsx
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandStrip } from "@/components/home/BrandStrip";
import { CourseExplorer } from "@/components/home/CourseExplorer";
import { LearningPaths } from "@/components/home/LearningPaths";
import { GrowthSection } from "@/components/home/GrowthSection";
import { CreatorSection } from "@/components/home/CreatorSection";
import { CreatorCTA } from "@/components/home/CreatorCTA";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandStrip />
        <CourseExplorer />
        <LearningPaths />
        <GrowthSection />
        <CreatorSection />
        <CreatorCTA />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
```

------------------------------------------------------------------------

# 25. Pixel-Perfect Implementation Process

Build in this order:

## Phase 1: Foundation

1.  Set up Next.js.
2.  Configure TypeScript.
3.  Configure Tailwind.
4.  Add the chosen font.
5.  Create global color variables.
6.  Create the max-width container.
7.  Create base button/card styles.

## Phase 2: Header + Hero

1.  Recreate header.
2.  Recreate blue grid background.
3.  Add hero typography.
4.  Add search.
5.  Add main person image.
6.  Add floating cards.
7.  Add all decorative shapes.
8.  Compare against `Home.png`.

## Phase 3: Course Discovery

1.  Brand strip.
2.  Section heading.
3.  Category pills.
4.  Course cards.
5.  Course grid.

## Phase 4: Learning Paths

1.  Heading.
2.  Description.
3.  Six category cards.

## Phase 5: Promotional Sections

1.  Professional growth section.
2.  Creator management section.
3.  Creator CTA.

## Phase 6: Social Proof

1.  Testimonials heading.
2.  Three testimonial cards.
3.  Background glow.

## Phase 7: Footer

1.  Newsletter.
2.  Navigation columns.
3.  Bottom legal bar.

## Phase 8: Responsive Pass

Check:

``` text
1440px
1280px
1024px
768px
390px
375px
```

------------------------------------------------------------------------

# 26. Pixel Matching Checklist

After implementation, compare the browser render against the reference
image.

Check each of these individually:

### Header

-   [ ] Logo size
-   [ ] Navigation position
-   [ ] Header height
-   [ ] Horizontal padding
-   [ ] Grid line placement

### Hero

-   [ ] Background blue
-   [ ] Heading font size
-   [ ] Heading line break
-   [ ] Supporting text width
-   [ ] Search width
-   [ ] Search button size
-   [ ] Main image scale
-   [ ] Image vertical position
-   [ ] Floating card positions
-   [ ] Decorative shape positions

### Course Section

-   [ ] Section top spacing
-   [ ] Heading width
-   [ ] Filter pill sizes
-   [ ] Course card width
-   [ ] Course card height
-   [ ] Image crop
-   [ ] Text size
-   [ ] Rating placement
-   [ ] Price placement

### Learning Paths

-   [ ] Card widths
-   [ ] Icon sizes
-   [ ] Card spacing

### Promotional Sections

-   [ ] Gradient intensity
-   [ ] Image size
-   [ ] Floating cards
-   [ ] Heading placement
-   [ ] Stats alignment

### CTA

-   [ ] Blue background
-   [ ] Grid
-   [ ] Heading
-   [ ] Paragraph width
-   [ ] Button
-   [ ] Decorative graphics

### Testimonials

-   [ ] Background glow
-   [ ] Heading
-   [ ] Card widths
-   [ ] Avatar size
-   [ ] Text line height

### Footer

-   [ ] Column spacing
-   [ ] Newsletter input
-   [ ] Button
-   [ ] Legal links
-   [ ] Bottom border

------------------------------------------------------------------------

# 27. Important Implementation Rules

1.  Treat `Home.png` as the visual source of truth.
2.  Do not replace the design with a generic SaaS/course template.
3.  Do not remove decorative shapes simply because they are difficult to
    implement.
4.  Do not use a screenshot as the entire page background.
5.  Use semantic HTML.
6.  Keep sections as independent React components.
7.  Keep repeated content in data arrays.
8.  Use responsive CSS rather than separate duplicated desktop/mobile
    pages.
9.  Preserve the exact visible copy from the reference.
10. Preserve the visual hierarchy.
11. Use `next/image` for content images.
12. Use `priority` for the primary hero image.
13. Avoid unnecessary client components.
14. Keep interactive behavior functional, but do not change the visual
    design.
15. Avoid adding sections or content that are not present in the
    reference.
16. Tune spacing manually after comparing screenshots.
17. Test at the reference viewport size before optimizing for other
    sizes.

------------------------------------------------------------------------

# 28. Definition of Done

The implementation is complete when:

-   The page structure matches the reference.
-   Every visible section exists.
-   The visible copy matches the reference.
-   Course cards match the reference structure.
-   The hero composition matches the reference.
-   Decorative graphics are present.
-   Colors are visually matched.
-   Typography is visually matched.
-   Spacing is visually matched.
-   Desktop layout closely matches the screenshot.
-   Mobile and tablet layouts do not break.
-   No horizontal overflow exists.
-   Components are separated logically.
-   Repeated data is stored outside JSX.
-   The page can be run using the normal Next.js development server.

Final command should work:

``` bash
npm run dev
```

Then compare the rendered page directly against `Home.png` and iterate
on dimensions, spacing, font sizes, image positioning, and decorative
element placement until the visual difference is minimized.
