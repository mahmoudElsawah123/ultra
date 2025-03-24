"use client"
import { HeadingWidget, Paragraph } from "../../../Widget";
const imgs = "/assets/Ultrasoft/Manufacturing/sec4.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const ManufacturingSection4 = () => {
     const locale = useLocale()
  const t = useTranslations("manufacturingPage")

  const paragraphData = [
    t("manufacturing5-span1"),
    t("manufacturing5-span2"),
    t("manufacturing5-span3"),
    t("manufacturing5-span4"),
    t("manufacturing5-span5"),

  ];
  const paragraphStyles = [
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
  ];

  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="flex flex-col-reverse lg:flex-row container items-center justify-between">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <HeadingWidget style="text-2xl md:text-3xl font-semibold" head={t("manufacturing5-head")} />
          <Paragraph spans={paragraphData} style={paragraphStyles} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  );
};

export default ManufacturingSection4;
