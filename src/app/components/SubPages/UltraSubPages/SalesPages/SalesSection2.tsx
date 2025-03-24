"use client"
import { HeadingWidget, UlWithBoltBlock } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Sales Management/sec2.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const SalesSection2 = () => {
     const locale = useLocale()
    const t = useTranslations("SalesPage")
    const WidgetSection2 = [
      {
        ulHead: t("Sales3-ul-li2-head"),
        ulP: t("Sales3-ul-li2-p")
      },
      {
        ulHead: t("Sales3-ul-li3-head"),
        ulP: t("Sales3-ul-li3-p")
      },
      {
        ulHead: t("Sales3-ul-li4-head"),
        ulP: t("Sales3-ul-li4-p")
      },
      // {
      //   ulHead: t("Sales3-ul-li5-head"),
      //   ulP: t("Sales3-ul-li5-p")
      // },
      {
        ulHead: t("Sales3-ul-li6-head"),
        ulP: t("Sales3-ul-li6-p")
      },
      {
        ulHead: t("Sales3-ul-li7-head"),
        ulP: t("Sales3-ul-li7-p")
      },


    ];
    
  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="container   ">
        <HeadingWidget style={"text-2xl !mb-12 md:text-3xl font-semibold text-center"} head={t("Sales3-head")} />
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <HeadingWidget style={"text-xl md:text-2xl font-semibold"} head={t("Sales3-secHead")} />
          <UlWithBoltBlock ul={WidgetSection2} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SalesSection2