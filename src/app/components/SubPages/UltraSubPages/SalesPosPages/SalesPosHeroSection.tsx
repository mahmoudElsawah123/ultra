"use client"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const imgBg = "/assets/Ultrasoft/POS/hero.png"

const SalesPosHeroSection = () => {
       const  tPos  = useTranslations("SalesPosPage");
       const  tNav  = useTranslations("navbarPage");
      const ul = [
        {
          name:tPos("SalesPos1-ul-li1")
        },
        {
          name:tPos("SalesPos1-ul-li2")
        },
        {
          name:tPos("SalesPos1-ul-li3")
        }
      ]
  return (
    <HeroSectionSubPages
    title1={tPos("SalesPos1-head")}
    title2={tPos("SalesPos1-head2")}
    Link1={tNav("nav-Home")}
    Link2={tPos("SalesPos1-head2")}
    ul={ul}
    buttonText={tPos("SalesPos1-btn2")}
    bg={imgBg}
  />
  )
}

export default SalesPosHeroSection