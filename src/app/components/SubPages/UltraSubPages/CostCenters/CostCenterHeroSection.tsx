"use client"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const imgBg = "/assets/Ultrasoft/Cost center/hero.png"

const CostCenterHeroSection = () => {
    const tCost = useTranslations("costCentersPage")
    const tNav = useTranslations("navbarPage")
    const ul = [
      {
        name:tCost("costCenters1-ul-li1")
      },
      {
        name:tCost("costCenters1-ul-li2")
      },
      {
        name:tCost("costCenters1-ul-li3")
      }
      ]
return (
    <HeroSectionSubPages
    title1={tCost("costCenters1-head")}
    title2={tCost("costCenters1-head2")}
    Link1={tNav("nav-Home")}
    Link2={tCost("costCenters1-head2")}
    ul={ul}
    buttonText={tCost("costCenters1-btn2")}
    bg={imgBg}
  />
)
}

export default CostCenterHeroSection


