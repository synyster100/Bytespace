import Image from "next/image";
import { Star } from "lucide-react";

type MiniCourseCardProps = {
  className?: string;
  title?: string;
  price?: number;
  image?: string;
  courses?: number;
  students?: number;
};

export function MiniCourseCard({
  className = "",
  title = "UI/UX Design",
  price,
  image,
  courses = 200,
  students = 1000,
}: MiniCourseCardProps) {
  const useHeroDesign = price === undefined && !image;

  if (!useHeroDesign) {
    return (
      <div
        className={[
          "bg-white rounded-2xl shadow-float p-3 w-[220px] max-w-[70vw]",
          className,
        ].join(" ")}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-brand-gray-soft overflow-hidden flex-shrink-0">
            {image ? (
              <Image
                src={image}
                alt=""
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-blue/10 to-brand-lime/30 flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-brand-black truncate">
              {title}
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <Star
                className="w-3 h-3 text-amber-400 fill-amber-400"
                aria-hidden
              />
              <span className="text-xs text-brand-gray-muted">4.5</span>
            </div>
            <p className="text-sm font-bold text-brand-blue mt-1">
              ${price} Course
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={["bg-white rounded-card", className].join(" ")}
      style={{
        width: 218,
        height: 80,
        padding: 18,
        gap: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backdropFilter: "blur(10px)",
      }}
    >
      <p
        className="text-label-m"
        style={{ width: 98, height: 19, color: "#242528" }}
      >
        {title}
      </p>
      <div
        style={{
          width: 176,
          height: 19,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <span
          className="text-body-xs"
          style={{ width: 70, height: 19, color: "#82868E" }}
        >
          {courses} Courses
        </span>
        <span
          style={{
            width: 4,
            height: 15,
            color: "#82868E",
            fontSize: 10,
            lineHeight: "150%",
          }}
        >
          •
        </span>
        <span
          className="text-body-xs"
          style={{ width: 86, height: 19, color: "#82868E" }}
        >
          {students}+ Students
        </span>
      </div>
    </div>
  );
}

type ProgressCardProps = {
  className?: string;
  value?: number;
  label?: string;
};

export function ProgressCard({
  className = "",
  value = 55,
  label = "Learning Progress",
}: ProgressCardProps) {
  const trackWidth = 200;
  const fillWidth = (value / 100) * trackWidth;
  const circumference = 2 * Math.PI * 26;
  const offset = circumference - (value / 100) * circumference;

  const useHeroDesign = label === "Learning Progress";

  if (!useHeroDesign) {
    return (
      <div
        className={[
          "bg-white rounded-2xl shadow-float p-4 w-[220px] max-w-[70vw]",
          className,
        ].join(" ")}
      >
        <p className="text-xs text-brand-gray-muted font-medium">{label}</p>
        <div className="flex items-center gap-3 mt-2">
          <div className="relative w-[60px] h-[60px] flex-shrink-0">
            <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden>
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke="#E5E5E5"
                strokeWidth="5"
              />
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke="#D4FB20"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 30 30)"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-brand-black">
              {value}%
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold text-brand-black leading-tight">
              {value}%
            </p>
            <p className="text-xs text-brand-gray-muted mt-1">Completed</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={["bg-white rounded-card", className].join(" ")}
      style={{
        width: 232,
        height: 131,
        padding: 16,
        gap: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backdropFilter: "blur(10px)",
      }}
    >
      <p
        style={{
          width: 115,
          height: 17,
          fontFamily: "Satoshi",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "120%",
          color: "#242528",
        }}
      >
        {label}
      </p>
      <div
        style={{
          width: 200,
          height: 58,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: 8,
        }}
      >
        <span
          className="font-heading text-progress-big"
          style={{
            width: 96,
            height: 58,
            color: "#242528",
            display: "flex",
            alignItems: "center",
          }}
        >
          {value}%
        </span>
      </div>
      <div
        style={{
          width: trackWidth,
          height: 8,
          marginTop: 4,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: trackWidth,
            height: 8,
            background: "#F6F6F6",
            borderRadius: 24,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: fillWidth,
            height: 8,
            background: "#D4FB20",
            borderRadius: 24,
          }}
        />
      </div>
    </div>
  );
}

type StudentStatCardProps = {
  className?: string;
  count?: string;
  label?: string;
  rating?: number;
  reviews?: number;
  extraCount?: string;
  avatars?: string[];
};

export function StudentStatCard({
  className = "",
  count,
  label,
  rating = 4.5,
  reviews = 240,
  extraCount = "2K+",
  avatars = [
    "https://i.pravatar.cc/43?img=1",
    "https://i.pravatar.cc/43?img=2",
    "https://i.pravatar.cc/43?img=3",
    "https://i.pravatar.cc/43?img=4",
    "https://i.pravatar.cc/43?img=5",
    "https://i.pravatar.cc/43?img=6",
    "https://i.pravatar.cc/43?img=7",
  ],
}: StudentStatCardProps) {
  const useHeroDesign = count === undefined && label === undefined;

  if (!useHeroDesign) {
    return (
      <div
        className={[
          "bg-white rounded-2xl shadow-float p-4 w-[230px] max-w-[72vw]",
          className,
        ].join(" ")}
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatars.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full ring-2 ring-white overflow-hidden bg-brand-gray-soft"
              >
                <Image
                  src={src}
                  alt=""
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="min-w-0">
            <p className="text-lg font-bold text-brand-black leading-none">
              {count}
            </p>
            <p className="text-xs text-brand-gray-muted mt-1">{label}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={["bg-white rounded-card", className].join(" ")}
      style={{
        width: 258,
        height: 121,
        padding: 16,
        gap: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          width: 115,
          height: 38,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
        }}
      >
        <p
          className="text-label-m"
          style={{
            width: 115,
            height: 19,
            color: "#242528",
            display: "flex",
            alignItems: "center",
          }}
        >
          Happy Students
        </p>
        <div
          style={{
            width: 65,
            height: 19,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            marginTop: 0,
          }}
        >
          <span
            className="text-body-xs"
            style={{ width: 49, height: 19, color: "#242528" }}
          >
            {rating} ({reviews})
          </span>
          <Star
            className="flex-shrink-0"
            style={{
              width: 16,
              height: 16,
              background: "#D4FB20",
              borderRadius: 0.5,
              color: "#242528",
              fill: "#242528",
            }}
            aria-hidden
          />
        </div>
      </div>

      <div
        style={{
          width: 232,
          height: 43,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: 0,
        }}
      >
        {avatars.slice(0, 7).map((src, i) => (
          <div
            key={i}
            style={{
              width: 43,
              height: 43,
              margin: i === 0 ? "0 -16px 0 0" : "0 -16px",
              flex: "none",
              order: i,
              flexGrow: 0,
            }}
            className="rounded-full ring-2 ring-white overflow-hidden bg-brand-gray-soft relative"
          >
            <Image
              src={src}
              alt=""
              width={43}
              height={43}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div
          style={{
            width: 43,
            height: 43,
            position: "relative",
            margin: "0 -16px",
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
              left: 9,
              top: 12,
              fontFamily: "Satoshi",
              fontWeight: 700,
              fontSize: 12,
              lineHeight: "150%",
              color: "#242528",
            }}
          >
            {extraCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export function RevenueCard({
  className = "",
  value = "$120.29",
  label = "Total Revenue",
}: {
  className?: string;
  value?: string;
  label?: string;
}) {
  return (
    <div
      className={[
        "bg-white rounded-2xl shadow-float p-4 w-[220px] max-w-[70vw]",
        className,
      ].join(" ")}
    >
      <p className="text-xs text-brand-gray-muted font-medium">{label}</p>
      <div className="mt-2 flex items-end gap-2">
        <p className="text-2xl font-bold text-brand-black">{value}</p>
        <span className="text-xs font-semibold text-emerald-500 mb-1">
          +12.5%
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full bg-brand-gray-soft rounded-pill overflow-hidden">
        <div className="h-full w-3/4 bg-brand-blue rounded-pill" />
      </div>
    </div>
  );
}

export function ViewsCard({
  className = "",
  value = "$1,200.38",
  label = "Views on Posts",
}: {
  className?: string;
  value?: string;
  label?: string;
}) {
  return (
    <div
      className={[
        "bg-white rounded-2xl shadow-float p-4 w-[220px] max-w-[70vw]",
        className,
      ].join(" ")}
    >
      <p className="text-xs text-brand-gray-muted font-medium">{label}</p>
      <div className="mt-2 flex items-end gap-2">
        <p className="text-2xl font-bold text-brand-black">{value}</p>
      </div>
      <div className="mt-3 flex items-end gap-1 h-10">
        {[30, 60, 40, 75, 55, 85, 65].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-brand-lime rounded-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}
