"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/#home", variant: "active" },
  { label: "Courses", href: "/#courses", variant: "idle" },
  { label: "Creators", href: "/#creators", variant: "idle" },
] as const;

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="relative z-30 bg-brand-blue">
      <div className="grid-bg absolute inset-0 pointer-events-none" aria-hidden />
      <div
        className="relative mx-auto"
        style={{ width: "100%", maxWidth: 1440 }}
      >
        <div
          className="relative flex items-center w-full"
          style={{
            height: "clamp(72px, 10.4vw, 120px)",
            paddingLeft: "clamp(16px, 8.47vw, 122px)",
            paddingRight: "clamp(16px, 8.33vw, 120px)",
          }}
        >
          <Link
            href="/"
            aria-label="ByteSpace Home"
            className="flex-shrink-0 absolute"
            style={{
              left: "clamp(16px, 8.47vw, 122px)",
              top: "calc(50% - 18.5px)",
              transform: "scale(clamp(0.2431, 100vw / 1440, 1))",
              transformOrigin: "left center",
            }}
          >
            <Logo variant="light" />
          </Link>

          <nav
            className="hidden md:flex items-start absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: "calc(50% - 13px)",
              gap: 24,
            }}
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={[
                  link.variant === "active"
                    ? "text-label-m text-brand-gray-50"
                    : "text-body-m text-brand-gray-50",
                ].join(" ")}
                style={{ color: "#F5F5F6" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className="hidden md:flex items-start justify-end absolute"
            style={{
              right: "clamp(16px, 8.33vw, 120px)",
              top: "clamp(24px, 4vw, 48px)",
              gap: 24,
            }}
          >
            <Link
              href="/signin"
              className="text-body-m transition-colors hover:opacity-80"
              style={{ color: "#F5F5F6", lineHeight: "150%" }}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-body-m transition-colors hover:opacity-80"
              style={{ color: "#F5F5F6", lineHeight: "150%" }}
            >
              Join Us
            </Link>
            <button
              aria-label="Cart"
              className="inline-flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ width: 24, height: 24, color: "#F5F5F6" }}
            >
              <ShoppingBag style={{ width: 24, height: 24 }} aria-hidden />
            </button>
          </div>

          <div
            className="md:hidden ml-auto inline-flex items-center gap-3"
            style={{ marginLeft: "auto" }}
          >
            <button
              aria-label="Cart"
              className="inline-flex items-center justify-center text-white hover:bg-white/10"
              style={{ width: 40, height: 40 }}
            >
              <ShoppingBag style={{ width: 22, height: 22 }} aria-hidden />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-pill text-white hover:bg-white/10"
              style={{ width: 40, height: 40 }}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-white/10" style={{ paddingLeft: 16, paddingRight: 16 }}>
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2"
                  style={{ color: "#F5F5F6" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10">
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                style={{ color: "#F5F5F6" }}
                className="py-1"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                style={{
                  color: "#242528",
                  background: "#D4FB20",
                  borderRadius: 24,
                  padding: "10px 20px",
                  fontWeight: 500,
                }}
                className="py-1"
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
