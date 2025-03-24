"use client"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const imgBg = "/assets/Ultrasoft/Accounting managment/hero.png"

const AccountHeroSection = () => {
  const tAccount = useTranslations("accountPage")
  const tNav = useTranslations("navbarPage")
  const ul = [
    {
      name:tAccount("AccountModule1-ul-li1")
    },
    {
      name:tAccount("AccountModule1-ul-li2")
    },
    {
      name:tAccount("AccountModule1-ul-li3")
    }
  ]
  return (
      <HeroSectionSubPages
        title1={tAccount("AccountModule1-head")}
        title2={tAccount("AccountModule1-head2")}
        Link1={tNav("nav-Home")}
        Link2={tAccount("AccountModule1-head2")}
        ul={ul}
        buttonText={tAccount("AccountModule1-btn2")}
        bg={imgBg}
      />
  )
}

export default AccountHeroSection