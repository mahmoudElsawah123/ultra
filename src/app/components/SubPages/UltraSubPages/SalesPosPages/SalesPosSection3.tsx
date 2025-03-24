"use client"
import { HeadingWidget, Paragraph, UlWithBoltBlock } from "../../../Widget";
const imgs = "/assets/Ultrasoft/POS/sec3.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const SalesPosSection3 = () => {
     const locale = useLocale()
  const  t  = useTranslations("SalesPosPage");

  const WidgetSection3 = [
    {
      ulHead: t("SalesPos4-ul-li1-head"),
       ulP: ""//(
      //   <Paragraph
      //     spans={[
      //       t("SalesPos4-ul-li1-span1"),
      //       t("SalesPos4-ul-li1-span2"),
      //       t("SalesPos4-ul-li1-span3"),
      //       t("SalesPos4-ul-li1-span4"),
      //       t("SalesPos4-ul-li1-span5"),
 
      //     ]}
      //     style={[
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //     ]}
      //   />
      // ),
    },

    {
      ulHead: t("SalesPos4-ul-li3-head"),
      ulP: ""//(
      //   <Paragraph
      //     spans={[
      //       t("SalesPos4-ul-li3-span1"),
      //       t("SalesPos4-ul-li3-span2"),
      //       t("SalesPos4-ul-li3-span3"),

      //     ]}
      //     style={[
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //     ]}
      //   />
      // ),
    },
    {
      ulHead: t("SalesPos4-ul-li4-head"),
      ulP: ""//(
      //   <Paragraph
      //     spans={[
      //       t("SalesPos4-ul-li4-span1"),
      //       t("SalesPos4-ul-li4-span2"),
      //       t("SalesPos4-ul-li4-span3"),
      //       t("SalesPos4-ul-li4-span4"),
      //       t("SalesPos4-ul-li4-span5"),
      //       t("SalesPos4-ul-li4-span6"),
      //       t("SalesPos4-ul-li4-span7"),
      
      //     ]}
      //     style={[
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //       { color: "text-custom-black", fontWeight: "font-light" },
      //     ]}
      //   />
      // ),
    },

  ];
  const paragraphData = [
    ""
    // t("SalesPos4-span1"),
    // t("SalesPos4-span2"),

  ];
  const paragraphStyle = [
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
  ];
  return (
    <section className="py-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse container items-center justify-between">
        <div className={`${locale === "ar" ? "lg:pr-12" :"lg:pl-12" } w-full lg:w-[52%]`}>
          <div className="mb-5">
            <HeadingWidget style={"text-2xl md:text-3xl font-semibold"} head={t("SalesPos4-head")} />
            <Paragraph spans={paragraphData} style={paragraphStyle}/>
          </div>
          <UlWithBoltBlock ul={WidgetSection3} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  );
};

export default SalesPosSection3;


