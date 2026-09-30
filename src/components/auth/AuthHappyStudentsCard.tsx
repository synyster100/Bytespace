import Image from "next/image";

const AVATAR_COLORS = [
  "linear-gradient(135deg, #f472b6, #fbcfe8)",
  "linear-gradient(135deg, #fbbf24, #fde68a)",
  "linear-gradient(135deg, #60a5fa, #bfdbfe)",
  "linear-gradient(135deg, #a78bfa, #ddd6fe)",
  "linear-gradient(135deg, #34d399, #a7f3d0)",
  "linear-gradient(135deg, #f87171, #fecaca)",
  "linear-gradient(135deg, #818cf8, #c7d2fe)",
];

export function AuthHappyStudentsCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 16,
        gap: 8,
        width: 258,
        height: 123,
        background: "#D4FB20",
        backdropFilter: "blur(10px)",
        borderRadius: 16,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          width: 115,
          height: 40,
        }}
      >
        <span
          style={{
            width: 115,
            height: 24,
            fontFamily: "Satoshi, sans-serif",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            color: "#242528",
          }}
        >
          Happy Students
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            width: 58,
            height: 16,
          }}
        >
          <span
            style={{
              width: 42,
              height: 15,
              fontFamily: "Satoshi, sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 10,
              lineHeight: "150%",
              color: "#242528",
            }}
          >
            4.5 (240)
          </span>
          <div
            aria-hidden
            style={{
              width: 16,
              height: 16,
              background: "#003BE2",
              borderRadius: 0.5,
              flex: "none",
              order: 1,
              flexGrow: 0,
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: 0,
          width: 232,
          height: 43,
        }}
      >
        {AVATAR_COLORS.map((bg, i) => (
          <div
            key={i}
            style={{
              width: 43,
              height: 43,
              margin: i === 0 ? "0 -16px 0 0" : "0 -16px",
              border: "2px solid #FFFFFF",
              borderRadius: "9999px",
              background: bg,
              flex: "none",
              order: i,
              flexGrow: 0,
              boxSizing: "border-box",
              overflow: "hidden",
              position: "relative",
            }}
          />
        ))}
        <div
          style={{
            width: 43,
            height: 43,
            position: "relative",
            margin: "0 -16px",
            flex: "none",
            order: 7,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 43,
              height: 43,
              left: 0,
              top: 0,
              background: "#242528",
              borderRadius: "9999px",
            }}
          />
          <span
            style={{
              position: "absolute",
              width: 24,
              height: 18,
              left: 9,
              top: 13,
              fontFamily: "Satoshi, sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 12,
              lineHeight: "150%",
              color: "#F5F5F6",
            }}
          >
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}
