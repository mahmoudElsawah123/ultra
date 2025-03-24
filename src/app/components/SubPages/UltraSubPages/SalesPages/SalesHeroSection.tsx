"use client"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const imgBg = "/assets/Ultrasoft/Sales Management/hero 1.png"

const SalesHeroSection = () => {
  const tSales = useTranslations("SalesPage")
  const tNav= useTranslations("navbarPage")
      const ul = [
        {
          name:tSales("Sales1-ul-li1")
        },
        {
          name:tSales("Sales1-ul-li2")
        },
        {
          name:tSales("Sales1-ul-li3")
        }
      ]
  return (
    <HeroSectionSubPages
    title1={tSales("Sales1-head")}
    title2={tSales("Sales1-head2")}
    Link1={tNav("nav-Home")}
    Link2={tSales("Sales1-head2")}
    ul={ul}
    buttonText={tSales("Sales1-btn2")}
    bg={imgBg}
  />
  )
}

export default SalesHeroSection