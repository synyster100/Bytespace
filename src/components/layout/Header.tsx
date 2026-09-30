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
        className="relative"
        style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
        }}
      >
        <div
          className="relative flex items-center w-full"
          style={{ height: 120, paddingLeft: 122, paddingRight: 120 }}
        >
          <Link href="/" aria-label="ByteSpace Home" className="flex-shrink-0 absolute left-[122px] top-[35px]">
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
              right: 120,
              top: 48,
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

          <button
            className="md:hidden inline-flex items-center justify-center ml-auto rounded-pill text-white hover:bg-white/10"
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

        {open && (
          <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-white/10 px-6">
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
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                style={{ color: "#F5F5F6" }}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                style={{ color: "#F5F5F6" }}
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
