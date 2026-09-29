import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths } from "@/data/learningPaths";

export function LearningPaths() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container-x">
        <SectionHeading
          title="Explore Diverse Learning Paths at ByteSpace"
          description="At ByteSpace, we believe in empowering individuals through knowledge. Our diverse range of course topics covers fields, ensuring there's something for everyone. Unlock your potential and explore our carefully curated categories."
          className="mb-12 md:mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {learningPaths.map((lp) => {
            const Icon = lp.icon;
            return (
              <a
                key={lp.id}
                href="#category"
                className="group flex flex-col items-center gap-4 bg-white border border-brand-gray-border rounded-card p-5 md:p-6 hover:border-brand-blue/30 hover:shadow-card transition-all duration-200"
              >
                <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-brand-lime flex items-center justify-center text-brand-black group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-7 h-7 md:w-8 md:h-8" aria-hidden />
                </div>
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-heading font-semibold text-brand-black">
                    {lp.name}
                  </h3>
                  {lp.courses && (
                    <p className="text-xs text-brand-gray-muted mt-1">
                      {lp.courses} courses
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
