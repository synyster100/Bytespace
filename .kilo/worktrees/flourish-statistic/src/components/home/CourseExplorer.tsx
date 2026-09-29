import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryFilters } from "./CategoryFilters";
import { CourseGrid } from "./CourseGrid";

export function CourseExplorer() {
  return (
    <section
      id="courses"
      className="relative py-16 md:py-24 bg-white"
    >
      <div className="container-x">
        <SectionHeading
          title={<><span>Discover Your Passion,</span><br /><span>Build Your Skills</span></>}
          titleClassName="whitespace-pre-line"
          description="At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="mb-10 md:mb-12"
        />

        <div className="mb-10 md:mb-12">
          <CategoryFilters />
        </div>

        <CourseGrid />
      </div>
    </section>
  );
}
