"use client"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const imgBg = "/assets/Ultrasoft/E invoice/hero.png"
const TaxesHeroSection = () => {
      const tTaxes = useTranslations("LinkageWithEgyptianTaxesPage")
      const tNav = useTranslations("navbarPage")
      const ul = [
        {
          name:tTaxes("LinkageWithEgyptianTaxes1-ul-li1")
        },
        {
          name:tTaxes("LinkageWithEgyptianTaxes1-ul-li2")
        },
        {
          name:tTaxes("LinkageWithEgyptianTaxes1-ul-li3")
        }
      ]
  return (
    <HeroSectionSubPages
    title1={tTaxes("LinkageWithEgyptianTaxes1-head")}
    title2={tTaxes("LinkageWithEgyptianTaxes1-head2")}
    Link1={tNav("nav-Home")}
    Link2={tTaxes("LinkageWithEgyptianTaxes1-head2")}
    ul={ul}
    buttonText={tTaxes("LinkageWithEgyptianTaxes1-btn2")}
    bg={imgBg}
  />
  )
}

export default TaxesHeroSection

