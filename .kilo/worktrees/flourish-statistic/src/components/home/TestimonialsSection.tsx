import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FAFAFA" }}>
      <div
        className="relative mx-auto"
        style={{ width: "100%", maxWidth: 1440, height: 784 }}
      >
        {/* Ellipse 11 — Lime gradient glow right-top, 1137, blur 20 */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 1137,
            height: 1137,
            left: 842,
            top: -241,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(20px)",
          }}
        />
        {/* Ellipse 12 — Lime inner-top, 672, blur 20 */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 672,
            height: 672,
            left: 395,
            top: -138,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
            filter: "blur(20px)",
          }}
        />
        {/* Ellipse 8 — Blue left glow 1137, blur 20 */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: 1137,
            height: 1137,
            left: -442,
            top: 149,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
            filter: "blur(20px)",
          }}
        />

        {/* Content — 1204 x 653, left=118, top=74, flex-col gap 72 */}
        <div
          className="absolute flex flex-col items-start"
          style={{
            width: 1204,
            height: 653,
            left: 118,
            top: 74,
            padding: 0,
            gap: 72,
          }}
        >
          {/* Text row 1200 x 145 — row gap=43 align-items flex-end */}
          <div
            className="flex flex-row items-end"
            style={{
              width: 1200,
              height: 145,
              padding: 0,
              gap: 43,
            }}
          >
            <h2
              className="font-heading text-heading-m m-0 p-0"
              style={{
                width: 577,
                height: 106,
                color: "#000000",
              }}
            >
              Discover What Our Community Is Saying
            </h2>
            <p
              className="text-body-l m-0 p-0"
              style={{
                width: 580,
                height: 145,
                color: "#4F4F4F",
              }}
            >
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          {/* Card row 1204 x 436, gap 41 */}
          <div
            className="flex flex-row items-start"
            style={{
              width: 1204,
              height: 436,
              padding: 0,
              gap: 41,
            }}
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
