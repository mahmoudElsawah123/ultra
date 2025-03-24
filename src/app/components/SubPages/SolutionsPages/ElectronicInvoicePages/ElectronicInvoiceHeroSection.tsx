"use client"
const imgBg = "/assets/Ultrasoft/حلول الفاتورة الالكترونية.png"
import HeroSectionSubPages from "@/app/components/HeroSectionSubPages";
import { useTranslations } from "next-intl";
const ElectronicInvoiceHeroSection = () => {
    const t = useTranslations("ElectronicInvoice")
    const tNav = useTranslations("navbarPage")
    const ul = [
      {
        name:t("ElectronicInvoice1-ul-li1")
      },
      {
        name:t("ElectronicInvoice1-ul-li2")
      },
      {
        name:t("ElectronicInvoice1-ul-li3")
      }
      ]
return (
    <HeroSectionSubPages
    title1={t("ElectronicInvoice1-head")}
    title2={t("ElectronicInvoice1-head2")}
    Link1={tNav("nav-Home")}
    Link2={t("ElectronicInvoice1-head2")}
    ul={ul}
    buttonText={t("ElectronicInvoice1-btn2")}
    bg={imgBg}
  />
)
}

export default ElectronicInvoiceHeroSection


