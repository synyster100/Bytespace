"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ResponsiveFrame } from "@/components/ui/ResponsiveFrame";

const BROWSE_LINKS = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
];

const CATEGORY_LINKS = [
  "Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
];

const PLATFORM_LINKS = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function Footer() {
  const [email, setEmail] = React.useState("");

  return (
    <footer
      className="relative bg-white"
      style={{ borderTop: "1px solid #CED0D3", width: "100%" }}
    >
      <ResponsiveFrame designHeight={525}>
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: 1200,
            height: 406,
            left: 120,
            top: 71,
            gap: 130,
            padding: 0,
          }}
        >
          {/* Footer Nav Row */}
          <div
            className="flex flex-row items-start"
            style={{ width: 1200, height: 234, padding: 0, gap: 92 }}
          >
            {/* Left Column - Newsletter (528 x 234, gap 45) */}
            <div
              className="flex flex-col items-start"
              style={{ width: 528, height: 234, padding: 0, gap: 45 }}
            >
              {/* Logo + intro block (528 x 75, gap 16) */}
              <div
                className="flex flex-col items-start"
                style={{ width: 528, height: 75, padding: 0, gap: 16 }}
              >
                <div style={{ width: 171, height: 37 }}>
                  <Logo variant="dark" />
                </div>
                <p
                  className="text-body-s"
                  style={{
                    width: 528,
                    height: 22,
                    color: "#242528",
                    margin: 0,
                  }}
                >
                  Stay Up to date with our latest features and releases by
                  joining our newsletter.
                </p>
              </div>

              {/* Form + note (504 x 114, gap 24) */}
              <div
                className="flex flex-col items-start"
                style={{ width: 504, height: 114, padding: 0, gap: 24 }}
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-row items-start"
                  style={{ width: 504, height: 52, padding: 0, gap: 24 }}
                >
                  <div
                    className="flex flex-row items-center bg-white"
                    style={{
                      boxSizing: "border-box",
                      width: 376,
                      height: 52,
                      padding: "18px 24px",
                      gap: 8,
                      border: "1px solid #CED0D3",
                      borderRadius: 100,
                    }}
                  >
                    <label htmlFor="footer-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="footer-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-transparent focus:outline-none text-body-m m-0 p-0 border-0"
                      style={{
                        width: 114,
                        height: 26,
                        color: "#242528",
                        textAlign: "center",
                      }}
                    />
                  </div>
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
                <p
                  className="text-body-xs m-0 p-0"
                  style={{ width: 504, height: 38, color: "#242528" }}
                >
                  By subscribing, you agree to our{" "}
                  <Link
                    href="/#privacy"
                    className="text-body-xs"
                    style={{ color: "#242528" }}
                  >
                    Privacy Policy
                  </Link>{" "}
                  and consent to receive updates from our company.
                </p>
              </div>
            </div>

            {/* Right Columns row (580 x 222, gap 40, items flex-end) */}
            <div
              className="flex flex-row items-end"
              style={{ width: 580, height: 222, padding: 0, gap: 40 }}
            >
              {/* Browse col 167 x 222 */}
              <div
                className="flex flex-col items-start"
                style={{ width: 167, height: 222, padding: 0, gap: 24 }}
              >
                <p
                  className="text-body-m-150 m-0 p-0"
                  style={{ width: 52, height: 24, fontWeight: "bold" }}
                >
                  Browse
                </p>
                <ul
                  className="flex flex-col items-start list-none m-0 p-0"
                  style={{ width: 124, height: 174, gap: 16 }}
                >
                  {BROWSE_LINKS.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-body-s hover:opacity-80 transition-opacity"
                        style={{ color: "#242528" }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category col 167 x 174 — no heading, pushed to row's flex-end */}
              <div
                className="flex flex-col items-start"
                style={{ width: 167, height: 174, padding: 0, gap: 24 }}
              >
                <ul
                  className="flex flex-col items-start list-none m-0 p-0"
                  style={{ width: 82, height: 174, gap: 16 }}
                >
                  {CATEGORY_LINKS.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-body-s hover:opacity-80 transition-opacity"
                        style={{ color: "#242528" }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platform col 167 x 222 */}
              <div
                className="flex flex-col items-start"
                style={{ width: 167, height: 222, padding: 0, gap: 24 }}
              >
                <p
                  className="text-body-m-150 m-0 p-0"
                  style={{ width: 59, height: 24, fontWeight: "bold" }}
                >
                  Platform
                </p>
                <ul
                  className="flex flex-col items-start list-none m-0 p-0"
                  style={{ width: 112, height: 174, gap: 16 }}
                >
                  {PLATFORM_LINKS.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-body-s hover:opacity-80 transition-opacity"
                        style={{ color: "#242528" }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright block 1200 x 42 — gap 24 inside */}
          <div
            className="flex flex-col justify-between items-start"
            style={{ width: 1200, height: 42, padding: 0, gap: 24 }}
          >
            <div
              style={{
                width: 1200,
                height: 0,
                border: "1px solid #CED0D3",
                transform: "rotate(-0.05deg)",
              }}
            />
            <div
              className="flex flex-row justify-between items-start"
              style={{ width: 1200, height: 19, padding: 0, gap: 421 }}
            >
              <p
                className="text-body-xs m-0 p-0"
                style={{ width: 460, height: 19, color: "#242528" }}
              >
                @ 2023 ByteSpace. All rights reserved.
              </p>
              <ul
                className="flex flex-row items-start list-none m-0 p-0"
                style={{ width: 295, height: 19, gap: 24 }}
              >
                {LEGAL_LINKS.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-body-xs hover:opacity-80 transition-opacity"
                      style={{ color: "#242528" }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ResponsiveFrame>
    </footer>
  );
}
