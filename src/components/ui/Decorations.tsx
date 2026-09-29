"use client";

import * as React from "react";

export function LimeBlob({
  className = "",
  size = 220,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        fill="#D4FB20"
        d="M42.5,-65.8C55.9,-57.7,67.9,-46.7,73.4,-33.3C78.8,-20,77.7,-4.3,73.8,10.2C69.9,24.7,63.2,37.7,53.3,49.1C43.4,60.5,30.3,70.3,15.5,74.8C0.7,79.4,-15.8,78.7,-31,72.3C-46.2,66,-60.1,54,-68.5,39.2C-76.9,24.4,-79.8,6.8,-75.7,-8.8C-71.6,-24.4,-60.6,-38,-47.7,-46.8C-34.8,-55.6,-20,-59.6,-4.5,-63.3C10.9,-67,29.1,-73.8,42.5,-65.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function WhiteRing({
  className = "",
  size = 180,
  style,
  strokeWidth = 10,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <circle
        cx="50"
        cy="50"
        r={50 - strokeWidth / 2}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={strokeWidth}
        strokeDasharray="4 6"
      />
    </svg>
  );
}

export function WhiteTriangle({
  className = "",
  size = 80,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <polygon points="10,90 90,90 50,10" fill="#FFFFFF" />
    </svg>
  );
}

export function LimeSquiggle({
  className = "",
  size = 80,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M5 40 Q 20 5, 40 25 T 80 25 T 95 10"
        fill="none"
        stroke="#D4FB20"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhiteSquiggle({
  className = "",
  size = 80,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M5 35 Q 25 5, 45 30 T 85 25"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LimeRing({
  className = "",
  size = 160,
  style,
  strokeWidth = 8,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <circle
        cx="50"
        cy="50"
        r={50 - strokeWidth / 2}
        fill="none"
        stroke="#D4FB20"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
