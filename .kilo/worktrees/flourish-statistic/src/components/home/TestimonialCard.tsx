import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const nameClass =
    testimonial.nameLineHeight === "140%" ? "text-heading-xs-140" : "text-heading-xs";

  return (
    <article
      className="flex flex-col items-start bg-white"
      style={{
        width: 374,
        height: testimonial.cardHeight,
        padding: 24,
        gap: 24,
        borderRadius: 24,
      }}
    >
      <div
        className="relative rounded-full overflow-hidden flex-shrink-0"
        style={{ width: 80, height: 80 }}
      >
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="80px"
          className="object-cover"
          priority={false}
        />
      </div>
      <div
        className="flex flex-col items-start"
        style={{
          width: Math.max(testimonial.nameWidth, testimonial.roleWidth),
          height: testimonial.nameHeight + 50,
          gap: 0,
        }}
      >
        <h3
          className={`font-heading ${nameClass} m-0 p-0 whitespace-nowrap overflow-hidden text-ellipsis`}
          style={{
            width: testimonial.nameWidth,
            height: testimonial.nameHeight,
            color: "#000000",
            letterSpacing: "-0.01em",
          }}
        >
          {testimonial.name}
        </h3>
        <p
          className="text-body-l m-0 p-0"
          style={{
            width: testimonial.roleWidth,
            height: 29,
            color: "#003BE2",
          }}
        >
          {testimonial.role}
        </p>
      </div>
      <p
        className="text-body-l m-0 p-0"
        style={{
          width: 326,
          height: testimonial.quoteHeight,
          color: "#4F4F4F",
        }}
      >
        {testimonial.quote}
      </p>
    </article>
  );
}
