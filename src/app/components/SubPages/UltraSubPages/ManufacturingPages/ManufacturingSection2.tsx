"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Manufacturing/sec2.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const ManufacturingSection2 = () => {
     const locale = useLocale()
      const t = useTranslations("manufacturingPage")
    const WidgetSection2 = [
      {
        ulHead: t("manufacturing3-ul-li2-head"),
        ulP: t("manufacturing3-ul-li2-p")
      },
      {
        ulHead: t("manufacturing3-ul-li3-head"),
        ulP: t("manufacturing3-ul-li3-p")
      },
      {
        ulHead: t("manufacturing3-ul-li4-head"),
        ulP: t("manufacturing3-ul-li4-p")
      },
      {
        ulHead: t("manufacturing3-ul-li5-head"),
        ulP: t("manufacturing3-ul-li5-p")
      },

    ];
    const paragraphData = [
      t("manufacturing3-span1"),
      t("manufacturing3-span2"),
      t("manufacturing3-span3"),

    ];
    const paragraphStyles = [
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },

    ];
    
  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="  container  ">
        <HeadingWidget style={"text-center !mb-12  text-2xl md:text-3xl font-semibold"} head={t("manufacturing3-head")} />
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between ">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
        <div className="mb-8"><Paragraph  spans={paragraphData} style={paragraphStyles} /></div>
        <UlWithBoltInline ul={WidgetSection2} />
        </div>
       <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
             <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
           </div>
        </div>
      </div>
    </section>
  )
}

export default ManufacturingSection2