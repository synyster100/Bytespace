"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const GRADIENT_404 = {
  background:
    "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
  color: "transparent" as const,
};

export function NotFoundPage() {
  return (
    <div
      className="relative bg-white"
      style={{ width: "100%", minHeight: 1485 }}
    >
      <div
        className="relative mx-auto"
        style={{ width: "100%", maxWidth: 1440 }}
      >
        <div
          className="relative"
          style={{
            width: 1440,
            height: 957,
            background: "#003BE2",
          }}
        >
          <div className="grid-bg absolute inset-0 pointer-events-none" aria-hidden />

          <div
            className="absolute z-10"
            style={{ width: 1440, height: 120, left: 0, top: 0 }}
          >
            <Header />
          </div>

          <div
            className="absolute"
            style={{
              width: 920,
              height: 480,
              left: "calc(50% - 920px/2)",
              top: 160,
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 480,
              lineHeight: "100%",
              textAlign: "center",
              letterSpacing: "-0.01em",
              ...GRADIENT_404,
            }}
          >
            404
          </div>

          <div
            className="absolute flex flex-col items-center"
            style={{
              width: 935,
              height: 311,
              left: "calc(50% - 935px/2 + 0.5px)",
              top: 521,
              padding: 0,
              gap: 32,
            }}
          >
            <h1
              className="m-0 p-0 font-heading"
              style={{
                width: 935,
                height: 172,
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 72,
                lineHeight: "120%",
                textAlign: "center",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                order: 0,
                flex: "none",
                flexGrow: 0,
              }}
            >
              The page you are looking for doesn&apos;t exist
            </h1>

            <p
              className="m-0 p-0"
              style={{
                width: 486,
                height: 29,
                fontFamily: "Satoshi",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: 18,
                lineHeight: "160%",
                textAlign: "center",
                color: "#E5E6E8",
                order: 1,
                flex: "none",
                flexGrow: 0,
              }}
            >
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link
              href="/"
              className="flex flex-row justify-center items-center no-underline"
              style={{
                width: 163,
                height: 46,
                padding: "12px 24px",
                gap: 8,
                background: "#D4FB20",
                borderRadius: 24,
                order: 2,
                flex: "none",
                flexGrow: 0,
              }}
            >
              <span
                className="m-0 p-0"
                style={{
                  width: 115,
                  height: 22,
                  fontFamily: "Satoshi",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: "120%",
                  color: "#242528",
                  order: 0,
                  flex: "none",
                  flexGrow: 0,
                }}
              >
                Back to Home
              </span>
            </Link>
          </div>
        </div>

        <div
          className="relative"
          style={{ width: 1440, height: 528, left: 0, top: 0 }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
