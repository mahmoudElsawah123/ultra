"use client"
import { Paragraph, UlWithBoltBlock } from "../../../Widget";
const imgs = "/assets/Ultrasoft/Inventory management/sec4.jpg"
import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
const InventorySection4 = () => {
     const locale = useLocale()
    const t = useTranslations("inventoryPage")

  const WidgetSection4 = [
    {
      ulHead: t("inventory5-ul-head1"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory5-ul-p1-span1"),
            t("inventory5-ul-p1-span2"),
            t("inventory5-ul-p1-span3"),
            t("inventory5-ul-p1-span4"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      )
    },
    {
      ulHead: t("inventory5-ul-head2"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory5-ul-p2-span1"),
            t("inventory5-ul-p2-span2"),
            t("inventory5-ul-p2-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      )
    },
    {
      ulHead: t("inventory5-ul-head3"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory5-ul-p3-span1"),
            t("inventory5-ul-p3-span2"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      )
    },
    {
      ulHead: t("inventory5-ul-head4"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory5-ul-p4-span1"),
            t("inventory5-ul-p4-span2"),
            t("inventory5-ul-p4-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      )
    }
  ];

  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="flex flex-col-reverse lg:flex-row container items-center justify-between">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <UlWithBoltBlock ul={WidgetSection4} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  );
};

export default InventorySection4;
