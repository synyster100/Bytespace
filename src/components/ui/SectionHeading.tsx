import * as React from "react";

type Align = "center" | "left";

export interface SectionHeadingProps {
  title: React.ReactNode;
  description?: string;
  align?: Align;
  eyebrow?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  eyebrow,
  titleClassName = "",
  descriptionClassName = "",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={[alignClass, "max-w-3xl", className].join(" ")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h2
        className={[
          "text-3xl sm:text-4xl lg:text-[44px] font-heading font-semibold leading-[1.1] tracking-tight text-brand-black",
          titleClassName,
        ].join(" ")}
      >
        {title}
      </h2>
      {description && (
        <p
          className={[
            "mt-5 text-base sm:text-lg text-brand-gray-muted leading-relaxed",
            descriptionClassName,
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
