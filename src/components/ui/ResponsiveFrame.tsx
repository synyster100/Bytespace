import type { CSSProperties, ReactNode } from "react";

export function ResponsiveFrame({
  children,
  designWidth = 1440,
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
  const scaleExpr = `min(1, 100cqw / ${designWidth}px)`;

  return (
    <div
      className={["rf-outer", className].filter(Boolean).join(" ")}
      style={{
        ...style,
        height: `calc(${designHeight}px * ${scaleExpr})`,
      }}
    >
      <div
        className="rf-inner"
        style={{
          height: designHeight,
          // Inline fallbacks for browsers with flaky cqw CSS support
          // The globals.css .rf-inner handles the primary scale via 100cqw container-query
          // but the pattern (cqw calc via custom property) is the same.
        }}
      >
        {children}
      </div>
    </div>
  );
}
