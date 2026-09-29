import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandStrip } from "@/components/home/BrandStrip";
import { CourseExplorer } from "@/components/home/CourseExplorer";
import { LearningPaths } from "@/components/home/LearningPaths";
import { GrowthSection } from "@/components/home/GrowthSection";
import { CreatorCTA } from "@/components/home/CreatorCTA";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandStrip />
        <CourseExplorer />
        <LearningPaths />
        <GrowthSection />
        <CreatorCTA />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
