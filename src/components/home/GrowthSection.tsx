"use client";
import { CourseCard } from "@/components/home/CourseCard";
import Image from "next/image";
import { Star } from "lucide-react";
import { ViewportFitFrame } from "@/components/ui/ViewportFitFrame";

const LIME_FILTER =
  "saturate(0) sepia(1) saturate(5.8) hue-rotate(54deg) brightness(1.2) contrast(1.12)";

const HERO_DROP_SHADOW =
  "drop-shadow(51.0381px 72.9116px 72px rgba(0,0,0,0.13)) drop-shadow(37.1223px 53.0318px 56px rgba(0,0,0,0.105219)) drop-shadow(25.8381px 36.9115px 36px rgba(0,0,0,0.1)) drop-shadow(16.9463px 24.2089px 24px rgba(0,0,0,0.09)) drop-shadow(10.2076px 14.5823px 16.0875px rgba(0,0,0,0.08)) drop-shadow(5.38293px 7.6899px 9.57129px rgba(0,0,0,0.07)) drop-shadow(2.23292px 3.18988px 5.72344px rgba(0,0,0,0.06)) drop-shadow(0.518356px 0.740509px 3.03574px rgba(0,0,0,0.04))";

const AVATAR_SET_A = [
  "https://i.pravatar.cc/80?img=13",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=49",
  "https://i.pravatar.cc/80?img=15",
  
];

const AVATAR_SET_B = [
  "https://i.pravatar.cc/80?img=68",
  "https://i.pravatar.cc/80?img=45",
  "https://i.pravatar.cc/80?img=50",
  "https://i.pravatar.cc/80?img=33",
  "https://i.pravatar.cc/80?img=5",
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=20",
];

const CHECKLIST_ITEMS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function CheckCircleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="12" fill="#003BE2" />
      <path
        d="M6.75 12.75L10.25 16.25L17.75 8.25"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.75 13.125L10 6.875L16.25 13.125M3.75 16.25L10 10L16.25 16.25M3.75 10L10 3.75L16.25 10"
        stroke="#4B4C53"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GrowthSection() {
  return (
    <section
      className="relative overflow-hidden w-full mx-auto"
      style={{ background: "#FAFAFA", width: "100%" }}
    >
      <ViewportFitFrame designWidth={1440} designHeight={1460}>
        {/* Background radial gradients (5 ellipses, each 1137/672 wide, blur 20) */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 1137,
            height: 1137,
            left: 722,
            top: 788,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 1137,
            height: 1137,
            left: -152,
            top: -466,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 1137,
            height: 1137,
            left: -508,
            top: 183,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.0368) 53%, rgba(0, 59, 226, 0.0096) 75%, rgba(0, 59, 226, 0) 100%)",
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 1137,
            height: 1137,
            left: 811,
            top: -458,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.0184) 53%, rgba(0, 59, 226, 0.0048) 75%, rgba(0, 59, 226, 0) 100%)",
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 672,
            height: 672,
            left: -287,
            top: 946,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(20px)",
          }}
        />

        {/* Inner 1258×1220 flex-col container at (121, 120), gap 72 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: 1258,
            height: 1220,
            left: 121,
            top: 120,
            padding: 0,
            gap: 72,
          }}
        >
          {/* ===== Row 1 (Frame 13) ===== */}
          <div
            className="flex flex-row items-center"
            style={{ width: 1258, height: 552, padding: 0, gap: 63, flex: "none", order: 0, flexGrow: 0 }}
          >
            {/* Left: Text + Stats (574×404, gap 40) */}
            <div
              className="flex flex-col items-start"
              style={{ width: 574, height: 404, padding: 0, gap: 40, flex: "none", order: 0, flexGrow: 0 }}
            >
              <h2
                className="font-heading m-0 p-0"
                style={{
                  width: 577,
                  height: 106,
                  fontWeight: 600,
                  fontSize: 44,
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                  color: "#242528",
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                }}
              >
                Your Path to Professional
                <br />
                Growth Starts Here!
              </h2>

              <p
                className="m-0 p-0"
                style={{
                  width: 477,
                  height: 145,
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "160%",
                  color: "#4B4C53",
                  flex: "none",
                  order: 1,
                  flexGrow: 0,
                }}
              >
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have
                the resources you need.
              </p>

              {/* Stats row (314×73, gap 56, align-items flex-end) */}
              <div
                className="flex flex-row"
                style={{
                  width: 314,
                  height: 73,
                  padding: 0,
                  gap: 56,
                  alignItems: "flex-end",
                  flex: "none",
                  order: 2,
                  flexGrow: 0,
                }}
              >
                {/* 12K Students */}
                <div
                  className="flex flex-col items-start"
                  style={{ width: 69, height: 73, padding: 0, flex: "none", order: 0, flexGrow: 0 }}
                >
                  <span
                    className="font-heading m-0 p-0"
                    style={{
                      width: 53,
                      height: 44,
                      fontWeight: 500,
                      fontSize: 36,
                      lineHeight: "44px",
                      letterSpacing: "-0.01em",
                      color: "#003BE2",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    12K
                  </span>
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 69,
                      height: 29,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: 18,
                      lineHeight: "160%",
                      color: "#4B4C53",
                      flex: "none",
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    Students
                  </span>
                </div>
                {/* 70+ Courses */}
                <div
                  className="flex flex-col items-start"
                  style={{ width: 65, height: 73, padding: 0, flex: "none", order: 1, flexGrow: 0 }}
                >
                  <span
                    className="font-heading m-0 p-0"
                    style={{
                      width: 61,
                      height: 44,
                      fontWeight: 500,
                      fontSize: 36,
                      lineHeight: "44px",
                      letterSpacing: "-0.01em",
                      color: "#003BE2",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    70+
                  </span>
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 65,
                      height: 29,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: 18,
                      lineHeight: "160%",
                      color: "#4B4C53",
                      flex: "none",
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    Courses
                  </span>
                </div>
                {/* 16 Creators */}
                <div
                  className="flex flex-col items-start"
                  style={{ width: 68, height: 73, padding: 0, flex: "none", order: 2, flexGrow: 0 }}
                >
                  <span
                    className="font-heading m-0 p-0"
                    style={{
                      width: 34,
                      height: 44,
                      fontWeight: 500,
                      fontSize: 36,
                      lineHeight: "44px",
                      letterSpacing: "-0.01em",
                      color: "#003BE2",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    16
                  </span>
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 68,
                      height: 29,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: 18,
                      lineHeight: "160%",
                      color: "#4B4C53",
                      flex: "none",
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    Creators
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Visual (621×552, absolute sub-layout) */}
            <div
              className="relative"
              style={{ width: 621, height: 552, flex: "none", order: 1, flexGrow: 0 }}
            >
              {/* Lime spiral SVG ornament top-right of visual (size 215 per spec frame 1194–1246) */}
              <div
                aria-hidden
                className="pointer-events-none absolute"
                style={{
                  width: 215,
                  height: 332,
                  left: "calc(50% - 215px/2 + 223px)",
                  top: "4%",
                  zIndex: 10,
                  transform: "rotate(310deg)",
                }}
              >
                <Image
                  src="/spiral.svg"
                  alt=""
                  fill
                  sizes="215px"
                  className="object-contain"
                  style={{ filter: LIME_FILTER }}
                  priority={true}
                />
              </div>

              {/* Mini course card (373×384 at 0,0) */}
              {/* Import and render CourseCard component at position 0,0 */}
              <div
                className="absolute"
                style={{
                  width: 373,
                  height: 384,
                  left: 0,
                  top: 0,
                }}
              >
                <CourseCard
                  course={{
                    id: "growth-hero-1",
                    image: "/frame.png",
                    title: "Learn Figma from Basic",
                    category: "UI/UX Design",
                    description:
                      "Master the fundamentals of Figma and create stunning UI designs from scratch.",
                    lessons: 17,
                    duration: "2 hours 16 mins",
                    comments: 59,
                    creator: "purepearl studio",
                    level: "Beginner",
                    avatars: AVATAR_SET_A,
                    extraCount: "26+",
                    price: 25,
                    priceSuffix: "/lifetime",
                    rating: 4.5,
                  }}
                />
              </div>

              {/* boy AI SVG image (577×540 at 0,12) */}
              <div
                className="absolute"
                style={{
                  width: 737,
                  height: 710,
                  left: -3,
                  top: -65,
                  filter: HERO_DROP_SHADOW,
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/boy AI.svg"
                    alt="AI boy character"
                    fill
                    sizes="577px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Learning Progress card (232×138 at 345,213) */}
              <div
                className="absolute"
                style={{
                  width: 232,
                  height: 138,
                  left: 375,
                  top: 235,
                  padding: 16,
                  gap: 8,
                  background: "#FFFFFF",
                  backdropFilter: "blur(10px)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="m-0 p-0"
                  style={{
                    width: 115,
                    height: 24,
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "24px",
                    display: "flex",
                    alignItems: "center",
                    color: "#242528",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  Learning Progress
                </p>
                <span
                  className="font-heading m-0 p-0"
                  style={{
                    width: 96,
                    height: 58,
                    fontWeight: 600,
                    fontSize: 48,
                    lineHeight: "120%",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.01em",
                    color: "#242528",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  55%
                </span>
                {/* Progress bar */}
                <div
                  className="relative"
                  style={{ width: 200, height: 8, marginTop: 4 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: 200,
                      height: 8,
                      left: 0,
                      top: 0,
                      background: "#F6F6F6",
                      borderRadius: 24,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: 112,
                      height: 8,
                      left: 0,
                      top: 0,
                      background: "#D4FB20",
                      borderRadius: 24,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== Row 2 (Frame 14): 1200×596, flex-row align-items center, gap 79 ===== */}
          <div
            className="flex flex-row items-center"
            style={{
              width: 1200,
              height: 596,
              padding: 0,
              gap: 79,
              flex: "none",
              order: 1,
              flexGrow: 0,
            }}
          >
            {/* Left visual (541×596 absolute sub-layout) */}
            <div
              className="relative"
              style={{ width: 541, height: 596, flex: "none", order: 0, flexGrow: 0 }}
            >
              {/* Lime spiral SVG ornament upper-right (215×332 approx, per spec frame 1953–2005) */}
              <div
                aria-hidden
                className="pointer-events-none absolute"
                style={{
                  width: 215,
                  height: 332,
                  left: "calc(50% - 215px/2 + 122px)",
                  top: "8.13%",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/spiral.svg"
                  alt=""
                  fill
                  sizes="215px"
                  className="object-contain"
                  style={{ filter: LIME_FILTER }}
                  priority={false}
                />
              </div>

              {/* Revenue card (blue) 232×119 at (0,44) */}
              <div
                className="absolute"
                style={{
                  width: 232,
                  height: 119,
                  left: 0,
                  top: 44,
                  padding: 16,
                  gap: 8,
                  background: "#003BE2",
                  backdropFilter: "blur(10px)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxSizing: "border-box",
                }}
              >
                {/* Label + sub-date (101×31) */}
                <div
                  className="flex flex-col items-start"
                  style={{
                    width: 101,
                    height: 31,
                    padding: 0,
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 101,
                      height: 19,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: "120%",
                      display: "flex",
                      alignItems: "center",
                      color: "#F5F5F6",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    Total Revenue
                  </span>
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 40,
                      height: 12,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: 10,
                      lineHeight: "120%",
                      display: "flex",
                      alignItems: "center",
                      color: "#F5F5F6",
                      flex: "none",
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    July 1-28
                  </span>
                </div>
                {/* Value row: $120.29 + +12$ pill, 200×32 */}
                <div
                  className="flex flex-row justify-between items-center"
                  style={{
                    width: 200,
                    height: 32,
                    padding: 0,
                    gap: 8,
                    flex: "none",
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  <span
                    className="font-heading m-0 p-0 mx-auto"
                    style={{
                      width: 84,
                      height: 32,
                      fontWeight: 600,
                      fontSize: 24,
                      lineHeight: "32px",
                      display: "flex",
                      alignItems: "center",
                      letterSpacing: "-0.01em",
                      color: "#F5F5F6",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    $120.29
                  </span>
                  <div
                    className="flex flex-col justify-center items-center mx-auto"
                    style={{
                      width: 38,
                      height: 24,
                      padding: "2px 8px",
                      background: "#CBFC01",
                      borderRadius: 24,
                      flex: "none",
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    <span
                      className="m-0 p-0"
                      style={{
                        width: 22,
                        height: 20,
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 500,
                        fontSize: 10,
                        lineHeight: "200%",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#242528",
                        flex: "none",
                        order: 0,
                        flexGrow: 0,
                      }}
                    >
                      +12$
                    </span>
                  </div>
                </div>
                {/* Progress bar 200×8 at top:95 (after 16 pad + 31 label + 8 gap + 32 row = 87; spec says at 95 so 8 pixels down from there) */}
                <div
                  className="absolute"
                  style={{ width: 200, height: 8, left: 16, top: 95 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: 200,
                      height: 8,
                      left: 0,
                      top: 0,
                      background: "#FFFFFF",
                      borderRadius: 24,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: 112,
                      height: 8,
                      left: 0,
                      top: 0,
                      background: "#D4FB20",
                      borderRadius: 24,
                    }}
                  />
                </div>
              </div>

              {/* YTD card (blue) 134×135 at (0,194) */}
              <div
                className="absolute"
                style={{
                  width: 134,
                  height: 135,
                  left: 0,
                  top: 194,
                  padding: 15,
                  gap: 8,
                  background: "#003BE2",
                  backdropFilter: "blur(10px)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="flex flex-col items-start"
                  style={{
                    width: 88,
                    height: 31,
                    padding: 0,
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 88,
                      height: 19,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: "120%",
                      display: "flex",
                      alignItems: "center",
                      color: "#F5F5F6",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    Year to Date
                  </span>
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 24,
                      height: 12,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 400,
                      fontSize: 10,
                      lineHeight: "120%",
                      display: "flex",
                      alignItems: "center",
                      color: "#F5F5F6",
                      flex: "none",
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    2023
                  </span>
                </div>
                <span
                  className="font-heading m-0 p-0"
                  style={{
                    width: 105,
                    height: 32,
                    fontWeight: 600,
                    fontSize: 22,
                    lineHeight: "32px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "-0.01em",
                    color: "#F5F5F6",
                    flex: "none",
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  $1,200.38
                </span>
                <div
                  className="flex flex-col justify-center items-center"
                  style={{
                    width: 38,
                    height: 24,
                    padding: "2px 8px",
                    background: "#CBFC01",
                    borderRadius: 24,
                    flex: "none",
                    order: 2,
                    flexGrow: 0,
                  }}
                >
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 22,
                      height: 20,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                      fontSize: 10,
                      lineHeight: "200%",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      color: "#242528",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    +12$
                  </span>
                </div>
              </div>

              {/* girl AI SVG image (435×596 centered: left = calc(50% - 435px/2 - 25px), top 0) */}
              <div
                className="absolute"
                style={{
                  width: 585,
                  height: 746,
                  left: "calc(50% - 535px/2 - 25px)",
                  top: -10,
                  filter: HERO_DROP_SHADOW,
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/girl AI.svg"
                    alt="AI girl character"
                    fill
                    sizes="435px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Happy Students card (258×123 at 283,413) */}
              <div
                className="absolute"
                style={{
                  width: 278,
                  height: 123,
                  left: 283,
                  top: 413,
                  padding: 16,
                  gap: 8,
                  background: "#FFFFFF",
                  backdropFilter: "blur(10px)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  boxSizing: "border-box",
                }}
              >
                {/* Label + rating (115×40, flex-col) */}
                <div
                  className="flex flex-col items-start"
                  style={{
                    width: 115,
                    height: 40,
                    padding: 0,
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <span
                    className="m-0 p-0"
                    style={{
                      width: 115,
                      height: 24,
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: "24px",
                      display: "flex",
                      alignItems: "center",
                      color: "#242528",
                      flex: "none",
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    Happy Students
                  </span>
                  <div
                    className="flex flex-row items-center"
                    style={{
                      width: 65,
                      height: 19,
                      padding: 0,
                      marginTop: 0,
                      flex: "none",
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    <span
                      className="m-0 p-0"
                      style={{
                        width: 49,
                        height: 19,
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 700,
                        fontSize: 10,
                        lineHeight: "150%",
                        color: "#242528",
                        flex: "none",
                        order: 0,
                        flexGrow: 0,
                      }}
                    >
                      4.5 (240)
                    </span>
                    <Star
                      aria-hidden
                      style={{
                        width: 16,
                        height: 16,
                        flex: "none",
                        order: 1,
                        flexGrow: 0,
                        color: "#D4FB20",
                        fill: "#D4FB20",
                        borderRadius: 0.5,
                      }}
                    />
                  </div>
                </div>

                {/* Avatar stack: 232×43, 7 avatars 43×43 + 2K+ lime circle */}
                <div
                  className="flex flex-row items-start"
                  style={{ width: 232, height: 43, padding: 0 }}
                >
                  {AVATAR_SET_B.slice(0, 7).map((src, i) => (
                    <div
                      key={i}
                      className="rounded-full border-2 border-white overflow-hidden bg-[#F5F5F6]"
                      style={{
                        width: 43,
                        height: 43,
                        margin: i === 0 ? "0 -16px 0 0" : "0 -16px",
                        flex: "none",
                        order: i,
                        flexGrow: 0,
                        position: "relative",
                        boxSizing: "border-box",
                      }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="43px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {/* 2K+ lime circle (43×43) */}
                  <div
                    className="relative rounded-full"
                    style={{
                      width: 43,
                      height: 43,
                      margin: "0 -16px",
                      flex: "none",
                      order: 7,
                      flexGrow: 0,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: 43,
                        height: 43,
                        left: 0,
                        top: 0,
                        background: "#D4FB20",
                        borderRadius: "9999px",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        width: 24,
                        height: 18,
                        left: 10,
                        top: 12,
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        lineHeight: "150%",
                        color: "#242528",
                      }}
                    >
                      2K+
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text + Checklist (580×388, gap 40 flex-col) */}
            <div
              className="flex flex-col items-start"
              style={{
                width: 580,
                height: 388,
                padding: 0,
                gap: 40,
                flex: "none",
                order: 1,
                flexGrow: 0,
              }}
            >
              <h2
                className="font-heading m-0 p-0"
                style={{
                  width: 391,
                  height: 106,
                  fontWeight: 600,
                  fontSize: 44,
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                  color: "#242528",
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                }}
              >
                Create &amp; Manage
                <br />
                Courses Easily.
              </h2>

              <p
                className="m-0 p-0"
                style={{
                  width: 574,
                  height: 58,
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#242528",
                  flex: "none",
                  order: 1,
                  flexGrow: 0,
                }}
              >
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>

              {/* Checklist 231×144 gap 16 */}
              <ul
                className="list-none m-0 p-0 flex flex-col items-start"
                style={{
                  width: 231,
                  height: 144,
                  gap: 16,
                  flex: "none",
                  order: 2,
                  flexGrow: 0,
                }}
              >
                {CHECKLIST_ITEMS.map((label, i) => (
                  <li
                    key={label}
                    className="flex flex-row items-end m-0 p-0"
                    style={{
                      padding: 0,
                      gap: 8,
                      flex: "none",
                      order: i,
                      flexGrow: 0,
                    }}
                  >
                    <CheckCircleIcon />
                    <span
                      className="m-0 p-0"
                      style={{
                        height: 22,
                        fontFamily: "Satoshi, sans-serif",
                        fontWeight: 500,
                        fontSize: 18,
                        lineHeight: "120%",
                        color: "#242528",
                        flex: "none",
                        order: 1,
                        flexGrow: 0,
                      }}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ViewportFitFrame>
    </section>
  );
}
