import Image from "next/image";
import { Star } from "lucide-react";
import type { Course } from "@/data/courses";

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

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center justify-center flex-shrink-0"
      style={{
        padding: "6px 12px",
        background: "rgba(246, 246, 246, 0.6)",
        backdropFilter: "blur(4px)",
        borderRadius: 24,
      }}
    >
      <span
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "20px",
          color: "#4F4F4F",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article
      className="flex flex-col bg-white"
      style={{
        width: "100%",
        maxWidth: 440,
        height: 440,
        border: "1px solid #CED0D3",
        borderRadius: 24,
        overflow: "hidden",
        padding: 12,
        gap: 25,
        boxSizing: "border-box",
      }}
    >
      {/* Cover with overlay glass chips */}
      <div
        className="relative flex-shrink-0"
        style={{ width: "100%", height: 240, borderRadius: 16, overflow: "hidden" }}
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="416px"
          className="object-cover"
          priority={false}
        />
        <div
          className="absolute flex flex-row items-start"
          style={{ left: 14, bottom: 14, gap: 12 }}
        >
          <Chip>{course.lessons} Lessons</Chip>
          <Chip>{course.duration}</Chip>
          <Chip>{course.comments} Comments</Chip>
        </div>
      </div>

      {/* Text body */}
      <div
        className="flex flex-col items-start"
        style={{ width: "100%", padding: "0 4px", gap: 12 }}
      >
        {/* Row A: Title + rating (justify-between, align-items center, gap 8) */}
        <div
          className="flex flex-row items-center justify-between w-full"
          style={{ marginBottom: -4 }}
        >
          <h3
            className="m-0 p-0 line-clamp-1"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 20,
              lineHeight: "28px",
              letterSpacing: "-0.01em",
              fontWeight: 600,
              color: "#000000",
            }}
          >
            {course.title}
          </h3>
          <div
            className="flex flex-row items-center flex-shrink-0"
            style={{ width: 51, height: 28, gap: 0 }}
          >
            <span
              style={{
                width: 27,
                height: 28,
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: 18,
                lineHeight: "28px",
                color: "#4F4F4F",
                flex: "none",
                order: 1,
                paddingLeft: -1,
              }}
            >
              {course.rating}
            </span>
            <Star
              aria-hidden
              style={{
                width: 18,
                height: 18,
                color: "#CED0D3",
                fill: "#CED0D3",
                flex: "none",
                order: 1,
              }}
            />
          </div>
        </div>

        {/* Row B: Byline (by + creator blue) */}
        <p
          className="m-0 p-0"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "20px",
            color: "#4F4F4F",
          }}
        >
          by <span style={{ color: "#003BE2" }}>{course.creator}</span>
        </p>

        {/* Row C: Description fill (line-clamp-2)
        <p
          className="m-0 p-0 line-clamp-2"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: 14,
            lineHeight: "20px",
            color: "#6B6F78",
          }}
        >
          {course.description}
        </p> */}

        {/* Row D: Level pill (Growth signal design) + avatar stack inline gap 12 */}
        <div
          className="flex flex-row items-center"
          style={{ width: "100%", gap: 12 }}
        >
          <div
            className="inline-flex flex-row justify-center items-center flex-shrink-0"
            style={{
              padding: "6px 12px",
              gap: 4,
              background: "#F5F5F6",
              borderRadius: 24,
              height: 32,
              boxSizing: "border-box",
            }}
          >
            <SignalIcon />
            <span
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "20px",
                color: "#4B4C53",
              }}
            >
              {course.level}
            </span>
          </div>

          <div
            className="flex flex-row items-start"
            style={{ padding: 0, flexShrink: 0 }}
          >
            {course.avatars.map((src, i) => (
              <div
                key={i}
                className="rounded-full overflow-hidden bg-[#F5F5F6] border-2 border-white"
                style={{
                  width: 32,
                  height: 32,
                  margin: i === 0 ? "0 -8px 0 0" : "0 -8px",
                  flex: "none",
                  order: i,
                  position: "relative",
                  boxSizing: "border-box",
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
            {/* Black 32×32 counter pill (Growth 26+ style) */}
            <div
              className="relative rounded-full"
              style={{
                width: 32,
                height: 32,
                margin: "0 -8px",
                flex: "none",
                order: course.avatars.length,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  left: 0,
                  top: 0,
                  background: "#D4FB20",
                  borderRadius: "9999px",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "fit-content",
                  height: 20,
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#000000",
                  whiteSpace: "nowrap",
                }}
              >
                {course.extraCount}
              </span>
            </div>
          </div>
        </div>

        {/* Row E: Price row (items-end) */}
        <div
          className="flex flex-row items-end"
          style={{ width: "100%", paddingTop: 4 }}
        >
          <strong
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 20,
              lineHeight: "28px",
              fontWeight: 700,
              color: "#003BE2",
              letterSpacing: "-0.01em",
            }}
          >
            ${course.price}
          </strong>
          <span
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 12,
              lineHeight: "20px",
              fontWeight: 400,
              color: "#4F4F4F",
              marginBottom: 1,
              marginLeft: 2,
            }}
          >
            {course.priceSuffix}
          </span>
        </div>
      </div>
    </article>
  );
}
