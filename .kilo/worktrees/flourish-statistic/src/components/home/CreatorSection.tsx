"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import {
  RevenueCard,
  ViewsCard,
  StudentStatCard,
} from "@/components/ui/FloatingCards";
import { LimeBlob } from "@/components/ui/Decorations";

const CHECKLIST_ITEMS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function CreatorSection() {
  const creatorImage =
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=creative%20young%20woman%20creator%20using%20tablet%20device%20stylus%20pen%20modern%20cafe%20warm%20lighting%20photorealistic%20smiling&image_size=portrait_4_3";

  return (
    <section
      id="creators"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Creator visual */}
          <div className="order-2 lg:order-1 relative">
            <LimeBlob
              className="pointer-events-none absolute -bottom-10 -right-8 opacity-70"
              size={200}
            />
            <div
              className="pointer-events-none absolute -top-10 -left-8 w-56 h-56 rounded-full bg-brand-blue/10 blur-2xl"
              aria-hidden
            />

            <div className="relative mx-auto max-w-md">
              {/* Large circular blue background */}
              <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 -mt-8 w-[390px] h-[390px] rounded-full bg-brand-blue/10"
                aria-hidden
              />

              {/* Main image */}
              <div className="relative mx-auto w-[280px] md:w-[370px]">
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                  <Image
                    src={creatorImage}
                    alt="Creator managing courses"
                    fill
                    sizes="(max-width: 768px) 280px, 370px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating cards */}
              <div className="pointer-events-none absolute inset-0">
                <div className="pointer-events-auto absolute left-0 md:-left-6 top-[12%]">
                  <RevenueCard value="$120.29" label="Total Revenue" />
                </div>
                <div className="pointer-events-auto absolute right-0 md:-right-2 top-[40%]">
                  <ViewsCard value="$1,200.38" label="Views on Posts" />
                </div>
                <div className="pointer-events-auto absolute left-4 md:-left-4 bottom-[6%]">
                  <StudentStatCard count="12.4K" label="Happy Students" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-3">
              For Creators
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-semibold leading-[1.1] tracking-tight text-brand-black">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-5 text-base md:text-lg text-brand-gray-muted leading-relaxed">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <ul className="mt-8 space-y-4">
              {CHECKLIST_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" aria-hidden />
                  </span>
                  <span className="text-base font-medium text-brand-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
