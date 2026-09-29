"use client";

import * as React from "react";
import { categories } from "@/data/categories";

export function CategoryFilters() {
  const [active, setActive] = React.useState<string>(categories[0].id);

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {categories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            aria-pressed={isActive}
            className={[
              "h-10 px-7 rounded-pill text-sm font-semibold transition-colors whitespace-nowrap border",
              isActive
                ? "bg-brand-lime text-brand-black border-brand-lime shadow-sm"
                : "bg-gray-100 text-brand-black/80 border-brand-gray-border hover:border-brand-black/30 hover:text-brand-black",
            ].join(" ")}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
