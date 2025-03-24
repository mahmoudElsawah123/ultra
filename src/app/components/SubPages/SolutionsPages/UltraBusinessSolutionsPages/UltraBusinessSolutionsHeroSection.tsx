"use client"
const imgBg = "/assets/Ultrasoft/الترا لحلول الاعمال.png"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const UltraBusinessSolutionsHeroSection = () => {
    const t = useTranslations("UltraBusinessSolutionsPage")
    const tNav = useTranslations("navbarPage")
    const ul = [
      {
        name:t("UltraBusinessSolutions1-ul-li1")
      },
      {
        name:t("UltraBusinessSolutions1-ul-li2")
      },
      {
        name:t("UltraBusinessSolutions1-ul-li3")
      }
      ]
return (
    <HeroSectionSubPages
    title1={t("UltraBusinessSolutions1-head")}
    title2={t("UltraBusinessSolutions1-head2")}
    Link1={tNav("nav-Home")}
    Link2={t("UltraBusinessSolutions1-head2")}
    ul={ul}
    buttonText={t("UltraBusinessSolutions1-btn2")}
    bg={imgBg}
  />
)
}

export default UltraBusinessSolutionsHeroSection


