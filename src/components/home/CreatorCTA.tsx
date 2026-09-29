"use client";

import Image from "next/image";
import Link from "next/link";

const LIME_FILTER =
  "saturate(0) sepia(1) saturate(5.8) hue-rotate(54deg) brightness(1.2) contrast(1.12)";
const WHITE_FILTER =
  "saturate(0) brightness(1.26) contrast(0.9) invert(0.0)";

type OrnamentColor = "lime" | "white";

function Ornament({
  src,
  width,
  height,
  left,
  top,
  color,
  flipX = false,
  rotation = 0,
}: {
  src: string;
  width: number;
  height: number;
  left: number;
  top: number;
  color: OrnamentColor;
  flipX?: boolean;
  rotation?: number;
}) {
  const filter = color === "lime" ? LIME_FILTER : WHITE_FILTER;
  const transforms: string[] = [];
  if (flipX) transforms.push("scaleX(-1)");
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  const transform = transforms.length > 0 ? transforms.join(" ") : undefined;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        width,
        height,
        left,
        top,
        transform,
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={`${width}px`}
        className="object-contain"
        style={{ filter }}
        priority={false}
      />
    </div>
  );
}

export function CreatorCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#003BE2" }}>
      <div
        className="relative mx-auto"
        style={{ width: "100%", maxWidth: 1440, height: 488 }}
      >
        {/* 120px grid lines 0.12 opacity white */}
        <div
          aria-hidden
          className="grid-bg absolute inset-0 pointer-events-none"
          style={{ opacity: 0.12 }}
        />

        {/* 3D ornaments clipped within 1440x488 frame (positions matched to CTA_Frame.png) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Top-left big lime spiral */}
          <Ornament
            src="/spiral.svg"
            width={385}
            height={385}
            left={-110}
            top={-140}
            color="lime"
            rotation={0}
          />
          {/* Top-left inner white squiggle (flipped X) */}
          <Ornament
            src="/Spiral 2d.svg"
            width={175}
            height={175}
            left={200}
            top={35}
            color="white"
            rotation={-3}
          />
          {/* Top-right small lime cone */}
          <Ornament
            src="/Cone.svg"
            width={189}
            height={189}
            left={1080}
            top={10}
            color="lime"
            rotation={0}
          />
          {/* Mid-left white cone */}
          <Ornament
            src="/Cone 2.svg"
            width={189}
            height={189}
            left={-50}
            top={235}
            color="white"
            rotation={5}
          />
          {/* Bottom-left big lime donut */}
          <Ornament
            src="/Donut.svg"
            width={340}
            height={340}
            left={60}
            top={280}
            color="lime"
            rotation={0}
          />
          {/* Bottom-right lime squiggle spiral */}
          <Ornament
            src="/spiral.svg"
            width={320}
            height={320}
            left={1080}
            top={300}
            color="lime"
            rotation={135}
          />
          {/* Right big white cylinder */}
          <Ornament
            src="/Cylinder 2d.svg"
            width={364}
            height={560}
            left={1235}
            top={-80}
            color="white"
          >
          </Ornament>
        </div>

        {/* Content — centered 964x319, flex-col items-center gap=40 */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            width: 964,
            height: 319,
            left: "calc(50% - 964px / 2)",
            top: "calc(50% - 319px / 2 + 0.5px)",
            padding: 0,
            gap: 40,
          }}
        >
          <h2
            className="font-heading text-heading-m m-0 p-0"
            style={{
              width: 710,
              height: 106,
              textAlign: "center",
              color: "#F5F5F6",
            }}
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p
            className="text-body-l m-0 p-0"
            style={{
              width: 964,
              height: 87,
              textAlign: "center",
              color: "#F5F5F6",
            }}
          >
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <Link
            href="/become-a-creator"
            className="flex flex-row justify-center items-center no-underline"
            style={{
              width: 172,
              height: 46,
              padding: "12px 24px",
              gap: 8,
              borderRadius: 24,
              background: "#D4FB20",
              color: "#242528",
            }}
          >
            <span
              className="text-label-l"
              style={{ width: 124, height: 22 }}
            >
              Join as Creator
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
