"use client"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const imgBg = "/assets/Ultrasoft/Inventory management/hero.png"

const InventoryHeroSection = () => {
     const tInventory = useTranslations("inventoryPage")
     const tNav = useTranslations("navbarPage")
      const ul = [
        {
          name:tInventory("inventory1-ul-li1")
        },
        {
          name:tInventory("inventory1-ul-li2")
        },
        {
          name:tInventory("inventory1-ul-li3")
        }
      ]

  return (
    <HeroSectionSubPages
    title1={tInventory("inventory1-head")}
    title2={tInventory("inventory1-head2")}
    Link1={tNav("nav-Home")}
    Link2={tInventory("inventory1-head2")}
    ul={ul}
    buttonText={tInventory("inventory1-btn2")}
    bg={imgBg}
  />
  )
}

export default InventoryHeroSection