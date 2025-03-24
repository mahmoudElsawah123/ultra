"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/POS/sec1.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const SalesPosSection1 = () => {
     const locale = useLocale()
      const  t  = useTranslations("SalesPosPage");
    const paragraphData = [
      t("SalesPos2-span1"),
      t("SalesPos2-span2"),
      t("SalesPos2-span3"),
      t("SalesPos2-span4"),
      t("SalesPos2-span5"),
      // t("SalesPos2-span6"),
      // t("SalesPos2-span7"),
      // t("SalesPos2-span8"),
    ];
    const paragraphStyle = [
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
    ];
    const WidgetSection1 = [
      {
        ulHead: t("SalesPos2-ul-head1"),
        ulP: t("SalesPos2-ul-p1")
      },
      {
        ulHead: t("SalesPos2-ul-head2"),
        ulP: (
          <Paragraph
            spans={[
              t("SalesPos2-ul-p2-span1"),
              t("SalesPos2-ul-p2-span2"),
            ]}
            style={[
              { color: "text-custom-black", fontWeight: "font-light" },
              { color: "text-custom-black", fontWeight: "font-light" },
            ]}
          />
        ),
      },
      {
        ulHead: t("SalesPos2-ul-head3"),
        ulP: t("SalesPos2-ul-p3")
      },

      {
        ulHead: t("SalesPos2-ul-head5"),
        ulP: (
          <Paragraph
            spans={[
              t("SalesPos2-ul-p5-span1"),
              t("SalesPos2-ul-p5-span2"),
            ]}
            style={[
              { color: "text-custom-black", fontWeight: "font-light" },
              { color: "text-custom-black", fontWeight: "font-light" },
            ]}
          />
        ),
      },
      {
        ulHead: t("SalesPos2-ul-head6"),
        ulP: t("SalesPos2-ul-p6")
      },

    ];
  return (
    <header className="container py-24 ">
      <div className="mb-5 w-full text-center">
        <HeadingWidget style={"text-2xl mb-8  md:text-3xl font-semibold"} head={t("SalesPos2-head")} />
        <div className="m-auto sm:w-3/4 mb-10"><Paragraph spans={paragraphData} style={paragraphStyle}/></div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row  items-center justify-between">
      <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
        <div>
          <HeadingWidget style={"text-xl md:text-2xl font-semibold"} head={t("SalesPos2-head2")} />
          <UlWithBoltInline ul={WidgetSection1} />
        </div>
    </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>

</header>
  )
}

export default SalesPosSection1

