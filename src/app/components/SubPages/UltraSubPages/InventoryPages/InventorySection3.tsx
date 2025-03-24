"use client"
import { Paragraph, UlWithBoltBlock } from "../../../Widget";
const imgs = "/assets/Ultrasoft/Inventory management/sec3.jpg"
import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
const InventorySection3 = () => {
     const locale = useLocale()
    const t = useTranslations("inventoryPage")

  const WidgetSection3 = [
    {
      ulHead: t("inventory4-ul-head1"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory4-ul-p1-span1"),
            t("inventory4-ul-p1-span2"),
            t("inventory4-ul-p1-span3"),
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
      ulHead: t("inventory4-ul-head2"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory4-ul-p2-span1"),
            t("inventory4-ul-p2-span2"),
            t("inventory4-ul-p2-span3"),
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
      ulHead: t("inventory4-ul-head3"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory4-ul-p3-span1"),
            t("inventory4-ul-p3-span2"),
            t("inventory4-ul-p3-span3"),
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
      ulHead: t("inventory4-ul-head4"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory4-ul-p4-span1"),
            t("inventory4-ul-p4-span2"),
            t("inventory4-ul-p4-span3"),
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
      ulHead: t("inventory4-ul-head5"),
      ulP: (
        <Paragraph
          spans={[
            t("inventory4-ul-p5-span1"),
            t("inventory4-ul-p5-span2"),
            t("inventory4-ul-p5-span3"),
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
    <section className=" py-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse container items-center justify-between">
        <div className={`${locale === "ar" ? "pr-12" :"pl-12" } lg:w-[52%]`}>
          <UlWithBoltBlock ul={WidgetSection3} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  );
};

export default InventorySection3;
