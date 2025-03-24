"use client"
import { HeadingWidget, Paragraph, UlWithBoltBlock } from "../../../Widget";
;
const imgs = "/assets/Ultrasoft/Inventory management/sec2.jpg"

import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
const InventorySection2 = () => {
     const locale = useLocale()
    const t = useTranslations("inventoryPage")

  const WidgetSection2 = [
    {
      ulHead: t("inventory3-ul-li2-head"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory3-ul-li2-p1-span1"),
            t("inventory3-ul-li2-p1-span2"),
            t("inventory3-ul-li2-p1-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    {
      ulHead: t("inventory3-ul-li3-head"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory3-ul-li3-p2-span1"),
            t("inventory3-ul-li3-p2-span2"),
            t("inventory3-ul-li3-p2-span3"),
            t("inventory3-ul-li3-p2-span4"),
            t("inventory3-ul-li3-p2-span5"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    {
      ulHead: t("inventory3-ul-li4-head"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory3-ul-li4-p3-span1"),
            t("inventory3-ul-li4-p3-span2"),
            t("inventory3-ul-li4-p3-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    {
      ulHead: t("inventory3-ul-li5-head"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory3-ul-li5-p4-span1"),
            t("inventory3-ul-li5-p4-span2"),
            t("inventory3-ul-li5-p4-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
  ];

  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="container">
      <HeadingWidget style={"text-2xl !mb-12 md:text-3xl font-semibold text-center"} head={t("inventory3-head")}/>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className={`${locale=== "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <UlWithBoltBlock ul={WidgetSection2} />
        </div>
        <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
              <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
            </div>
      </div>
      </div>
    </section>
  );
};

export default InventorySection2;
