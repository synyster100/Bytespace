import Image from "next/image";

export interface AvatarStackProps {
  avatars?: string[];
  count?: number | string;
  size?: number;
  max?: number;
}

export function AvatarStack({
  avatars = [],
  count,
  size = 24,
  max = 3,
}: AvatarStackProps) {
  const visible = avatars.slice(0, max);
  const style = { width: size, height: size };

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {visible.map((src, i) => (
          <div
            key={i}
            className="rounded-full ring-2 ring-white bg-brand-gray-soft"
            style={style}
          >
            <Image
              src={src}
              alt=""
              width={size}
              height={size}
              className="rounded-full object-cover"
            />
          </div>
        ))}
      </div>
      {typeof count !== "undefined" && count !== null && (
        <div
          className="ml-2 inline-flex items-center justify-center rounded-full bg-brand-lime text-brand-black font-semibold ring-2 ring-white"
          style={{ width: size + 4, height: size + 4, fontSize: Math.max(10, size * 0.4) }}
        >
          {count}
        </div>
      )}
    </div>
  );
}
