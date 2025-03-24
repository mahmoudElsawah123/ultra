"use client"
import { HeadingWidget, Paragraph } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Cost center/sec3.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const CostCenterSection3 = () => {
  
   const locale = useLocale()
const t = useTranslations("costCentersPage")

  const paragraphData = [
    t("costCenters4-span1"),
    t("costCenters4-span2"),
    t("costCenters4-span3"),

  ];
  const paragraphStyle = [
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
  ];
  return (
    <section className="py-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse container items-center justify-between ">
        <div className={`${locale === "ar" ? "lg:pr-12" :"lg:pl-12" } w-full lg:w-[52%]`}>
          <HeadingWidget head={t("costCenters4-head")} style={"mb-8 text-2xl md:text-3xl font-semibold"} />
          <Paragraph  spans={paragraphData} style={paragraphStyle}/>
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  )
}

export default CostCenterSection3




