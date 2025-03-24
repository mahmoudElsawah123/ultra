"use client"
import { HeadingWidget, Paragraph } from "../../../Widget";
const imgs = "/assets/Ultrasoft/Inventory management/sec1.jpg"

import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
const InventorySection1 = () => {
     const locale = useLocale()
    const t = useTranslations("inventoryPage")
  const paragraphData1 = [
    t("inventory2-span1"),
    t("inventory2-span2"),
    t("inventory2-span3"),
    t("inventory2-span4"),
    t("inventory2-span5"),
    t("inventory2-span6"),
  ];
  const paragraphStyle1 = [
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
  ];
  const paragraphData2 = [
    t("inventory2-p-span1"),
    t("inventory2-p-span2"),
    t("inventory2-p-span3"),
  ];
  const paragraphStyle2 = [
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
  ];
  return (
    <header className="flex flex-col-reverse lg:flex-row container items-center justify-between py-24">
      <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
        <HeadingWidget style="text-2xl md:text-3xl font-semibold" head={t("inventory2-head")} />
        <Paragraph  spans={paragraphData1} style={paragraphStyle1} />
        <Paragraph  spans={paragraphData2} style={paragraphStyle2} />
      </div>

      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
    </header>
  );
};

export default InventorySection1;
