"use client";

import * as React from "react";
import type { CSSProperties, ReactNode } from "react";

const MIN_VIEWPORT = 350;
const MAX_VIEWPORT = 1440;

export type ViewportFitFrameProps = {
  children: ReactNode;
  designWidth?: number;
  designHeight: number;
  /** If true, scale is constrained by the outer container's ACTUAL height too
   *  (so content never overflows vertically, e.g. for in-viewport hero-like
   *  sections). If false, scale follows width only — good for tall flowing
   *  sections where we want to keep the design's aspect ratio but vertical
   *  scrolling is acceptable. */
  fitHeight?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Optional fallback height (CSS) used before JS computes the scale. */
  ssrHeight?: string;
};

export function ViewportFitFrame({
  children,
  designWidth = MAX_VIEWPORT,
  designHeight,
  fitHeight = false,
  className,
  style,
  ssrHeight,
}: ViewportFitFrameProps) {
  const outerRef = React.useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState<number | null>(null);

  React.useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const compute = () => {
      const rect = outer.getBoundingClientRect();
      const w0 = rect.width > 0 ? rect.width : Math.min(window.innerWidth, MAX_VIEWPORT);
      const h0 = fitHeight
        ? rect.height > 0
          ? rect.height
          : window.innerHeight
        : Infinity;

      const usedW = Math.max(MIN_VIEWPORT, Math.min(w0, MAX_VIEWPORT));
      const hMinFromAspect = (MIN_VIEWPORT * designHeight) / designWidth;
      const usedH = fitHeight
        ? Math.max(hMinFromAspect, Math.min(h0, designHeight))
        : designHeight;

      const s = Math.min(usedW / designWidth, usedH / designHeight);
      setScale(s);
    };

    compute();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(compute);
      ro.observe(outer);
    }
    window.addEventListener("resize", compute);
    window.addEventListener("orientationchange", compute);
    const id = window.requestAnimationFrame(compute);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", compute);
      window.removeEventListener("orientationchange", compute);
      window.cancelAnimationFrame(id);
    };
  }, [designWidth, designHeight, fitHeight]);

  const s = scale ?? 1;
  const outerHeight = Math.round(designHeight * s);

  const defaultSsrHeight = ssrHeight ?? "clamp(var(--rf-min-h, 0px), calc(var(--rf-h, 900) * var(--rf-k, 1)), var(--rf-max-h, 1440px))";

  return (
    <div
      ref={outerRef}
      className={["rf-outer", className].filter(Boolean).join(" ")}
      style={{
        ...style,
        width: "100%",
        maxWidth: MAX_VIEWPORT,
        marginInline: "auto",
        minWidth: MIN_VIEWPORT,
        height: outerHeight,
        minHeight: ssrHeight ?? `calc(${designHeight}px * clamp(0.2431, 100vw / ${designWidth}, 1))`,
        ...({ ["--rf-min-h" as any]: `${(MIN_VIEWPORT * designHeight) / designWidth}px`, ["--rf-h" as any]: `${designHeight}px`, ["--rf-k" as any]: `${1440 / designWidth}`, ["--rf-max-h" as any]: `${designHeight}px` }),
        // if ssrHeight was provided, override the clamp-based minHeight:
        ...(ssrHeight ? { minHeight: ssrHeight, height: ssrHeight } : null),
      }}
    >
      <div
        className="rf-inner"
        style={{
          position: "absolute",
          width: designWidth,
          height: designHeight,
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${s})`,
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
