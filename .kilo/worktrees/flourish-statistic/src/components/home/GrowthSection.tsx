"use client";

import Image from "next/image";
import { MiniCourseCard, ProgressCard } from "@/components/ui/FloatingCards";
import {
  LimeSquiggle,
  LimeBlob,
} from "@/components/ui/Decorations";

export function GrowthSection() {
  const growthImage =
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=happy%20young%20professional%20man%20working%20on%20laptop%20modern%20bright%20home%20office%20headphones%20smiling%20photorealistic&image_size=portrait_4_3";

  const stats = [
    { value: "12K+", label: "Students", accent: "brand-blue" },
    { value: "70+", label: "Courses", accent: "brand-lime" },
    { value: "16", label: "Creators", accent: "brand-blue" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 20%, rgba(212, 251, 32, 0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(0, 59, 226, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-semibold leading-[1.1] tracking-tight text-brand-black">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="mt-5 text-base md:text-lg text-brand-gray-muted leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path, you&rsquo;ll have the resources you need.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    className={[
                      "text-3xl md:text-4xl font-heading font-medium leading-tight",
                      s.accent === "brand-lime"
                        ? "text-brand-black"
                        : "text-brand-blue",
                    ].join(" ")}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-gray-muted">
                    {s.label}
                  </p>
                  <div
                    className={[
                      "mt-3 h-1.5 w-10 rounded-pill",
                      s.accent === "brand-lime"
                        ? "bg-brand-lime"
                        : "bg-brand-blue",
                    ].join(" ")}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -top-8 -right-4 w-64 h-64 rounded-full bg-brand-lime/40 blur-2xl"
              aria-hidden
            />
            <LimeBlob
              className="pointer-events-none absolute -bottom-12 -left-8 opacity-70"
              size={180}
            />

            <div className="relative mx-auto max-w-md">
              {/* Large circular lime background */}
              <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 -mt-6 w-[380px] h-[380px] rounded-full bg-brand-lime/90"
                aria-hidden
              />

              {/* Main image */}
              <div className="relative mx-auto w-[280px] md:w-[360px]">
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
                  <Image
                    src={growthImage}
                    alt="Professional growing with ByteSpace"
                    fill
                    sizes="(max-width: 768px) 280px, 360px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating cards */}
              <div className="pointer-events-none absolute inset-0">
                <div className="pointer-events-auto absolute left-0 md:-left-4 top-[8%]">
                  <MiniCourseCard title="Web Development" price={30} />
                </div>
                <div className="pointer-events-auto absolute right-0 md:-right-2 top-[30%]">
                  <ProgressCard value={72} />
                </div>
                <LimeSquiggle
                  className="pointer-events-none absolute left-6 bottom-[6%] opacity-80"
                  size={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
