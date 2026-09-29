"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import {
  LimeBlob,
  WhiteRing,
  WhiteTriangle,
  WhiteSquiggle,
  LimeRing,
  LimeSquiggle,
} from "@/components/ui/Decorations";
import {
  MiniCourseCard,
  ProgressCard,
  StudentStatCard,
} from "@/components/ui/FloatingCards";

export function HeroSection() {
  const frame = { width: 1440, height: 1024 };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-blue text-white"
      style={{ minHeight: frame.height }}
    >
      <div
        className="relative mx-auto"
        style={{ width: "100%", maxWidth: frame.width, height: frame.height }}
      >
        <div
          className="grid-bg absolute inset-0 pointer-events-none"
          aria-hidden
        />

        {/* Decorative shapes - absolute positioned within frame */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden
        >
          {/* Left side decorations */}
          <LimeBlob
            className="absolute"
            style={{ top: -10, left: -59 }}
            size={222}
          />
          <WhiteRing
            className="absolute opacity-90"
            style={{ left: 28, top: 791 }}
            size={188}
            strokeWidth={12}
          />
          <WhiteSquiggle
            className="absolute opacity-90"
            style={{ left: 87, top: 606 }}
            size={90}
          />

          {/* Right side decorations */}
          <LimeBlob
            className="absolute opacity-90 rotate-45"
            style={{ top: 0, left: 1130 }}
            size={222}
          />
          <WhiteTriangle
            className="absolute opacity-95"
            style={{ left: 1158, top: 606 }}
            size={90}
          />
          <LimeRing
            className="absolute opacity-95"
            style={{ left: 1160, top: 199 }}
            size={175}
            strokeWidth={10}
          />
          <LimeSquiggle
            className="absolute opacity-90"
            style={{ left: 1157, top: 791 }}
            size={180}
          />
          <WhiteSquiggle
            className="absolute opacity-90"
            style={{ left: 1135, top: 545 }}
            size={120}
          />

          {/* 3D ornamental shapes visible in reference */}
          <LimeBlob
            className="absolute"
            style={{ top: -32, right: -16, opacity: 0.95, transform: "rotate(35deg)" }}
            size={260}
          />
          <LimeSquiggle
            className="absolute opacity-90"
            style={{ left: "22%", top: "5%" }}
            size={70}
          />
        </div>

        {/* Hero text content (width 1200px, centered horizontally within 1440 frame) */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            width: 1200,
            height: 245,
            left: (frame.width - 1200) / 2,
            top: 100,
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

        {/* Lime ring behind person (Ellipse 7) - width 1149x1149, border 320px solid #CBFC01 */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 1149,
            height: 1149,
            left: (frame.width - 1149) / 2,
            top: 560,
            boxSizing: "border-box",
            border: "320px solid #CBFC01",
            background: "transparent",
          }}
        />

        {/* Main Hero Image */}
        <div
          className="absolute"
          style={{
            width: 578,
            height: 541,
            left: (frame.width - 460) / 2,
            top: 485,
            filter:
              "drop-shadow(51.0381px 72.9116px 72px rgba(0,0,0,0.13)) drop-shadow(37.1223px 53.0318px 56px rgba(0,0,0,0.105219)) drop-shadow(25.8381px 36.9115px 36px rgba(0,0,0,0.1)) drop-shadow(16.9463px 24.2089px 24px rgba(0,0,0,0.09)) drop-shadow(10.2076px 14.5823px 16.0875px rgba(0,0,0,0.08)) drop-shadow(5.38293px 7.6899px 9.57129px rgba(0,0,0,0.07)) drop-shadow(2.23292px 3.18988px 5.72344px rgba(0,0,0,0.06)) drop-shadow(0.518356px 0.740509px 3.03574px rgba(0,0,0,0.04))",
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

        {/* Floating Cards - exact coordinates from 1440p spec */}
        <div className="pointer-events-none absolute inset-0">
          {/* UI/UX Design card - left 404 top 639 */}
          <div
            className="pointer-events-auto absolute"
            style={{ left: 390, top: 615 }}
          >
            <MiniCourseCard />
          </div>

          {/* Learning Progress - left 842 top 651 */}
          <div
            className="pointer-events-auto absolute"
            style={{ left: 850, top: 631 }}
          >
            <ProgressCard value={55} />
          </div>

          {/* Happy Students - left 328 top 837 */}
          <div
            className="pointer-events-auto absolute"
            style={{ left: 328, top: 837 }}
          >
            <StudentStatCard />
          </div>
        </div>
      </div>
    </section>
  );
}
