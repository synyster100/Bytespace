import Image from "next/image";
import { Star } from "lucide-react";

type AuthMiniCourseCardProps = {
  title: string;
  coverBg?: string;
  useFrame2?: boolean;
};

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

export function AuthMiniCourseCard({
  title,
  coverBg = "#443131",
  useFrame2 = false,
}: AuthMiniCourseCardProps) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        position: "relative",
        width: 373,
        height: 384,
        background: "#FFFFFF",
        border: "1px solid #CED0D3",
        borderRadius: 24,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 341,
          height: 195.14,
          left: 16,
          top: 16,
          background: coverBg,
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <Image
          src={useFrame2 ? "/frame2.png" : "/frame3.png"}
          alt=""
          fill
          sizes="341px"
          className="object-cover"
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: 0,
            gap: 12,
            width: 315,
            height: 32,
            left: 12,
            top: 150,
          }}
        >
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((text, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "6px 12px",
                background: "rgba(246, 246, 246, 0.6)",
                backdropFilter: "blur(4px)",
                borderRadius: 24,
                flex: "none",
                order: i,
                flexGrow: 0,
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
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: 16,
          width: title === "the Power of Big Data" ? 275 : 237,
          height: 136,
          left: 16,
          top: 232,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0,
            width: title === "the Power of Big Data" ? 275 : 177,
            height: 48,
          }}
        >
          <h4
            style={{
              width: title === "the Power of Big Data" ? 275 : 177,
              height: 28,
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 20,
              lineHeight: "28px",
              letterSpacing: "-0.01em",
              color: "#000000",
              margin: 0,
            }}
          >
            {title}
          </h4>
          <p
            style={{
              width: 101,
              height: 20,
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "20px",
              color: "#4F4F4F",
              margin: 0,
            }}
          >
            by purepearl studio
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            gap: 12,
            width: 237,
            height: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px 12px",
              gap: 4,
              width: 97,
              height: 32,
              background: "#F5F5F6",
              borderRadius: 24,
              flex: "none",
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
              Beginner
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 0,
              width: 128,
              height: 32,
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 32,
                  margin: "0 -8px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "9999px",
                  background:
                    i === 1
                      ? "#E0E7FF"
                      : i === 2
                      ? "#FCE7F3"
                      : i === 3
                      ? "#FEF3C7"
                      : "#DBEAFE",
                  flex: "none",
                  order: i - 1,
                  boxSizing: "border-box",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      i === 1
                        ? "linear-gradient(135deg, #818cf8, #c7d2fe)"
                        : i === 2
                        ? "linear-gradient(135deg, #f472b6, #fbcfe8)"
                        : i === 3
                        ? "linear-gradient(135deg, #fbbf24, #fde68a)"
                        : "linear-gradient(135deg, #60a5fa, #bfdbfe)",
                  }}
                />
              </div>
            ))}
            <div
              style={{
                position: "relative",
                width: 32,
                height: 32,
                margin: "0 -8px",
                flex: "none",
                order: 4,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  left: 0,
                  top: 0,
                  background: "#000000",
                  borderRadius: "9999px",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  width: 23,
                  height: 20,
                  left: 5,
                  top: 6,
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  lineHeight: "20px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                26+
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            padding: 0,
            width: 78,
            height: 24,
          }}
        >
          <span
            style={{
              width: 36,
              height: 24,
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "28px",
              letterSpacing: "-0.01em",
              color: "#003BE2",
            }}
          >
            $25
          </span>
          <span
            style={{
              width: 42,
              height: 20,
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "20px",
              color: "#4F4F4F",
              marginBottom: 1,
              marginLeft: 2,
            }}
          >
            /lifetime
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 0,
          width: 51,
          height: 28,
          left: 306,
          top: 232,
        }}
      >
        <span
          style={{
            width: 27,
            height: 28,
            fontFamily: "Satoshi, sans-serif",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "28px",
            color: "#4F4F4F",
          }}
        >
          4.5
        </span>
        <Star
          aria-hidden
          style={{
            width: 24,
            height: 24,
            color: "#D4FB20",
            fill: "#D4FB20",
            flex: "none",
            order: 1,
          }}
        />
      </div>
    </div>
  );
}
