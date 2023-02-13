import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
export default function Home() {
  return (
    <main className=" px-4 sm:px-6  bg-[#242424]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
