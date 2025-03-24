"use client"
const imgBg = "/assets/Ultrasoft/Payments/hero.png"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";

const RecordsHeroSection = () => {
      const tRecords = useTranslations("RecordsAndSecuritiesPage")
      const tNav = useTranslations("navbarPage")
      const ul = [
        {
          name:tRecords("RecordsAndSecurities1-ul-li1")
        },
        {
          name:tRecords("RecordsAndSecurities1-ul-li2")
        },
        {
          name:tRecords("RecordsAndSecurities1-ul-li3")
        }
      ]
  return (
    <HeroSectionSubPages
    title1={tRecords("RecordsAndSecurities1-head")}
    title2={tRecords("RecordsAndSecurities1-head2")}
    Link1={tNav("nav-Home")}
    Link2={tRecords("RecordsAndSecurities1-head2")}
    ul={ul}
    buttonText={tRecords("RecordsAndSecurities1-btn2")}
    bg={imgBg}
  />
  )
}

export default RecordsHeroSection
