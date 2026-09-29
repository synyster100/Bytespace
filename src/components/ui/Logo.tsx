import { ReactComponent as VectorLogo } from "@/Vector.svg?react";

export function Logo({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-brand-gray-50" : "text-brand-gray-950";
  return (
    <div className={["inline-flex items-center", className].join(" ")} style={{ width: 171, height: 37 }}>
      <div className="flex items-center justify-center flex-shrink-0" style={{ width: 28.88, height: 31.5, marginRight: 8 }}>
        <VectorLogo aria-hidden="true" width={28.88} height={31.5} />
      </div>
      <span className={["font-logo text-logo-text tracking-tight", text].join(" ")}>
        ByteSpace
      </span>
    </div>
  );
}
