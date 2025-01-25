import { HeroSection } from "@/components/home/HeroSection";
import { SearchSection } from "@/components/home/SearchSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { AboutSection } from "@/components/home/AboutSection";
import { AreasSection } from "@/components/home/AreasSection";
import { SuccessStoriesSection } from "@/components/home/SuccessStoriesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SocialSection } from "@/components/home/SocialSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SearchSection />
      <FeaturedProperties />
      <AboutSection />
      <AreasSection />
      <SuccessStoriesSection />
      <ServicesSection />
      <SocialSection />
      <ContactSection />
    </main>
  );
}