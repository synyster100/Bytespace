"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import {
  MiniCourseCard,
  ProgressCard,
  StudentStatCard,
} from "@/components/ui/FloatingCards";
import { ResponsiveFrame } from "@/components/ui/ResponsiveFrame";

const LIME_FILTER =
  "saturate(0) sepia(1) saturate(5.8) hue-rotate(54deg) brightness(1.2) contrast(1.12)";

const WHITE_FILTER =
  "saturate(0) sepia(0) brightness(100) contrast(100)";

const HERO_DROP_SHADOW =
  "drop-shadow(51.0381px 72.9116px 72px rgba(0,0,0,0.13)) drop-shadow(37.1223px 53.0318px 56px rgba(0,0,0,0.105219)) drop-shadow(25.8381px 36.9115px 36px rgba(0,0,0,0.1)) drop-shadow(16.9463px 24.2089px 24px rgba(0,0,0,0.09)) drop-shadow(10.2076px 14.5823px 16.0875px rgba(0,0,0,0.08)) drop-shadow(5.38293px 7.6899px 9.57129px rgba(0,0,0,0.07)) drop-shadow(2.23292px 3.18988px 5.72344px rgba(0,0,0,0.06)) drop-shadow(0.518356px 0.740509px 3.03574px rgba(0,0,0,0.04))";

function Ornament({
  src,
  x,
  y,
  width,
  height,
  filter,
  transform,
  aria = true,
}: {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  filter?: string;
  transform?: string;
  aria?: boolean;
}) {
  return (
    <div
      aria-hidden={aria}
      className="pointer-events-none absolute"
      style={{
        width,
        height,
        left: x,
        top: y,
        transform,
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt=""
          fill
          sizes={`${width}px`}
          className="object-contain"
          style={filter ? { filter } : undefined}
          priority={false}
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  const frame = { width: 1440, height: 900 };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-blue text-white"
    >
      <ResponsiveFrame designHeight={frame.height}>
        <div
          className="grid-bg absolute inset-0 pointer-events-none"
          aria-hidden
        />

        {/* Decorative SVG ornaments - absolute positioned using public SVGs */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden
        >
          {/* 1. Lime spiral top-left (330×330 at -59, 142) */}
          <Ornament
            src="/spiral.svg"
            x={-135}
            y={70}
            width={400}
            height={400}
            filter={LIME_FILTER}
          />

          {/* 3. White spiral 2d left-mid, above boy (175×175 at 100, 420) */}
          <Ornament
            src="/Spiral 2d.svg"
            x={180}
            y={360}
            width={175}
            height={175}
            filter={WHITE_FILTER}
          />

          {/* 4. White spiral 2d right-bottom (185×185 at 1155, 790) */}
          <Ornament
            src="/Spiral 2d.svg"
            x={1135}
            y={560}
            width={355}
            height={345}
            filter={WHITE_FILTER}
            transform="scaleX(-1) rotate(45deg)"
          />

          {/* 5. White donut (188×188 at 28, 791) */}
          

         

          {/* 7. Lime cylinder top-right (370×370 at 1205, 220) */}
          <Ornament
            src="/Cylinder.svg"
            x={1215}
            y={108}
            width={370}
            height={370}
            filter={LIME_FILTER}
          />

          

          {/* 9. White cone right-mid small (188×188 at 1180, 470) */}
          <Ornament
            src="/Cone.svg"
            x={1105}
            y={350}
            width={175}
            height={175}
            filter={WHITE_FILTER}
          />
        </div>

        {/* Hero text content (width 1200px × 345, gap 60, top 169 — spec line 312-315) */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            width: 1200,
            height: 345,
            left: (frame.width - 1200) / 2,
            top: 50,
            gap: 60,
          }}
        >
          {/* Heading + Copy */}
          <div
            className="relative text-center flex flex-col items-center"
            style={{ width: 935, height: 233, gap: 32 }}
          >
            <h1
              className="font-heading text-hero-h1 text-center"
              style={{
                width: 935,
                height: 172,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              Get Access to Hundreds
              <br />
              Courses Available
            </h1>
            <p
              className="text-hero-sub text-center"
              style={{
                width: 819,
                height: 29,
                color: "#E5E6E8",
                margin: 0,
              }}
            >
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-row items-start m-0"
            style={{
              width: 581,
              height: 52,
              gap: 16,
              padding: 0,
            }}
          >
            {/* Input container */}
            <div
              className="flex flex-row items-center bg-white"
              style={{
                width: 461,
                height: 52,
                padding: "12px 24px",
                gap: 8,
                borderRadius: 24,
              }}
            >
              <Search
                className="flex-shrink-0"
                style={{ width: 24, height: 24, color: "#82868E" }}
                aria-hidden
              />
              <label htmlFor="hero-search" className="sr-only">
                Search
              </label>
              <input
                id="hero-search"
                type="search"
                placeholder="Course, topic, creator"
                className="flex-1 bg-transparent focus:outline-none text-body-l px-1 m-0 p-0 border-0"
                style={{
                  color: "#82868E",
                  height: 29,
                }}
              />
            </div>

            {/* Search button */}
            <button
              type="submit"
              className="flex flex-row justify-center items-center"
              style={{
                width: 104,
                height: 46,
                padding: "12px 24px",
                gap: 8,
                borderRadius: 24,
                background: "#D4FB20",
                color: "#242528",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                className="text-label-l"
                style={{ width: 56, height: 22, lineHeight: "120%" }}
              >
                Search
              </span>
            </button>
          </form>
        </div>

        {/* Lime ring behind person (Ellipse 7) - 1149x1149, 320px #CBFC01 border, top 582 (spec line 297) */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 1149,
            height: 1149,
            left: "calc(50% - 1149px/2 - 0.5px)",
            top: 460,
            boxSizing: "border-box",
            border: "320px solid #CBFC01",
            background: "transparent",
            zIndex: 0,
          }}
        />
        <Ornament
            src="/Donut.svg"
            x={8}
            y={570}
            width={340}
            height={340}
            filter={WHITE_FILTER}
            transform="rotate(5deg)"
          />

        {/* Main Hero Image — spec lines 750-759: 578×541 centered (50% - 578/2), top 512 */}
        <div
          className="absolute"
          style={{
            width: 568,
            height: 531,
            left: "calc(50% - 480px/2)",
            top: 370,
            filter: HERO_DROP_SHADOW,
            background: "transparent",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/boy AI.svg"
              alt="Boy AI character"
              fill
              priority
              sizes="578px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Floating Cards - exact coordinates from Hero_Fr spec */}
        <div className="pointer-events-none absolute inset-0">
          {/* UI/UX Design card - 208×70 at (404, 639) — spec lines 1620-1639 */}
          <div
            className="pointer-events-auto absolute"
            style={{ left: 395, top: 505 }}
          >
            <MiniCourseCard
              width={200}
              height={62}
              padding={12}
              borderRadius={16}
            />
          </div>

          {/* Learning Progress - 232×131 at (842, 651) — spec lines 770-775 */}
          <div
            className="pointer-events-auto absolute"
            style={{ left: 835, top: 516 }}
          >
            <ProgressCard value={55} />
          </div>

          {/* Happy Students - 258×121 at (328, 837) — spec lines 898-901 */}
          <div
            className="pointer-events-auto absolute"
            style={{ left: 312, top: 705 }}
          >
            <StudentStatCard />
          </div>
        </div>
      </ResponsiveFrame>
    </section>
  );
}
