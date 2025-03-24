"use client"
import { HeadingWidget, Paragraph } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Sales Management/sec1.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const SalesSection1 = () => {
     const locale = useLocale()
    const t = useTranslations("SalesPage")
    const paragraphData = [
      t("Sales2-span1"),
      t("Sales2-span2"),
      t("Sales2-span3"),
      t("Sales2-span4"),
      t("Sales2-span5"),
      t("Sales2-span6"),

    ];
    const paragraphStyle = [
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
    ];
  return (
    <header className="flex flex-col-reverse lg:flex-row container items-center justify-between py-24 ">
    <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
        <HeadingWidget style={"text-2xl md:text-3xl font-semibold"} head={t("Sales2-head")} />
        <Paragraph spans={paragraphData} style={paragraphStyle}/>
    </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
</header>
  )
}

export default SalesSection1