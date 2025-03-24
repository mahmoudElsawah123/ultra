import { getTranslations } from "next-intl/server";
import BtnUp from "@/app/components/BtnUp";
import { BlogSection, BrandSection, Contact, HeroSection, UltraSection } from "@/app/components/HomePage";
export default async function HomePage() {
  const t = await getTranslations("homePage");
    return (
      <main className="mx-auto mt-[74px]">
        <BtnUp />
        <HeroSection />
        <UltraSection />
        <BlogSection />
        <BrandSection/>
        <Contact />
      </main>
    );
  }