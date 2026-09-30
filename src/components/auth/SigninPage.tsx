"use client";

import Image from "next/image";
import Link from "next/link";
import { AuthMiniCourseCard } from "@/components/auth/AuthMiniCourseCard";
import { AuthHappyStudentsCard } from "@/components/auth/AuthHappyStudentsCard";

const LIME_FILTER =
  "saturate(0) sepia(1) saturate(5.8) hue-rotate(54deg) brightness(1.2) contrast(1.12) drop-shadow(0 0 2px #D4FB20)";

const WHITE_FILTER =
  "saturate(0) sepia(0) brightness(2) contrast(0.9) drop-shadow(0 0 2px #ffffffff) drop-shadow(0 0 2px #aca6a6ff)";

function Ornament({
  src,
  x,
  y,
  width,
  height,
  filter,
  transform,
}: {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  filter?: string;
  transform?: string;
}) {
  return (
    <div
      aria-hidden
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

function FacebookIcon() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/facebook.svg"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
        priority={false}
      />
    </div>
  );
}

function GoogleIcon() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/google.svg"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
        priority={false}
      />
    </div>
  );
}

export function SigninPage() {
  const frame = { width: 1440, height: 1024 };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        width: "100%",
        minHeight: frame.height,
        background: "#003BE2",
      }}
    >
      <div
        className="relative mx-auto"
        style={{
          width: "100%",
          maxWidth: frame.width,
          height: frame.height,
        }}
      >
        <div
          className="grid-bg absolute inset-0 pointer-events-none"
          aria-hidden
        />

        {/* Header Logo */}
        <Link
          href="/"
          aria-label="ByteSpace Home"
          className="absolute inline-flex items-center"
          style={{
            width: 171,
            height: 37,
            left: 122,
            top: 35,
          }}
        >
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{ width: 28.88, height: 31.5, marginRight: 8 }}
          >
            <Image
              src="/Vector.svg"
              alt="ByteSpace logo"
              width={28.88}
              height={31.5}
              aria-hidden="true"
            />
          </div>
        </Link>

        {/* Left side: Text area */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: 475,
            height: 98,
            left: 122,
            top: 120,
            gap: 16,
          }}
        >
          <h1
            className="font-heading m-0 p-0"
            style={{
              width: 166,
              height: 24,
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 20,
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#F5F5F6",
            }}
          >
            Sign in with ease
          </h1>
          <p
            className="m-0 p-0"
            style={{
              width: 475,
              height: 58,
              fontFamily: "Satoshi, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "160%",
              color: "#F5F5F6",
            }}
          >
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>
        </div>

        {/* Left side: Two overlapping course cards */}
        <div
          className="absolute"
          style={{ width: 373, height: 384, left: 122, top: 394, zIndex: 2 }}
        >
          <AuthMiniCourseCard title="Build Digital Asset" useFrame2={true} />
        </div>
        <div
          className="absolute"
          style={{ width: 373, height: 384, left: 233, top: 305, zIndex: 3 }}
        >
          <AuthMiniCourseCard
            title="the Power of Big Data"
            useFrame2={false}
          />
        </div>

        {/* Left side: Happy Students card */}
        <div
          className="absolute"
          style={{ width: 258, height: 123, left: 348, top: 740, zIndex: 4 }}
        >
          <AuthHappyStudentsCard />
        </div>

        {/* Right side: Register_Frame (Auth card) */}
        <div
          className="absolute"
          style={{
            width: 579,
            height: 784,
            left: 741,
            top: 120,
            background: "#FFFFFF",
            borderRadius: 24,
            zIndex: 5,
          }}
        >
          <div
            className="absolute flex flex-col items-center"
            style={{
              width: 453,
              height: 683,
              left: 63,
              top: 61,
              gap: 32,
            }}
          >
            {/* Top section */}
            <div
              className="flex flex-col items-start"
              style={{ width: 453, height: 370, gap: 40, margin: "0 auto" }}
            >
              {/* Form section wrapper */}
              <div
                className="flex flex-col items-start"
                style={{ width: 453, height: 370, gap: 40 }}
              >
                {/* Header */}
                <div
                  className="flex flex-col items-start"
                  style={{ width: 453, height: 82 }}
                >
                  <span
                    style={{
                      width: 55,
                      height: 29,
                      fontFamily: "Satoshi, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: 18,
                      lineHeight: "160%",
                      color: "#003BE2",
                    }}
                  >
                    Sign In
                  </span>
                  <h2
                    className="m-0 p-0"
                    style={{
                      width: 453,
                      height: 53,
                      fontFamily: "Poppins, sans-serif",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: 44,
                      lineHeight: "120%",
                      letterSpacing: "-0.01em",
                      color: "#242528",
                    }}
                  >
                    Welcome Back
                  </h2>
                </div>

                {/* Form */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col items-end m-0 p-0"
                  style={{ width: 453, height: 248, gap: 24 }}
                >
                  {/* Email */}
                  <div
                    className="flex flex-col items-start"
                    style={{ width: 453, height: 77, gap: 8 }}
                  >
                    <label
                      htmlFor="signin-email"
                      style={{
                        width: 35,
                        height: 17,
                        fontFamily: "Satoshi, sans-serif",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: "120%",
                        color: "#242528",
                      }}
                    >
                      Email
                    </label>
                    <div
                      className="flex flex-row items-center"
                      style={{
                        boxSizing: "border-box",
                        width: 453,
                        height: 52,
                        padding: "12px 24px",
                        gap: 8,
                        background: "#FFFFFF",
                        border: "1px solid #E5E6E8",
                        borderRadius: 12,
                      }}
                    >
                      <input
                        id="signin-email"
                        type="email"
                        placeholder="designer@example.com"
                        className="flex-1 bg-transparent focus:outline-none m-0 p-0 border-0"
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: 18,
                          lineHeight: "160%",
                          color: "#242528",
                        }}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div
                    className="flex flex-col items-start"
                    style={{ width: 453, height: 77, gap: 8 }}
                  >
                    <label
                      htmlFor="signin-password"
                      style={{
                        width: 61,
                        height: 17,
                        fontFamily: "Satoshi, sans-serif",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: "120%",
                        color: "#242528",
                      }}
                    >
                      Password
                    </label>
                    <div
                      className="flex flex-row items-center"
                      style={{
                        boxSizing: "border-box",
                        width: 453,
                        height: 52,
                        padding: "12px 24px",
                        gap: 8,
                        background: "#FFFFFF",
                        border: "1px solid #E5E6E8",
                        borderRadius: 12,
                      }}
                    >
                      <input
                        id="signin-password"
                        type="password"
                        placeholder="********"
                        className="flex-1 bg-transparent focus:outline-none m-0 p-0 border-0"
                        style={{
                          fontFamily: "Satoshi, sans-serif",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: 18,
                          lineHeight: "160%",
                          color: "#242528",
                        }}
                      />
                    </div>
                  </div>

                  {/* Sign In Button */}
                  <button
                    type="submit"
                    className="flex flex-row justify-center items-center"
                    style={{
                      width: 104,
                      height: 46,
                      padding: "12px 24px",
                      gap: 8,
                      background: "#D4FB20",
                      borderRadius: 24,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        width: 56,
                        height: 22,
                        fontFamily: "Satoshi, sans-serif",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: 18,
                        lineHeight: "120%",
                        color: "#242528",
                      }}
                    >
                      Sign In
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom section: divider + socials + new user link */}
            <div
              className="flex flex-col items-center"
              style={{
                width: 453,
                height: 141,
                gap: 40,
                margin: "0 auto",
              }}
            >
              {/* Or divider */}
              <div
                className="flex flex-row items-center"
                style={{ width: 453, height: 29, gap: 11 }}
              >
                <div
                  aria-hidden
                  style={{
                    width: 200,
                    height: 0,
                    border: "1px solid #D1D1D1",
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                />
                <span
                  style={{
                    width: 17,
                    height: 29,
                    fontFamily: "Satoshi, sans-serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: "160%",
                    color: "#888888",
                  }}
                >
                  or
                </span>
                <div
                  aria-hidden
                  style={{
                    width: 200,
                    height: 0,
                    border: "1px solid #D1D1D1",
                    flex: "none",
                    order: 2,
                    flexGrow: 0,
                  }}
                />
              </div>

              {/* Social buttons */}
              <div
                className="flex flex-row items-center"
                style={{ width: 160, height: 72, gap: 20 }}
              >
                {/* Facebook */}
                <div
                  className="relative"
                  style={{ width: 72, height: 72, flex: "none", order: 0 }}
                >
                  <div
                    aria-hidden
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      width: 72,
                      height: 72,
                      left: 0,
                      top: 0,
                      border: "1px solid #D1D1D1",
                      borderRadius: 24,
                    }}
                  />
                  <div
                    className="absolute"
                    style={{
                      width: 40,
                      height: 40,
                      left: 16,
                      top: 16,
                    }}
                  >
                    <FacebookIcon />
                  </div>
                </div>
                {/* Google */}
                <div
                  className="relative"
                  style={{ width: 72, height: 72, flex: "none", order: 1 }}
                >
                  <div
                    aria-hidden
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      width: 72,
                      height: 72,
                      left: 88 - 88,
                      top: 0,
                      border: "1px solid #D1D1D1",
                      borderRadius: 24,
                    }}
                  />
                  <div
                    className="absolute"
                    style={{
                      width: 40,
                      height: 40,
                      left: 16,
                      top: 16,
                    }}
                  >
                    <GoogleIcon />
                  </div>
                </div>
              </div>

              {/* New user link */}
              <div
                className="flex flex-row items-start"
                style={{ width: 208, height: 26, gap: 4, margin: "0 auto", paddingTop: 56 }}
              >
                <span
                  style={{
                    width: 74,
                    height: 26,
                    fontFamily: "Satoshi, sans-serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "160%",
                    color: "#888888",
                  }}
                >
                  New user?
                </span>
                <Link
                  href="/signup"
                  style={{
                    width: 130,
                    height: 26,
                    fontFamily: "Satoshi, sans-serif",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "160%",
                    color: "#003BE2",
                  }}
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative SVG ornaments - top layer with highest z-index */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden
          style={{ zIndex: 10 }}
        >
          {/* Donut - lime tinted, around top course cards */}
          <Ornament
            src="/Donut.svg"
            x={140}
            y={320}
            width={150}
            height={150}
            filter={LIME_FILTER}
          />

          {/* Spiral - white tinted, near happy students card */}
          <Ornament
            src="/spiral.svg"
            x={465}
            y={615}
            width={180}
            height={180}
            filter={WHITE_FILTER}
            transform="scaleX(-1)rotate(0deg) "
          />

          {/* Cone - lime tinted, near bottom course card */}
          <Ornament
            src="/Cone.svg"
            x={95}
            y={705}
            width={190}
            height={190}
            filter={LIME_FILTER}
          />
        </div>
      </div>
    </section>
  );
}
