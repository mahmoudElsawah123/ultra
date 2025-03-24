"use client"
import { HeadingWidget, UlWithBoltBlock } from "../../../Widget"
const imgs = "/assets/subPages/sub2.png"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const ElectronicInvoiceSection2 = () => {
     const locale = useLocale()
    const t = useTranslations("ElectronicInvoice")
    const ul =[
      {
        ulHead:t("ElectronicInvoice3-ul-li1-head"),
        ulP:t("ElectronicInvoice3-ul-li1-p")
      },
      {
        ulHead:t("ElectronicInvoice3-ul-li2-head"),
        ulP:t("ElectronicInvoice3-ul-li2-p")
      },
      {
        ulHead:t("ElectronicInvoice3-ul-li3-head"),
        ulP:t("ElectronicInvoice3-ul-li3-p")
      },
      {
        ulHead:t("ElectronicInvoice3-ul-li4-head"),
        ulP:t("ElectronicInvoice3-ul-li4-p")
      },
      {
        ulHead:t("ElectronicInvoice3-ul-li5-head"),
        ulP:t("ElectronicInvoice3-ul-li5-p")
      },
      {
        ulHead:t("ElectronicInvoice3-ul-li6-head"),
        ulP:t("ElectronicInvoice3-ul-li6-p")
      },
    ]
  return (
    <section className=" bg-white">
     <div className="flex flex-col-reverse lg:flex-row container items-center justify-between py-24 ">

      <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
        <HeadingWidget head={t("ElectronicInvoice3-head")} style={"text-2xl md:text-3xl font-semibold "} />
        <UlWithBoltBlock ul={ul} />
      </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 w-full max-md:h-[270px]  h-[357px] relative">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
     </div>
    </section>
  )
}

export default ElectronicInvoiceSection2




