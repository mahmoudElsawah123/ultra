"use client"
import { HeadingWidget, Paragraph } from "../../../Widget"
import { useLocale, useTranslations } from "next-intl";
const imgs = "/assets/subPages/sub2.png"

import Image from "next/image";
const UltraBusinessSolutionsSection3 = () => {
   const locale = useLocale()
    const t = useTranslations("UltraBusinessSolutionsPage")
    const paragraphData1 = [
        t("UltraBusinessSolutions4-p"),
    ];
    const paragraphStyles1 = [
        { color: "text-custom-black", fontWeight: "font-light" },
    ];
return (
    <section className=" py-24 flex flex-col-reverse lg:flex-row-reverse container items-center justify-between ">
      <div className={`${locale === "ar" ? "pr-12" :"pl-12" } lg:w-[52%]`}>
        <HeadingWidget style={"text-2xl md:text-3xl font-semibold"} head={t("UltraBusinessSolutions4-head")} />
        <Paragraph spans={paragraphData1} style={paragraphStyles1}/>
      </div>
       <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
             <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
           </div>
    </section>
)
}

export default UltraBusinessSolutionsSection3

