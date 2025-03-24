"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Manufacturing/sec3.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const ManufacturingSection3 = () => {
     const locale = useLocale()
    const t = useTranslations("manufacturingPage")
    const WidgetSection3 = [
      {
        ulHead: t("manufacturing4-ul-head1"),
        ulP: t("manufacturing4-ul-p1")
      },
      {
        ulHead: t("manufacturing4-ul-head2"),
        ulP: t("manufacturing4-ul-p2")
      },
      {
        ulHead: t("manufacturing4-ul-head3"),
        ulP: t("manufacturing4-ul-p3")
      },
      {
        ulHead: t("manufacturing4-ul-head4"),
        ulP: t("manufacturing4-ul-p4")
      },


    ];
    const paragraphData = [
      t("manufacturing4-span1"),
      t("manufacturing4-span2"),
      t("manufacturing4-span3"),

    ];
    const paragraphStyles = [
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },

    ];
    
  return (
    <section className="py-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse container items-center justify-between  ">
        <div className={`${locale === "ar" ? "pr-12" :"pl-12" } lg:w-[52%]`}>
        <HeadingWidget style={"text-2xl  md:text-3xl font-semibold"} head={t("manufacturing4-head")} />
          <div className="mb-8"><Paragraph spans={paragraphData} style={paragraphStyles} /></div>
          <UlWithBoltInline ul={WidgetSection3} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    
    </section>
  )
}

export default ManufacturingSection3