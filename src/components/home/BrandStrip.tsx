import { ViewportFitFrame } from "@/components/ui/ViewportFitFrame";

const GRAY = "#82868E";

type Icon = (props: { size: number }) => JSX.Element;

const WaveIcon: Icon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden
  >
    <path
      d="M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20Z"
      fill={GRAY}
    />
    <path
      d="M4.5 21c5 0 6.5-3 12-3s7 3 12 3 6.5-3 12-3 7 3 11.5 3"
      stroke="#fff"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M4.5 26.5c5 0 6.5-3 12-3s7 3 12 3 6.5-3 12-3 7 3 11.5 3"
      stroke="#fff"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M4.5 32c5 0 6.5-3 12-3s7 3 12 3 6.5-3 12-3 7 3 11.5 3"
      stroke="#fff"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
  </svg>
);

const SunIcon: Icon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden
  >
    <circle cx="24" cy="24" r="9" fill={GRAY} />
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      const x1 = 24 + Math.cos(a) * 14;
      const y1 = 24 + Math.sin(a) * 14;
      const x2 = 24 + Math.cos(a) * 21.5;
      const y2 = 24 + Math.sin(a) * 21.5;
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={GRAY}
          strokeWidth="3.6"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

const BoltIcon: Icon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden
  >
    <circle cx="24" cy="24" r="20" fill={GRAY} />
    <path
      d="M27 7.5 13.5 27.5h9L20.5 40.5 34 20h-8.5L27 7.5Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

const PetalIcon: Icon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden
  >
    <circle cx="24" cy="24" r="20" fill={GRAY} />
    <circle cx="24" cy="14" r="4.5" fill="#fff" />
    <circle cx="34" cy="24" r="4.5" fill="#fff" />
    <circle cx="24" cy="34" r="4.5" fill="#fff" />
    <circle cx="14" cy="24" r="4.5" fill="#fff" />
  </svg>
);

const RippleIcon: Icon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden
  >
    <circle cx="24" cy="24" r="20" fill={GRAY} />
    {Array.from({ length: 10 }).map((_, i) => (
      <path
        key={i}
        d="M24 4.5a19.5 19.5 0 0 1 0 39"
        stroke="#fff"
        strokeWidth="0.9"
        strokeDasharray={`${2 - i * 0.12} 6`}
        transform={`rotate(${10 + i * 8} 24 24)`}
      />
    ))}
    <circle cx="18" cy="16" r="3.4" fill="#fff" />
  </svg>
);

const ICONS: Icon[] = [WaveIcon, SunIcon, BoltIcon, PetalIcon, RippleIcon];

function Logo({ Icon }: { Icon: Icon }) {
  return (
    <div
      className="flex items-center"
      style={{
        gap: 10,
        height: 44,
      }}
    >
      <Icon size={44} />
      <span
        className="m-0 p-0"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: 26,
          lineHeight: "120%",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: GRAY,
        }}
      >
        Logoipsum
      </span>
    </div>
  );
}

export function BrandStrip() {
  return (
    <section
      className="relative w-full mx-auto"
      style={{ background: "#F5F5F6" }}
    >
      <ViewportFitFrame designWidth={1440} designHeight={240}>
        <ul
          className="absolute flex flex-row items-center list-none m-0 p-0"
          style={{
            width: 1200,
            height: 44,
            left: 120,
            top: 98,
            justifyContent: "space-between",
          }}
        >
          {ICONS.map((Icon, i) => (
            <li
              key={i}
              className="flex items-center justify-center flex-shrink-0"
              style={{ opacity: 1 }}
            >
              <Logo Icon={Icon} />
            </li>
          ))}
        </ul>
      </ViewportFitFrame>
    </section>
  );
}
