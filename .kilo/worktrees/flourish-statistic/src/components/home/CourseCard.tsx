import Image from "next/image";
import type { Course } from "@/data/courses";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center justify-center"
      style={{
        padding: "6px 14px",
        background: "rgba(245, 245, 246, 0.85)",
        borderRadius: 999,
        color: "#242528",
        fontFamily: "Satoshi, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "22px",
        backdropFilter: "blur(4px)",
      }}
    >
      {children}
    </div>
  );
}

function StarHalf({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="halfstar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="50%" stopColor="#CDD0D7" />
          <stop offset="50%" stopColor="#CDD0D7" />
        </linearGradient>
      </defs>
      <path
        d="M12 3.5 14.9 9.45l6.58.95-4.76 4.65 1.12 6.57L12 18.3l-5.84 3.07 1.12-6.57L2.52 10.4l6.58-.95L12 3.5Z"
        stroke="#CDD0D7"
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="url(#halfstar)"
      />
    </svg>
  );
}

function LevelPill({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center"
      style={{
        padding: "6px 14px",
        height: 36,
        border: "1px solid #CED0D3",
        borderRadius: 999,
        background: "#FFFFFF",
        gap: 8,
      }}
    >
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M4 19h2M7 17h13M4 14h2M7 12h13M4 9h2M7 7h13"
          stroke="#242528"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-2 0) scale(0.95)"
        />
        <rect x="2" y="3" width="4" height="2" rx="1" fill="#242528" opacity="0.7" />
      </svg>
      <span
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontSize: 14,
          lineHeight: "22px",
          color: "#242528",
        }}
      >
        {label}
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
        height: 460,
        border: "1px solid #CED0D3",
        borderRadius: 24,
        overflow: "hidden",
        padding: 12,
        gap: 24,
      }}
    >
      {/* Cover 416x240 with top chips */}
      <div
        className="relative"
        style={{ width: "100%", height: 240, borderRadius: 16, overflow: "hidden" }}
      >
        <Image
          src={course.coverImage}
          alt={course.title}
          fill
          sizes="416px"
          className="object-cover"
          priority={false}
        />
        <div
          className="absolute flex flex-row items-center"
          style={{ left: 14, bottom: 14, gap: 12 }}
        >
          <Chip>{course.lessons} Lessons</Chip>
          <Chip>{course.duration}</Chip>
          <Chip>{course.comments} Comments</Chip>
        </div>
      </div>

      {/* Text body area */}
      <div
        className="flex flex-col items-start"
        style={{ width: "100%", padding: "0 4px", gap: 12 }}
      >
        {/* Row 1: Title + star */}
        <div
          className="flex flex-row items-center justify-between"
          style={{ width: "100%" }}
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
            style={{ gap: 6 }}
          >
            <span
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 20,
                lineHeight: "28px",
                fontWeight: 400,
                color: "#242528",
              }}
            >
              {course.rating}
            </span>
            <StarHalf size={24} />
          </div>
        </div>

        {/* Row 2: by creator */}
        <p
          className="m-0 p-0"
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: 14,
            lineHeight: "22px",
            color: "#003BE2",
          }}
        >
          by {course.creator}
        </p>

        {/* Short course description */}
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
        </p>

        {/* Row 3: Level pill + avatars stack */}
        <div
          className="flex flex-row items-center justify-between"
          style={{ width: "100%" }}
        >
          <LevelPill label={course.level} />
          <div className="flex items-center" style={{ gap: 0 }}>
            <div className="flex" style={{}}>
              {course.avatars.map((src, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 36,
                    height: 36,
                    marginLeft: i === 0 ? 0 : -10,
                    border: "2px solid #FFFFFF",
                    overflow: "hidden",
                    background: "#F5F5F6",
                    position: "relative",
                    zIndex: 5 - i,
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 36,
                height: 36,
                marginLeft: -10,
                border: "2px solid #FFFFFF",
                background: "#D4FB20",
                color: "#242528",
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              {course.extraCount}
            </div>
          </div>
        </div>

        {/* Row 4: Price */}
        <div
          className="flex flex-row items-end"
          style={{ width: "100%", paddingTop: 4 }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 24,
              lineHeight: "32px",
              fontWeight: 700,
              color: "#003BE2",
              letterSpacing: "-0.01em",
            }}
          >
            ${course.price}
          </span>
          <span
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 14,
              lineHeight: "22px",
              fontWeight: 400,
              color: "#242528",
              marginBottom: 4,
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
