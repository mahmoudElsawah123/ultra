"use client"
const imgBg = "/assets/Ultrasoft/Branches managemnet/hero.png"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";

const ManagementHeroSection = () => {
    const tManagement = useTranslations("ManagementAndLinkingPage")
    const tNav = useTranslations("navbarPage")
    const ul = [
      {
        name:tManagement("ManagementAndLinking1-ul-li1")
      },
      {
        name:tManagement("ManagementAndLinking1-ul-li2")
      },
      {
        name:tManagement("ManagementAndLinking1-ul-li3")
      }
      ]
return (
    <HeroSectionSubPages
    title1={tManagement("ManagementAndLinking1-head")}
    title2={tManagement("ManagementAndLinking1-head2")}
    Link1={tNav("nav-Home")}
    Link2={tManagement("ManagementAndLinking1-head2")}
    ul={ul}
    buttonText={tManagement("ManagementAndLinking1-btn2")}
    bg={imgBg}
  />
)
}

export default ManagementHeroSection



