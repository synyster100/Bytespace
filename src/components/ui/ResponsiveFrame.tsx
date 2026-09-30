"use client";

import * as React from "react";
import type { CSSProperties, ReactNode } from "react";

const MIN_VIEWPORT = 350;
const MAX_VIEWPORT = 1440;

export function ResponsiveFrame({
  children,
  designWidth = MAX_VIEWPORT,
  designHeight,
  className,
  style,
}: {
  children: ReactNode;
  designWidth?: number;
  designHeight: number;
  className?: string;
  style?: CSSProperties;
}) {
  const [containerPx, setContainerPx] = React.useState<number | null>(null);
  const outerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.getBoundingClientRect().width;
      setContainerPx(w > 0 ? w : null);
    };
    update();
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(el);
    }
    window.addEventListener("resize", update);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const clamped = React.useMemo(() => {
    const base = containerPx ?? typeof window !== "undefined" ? Math.min(window.innerWidth, MAX_VIEWPORT) : MAX_VIEWPORT;
    const used = Math.max(MIN_VIEWPORT, Math.min(base, MAX_VIEWPORT));
    return used / designWidth;
  }, [containerPx, designWidth]);

  const outerHeight = Math.round(designHeight * clamped);

  return (
    <div
      ref={outerRef}
      className={["rf-outer", className].filter(Boolean).join(" ")}
      style={{
        ...style,
        height: outerHeight,
      }}
    >
      <div
        className="rf-inner"
        style={{
          width: designWidth,
          height: designHeight,
          // Inline JS-computed scale is the source of truth (respects 350px–1440px clamp).
          // The globals.css `.rf-inner` transform is kept as a SSR-friendly fallback before first paint.
          transform: `scale(${clamped})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
