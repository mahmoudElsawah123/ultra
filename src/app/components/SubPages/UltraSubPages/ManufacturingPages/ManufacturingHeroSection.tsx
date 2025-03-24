"use client"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const imgBg = "/assets/Ultrasoft/Manufacturing/hero.png"

const ManufacturingHeroSection = () => {
        const tManufacturing = useTranslations("manufacturingPage") 
        const tNav = useTranslations("navbarPage") 
      const ul = [
        {
          name:tManufacturing("manufacturing1-ul-li1")
        },
        {
          name:tManufacturing("manufacturing1-ul-li2")
        },
        {
          name:tManufacturing("manufacturing1-ul-li3")
        }
      ]
  return (
    <HeroSectionSubPages
    title1={tManufacturing("manufacturing1-head")}
    title2={tManufacturing("manufacturing1-head2")}
    Link1={tNav("nav-Home")}
    Link2={tManufacturing("manufacturing1-head2")}
    ul={ul}
    buttonText={tManufacturing("manufacturing1-btn2")}
    bg={imgBg}
  />
  )
}

export default ManufacturingHeroSection