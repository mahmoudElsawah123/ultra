"use client"
import { HeadingWidget, Paragraph, UlWithBoltBlock } from "../../../Widget";
const imgs = "/assets/Ultrasoft/POS/sec4.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const SalesPosSection4 = () => {
     const locale = useLocale()
   const  t  = useTranslations("SalesPosPage");
  const WidgetSection4 = [
    {
      ulHead: t("SalesPos5-ul-li1-head"),
      ulP: (
        <Paragraph
          spans={[
           // t("SalesPos5-ul-li1-span1"),
            //t("SalesPos5-ul-li1-span2"),
            t("SalesPos5-ul-li1-span3"),
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
      ulHead: t("SalesPos5-ul-li2-head"),
      ulP: (
        <Paragraph
          spans={[
           // t("SalesPos5-ul-li2-span1"),
            //t("SalesPos5-ul-li2-span2"),
            t("SalesPos5-ul-li2-span3"),

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
      ulHead: t("SalesPos5-ul-li3-head"),
      ulP: (
        <Paragraph
          spans={[
            // t("SalesPos5-ul-li3-span1"),
            // t("SalesPos5-ul-li3-span2"),
            // t("SalesPos5-ul-li3-span3"),
            // t("SalesPos5-ul-li3-span4"),
            t("SalesPos5-ul-li3-span5"),
            t("SalesPos5-ul-li3-span6"),
            t("SalesPos5-ul-li3-span7"),
        
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    // {
    //   ulHead: t("SalesPos4-ul-li4-head"),
    //   ulP: (
    //     <Paragraph
    //       spans={[
    //         t("SalesPos4-ul-li4-span1"),
    //         t("SalesPos4-ul-li4-span2"),
    //         t("SalesPos4-ul-li4-span3"),
    //         t("SalesPos4-ul-li4-span4"),
    //         t("SalesPos4-ul-li4-span5"),
    //         t("SalesPos4-ul-li4-span6"),
    //         t("SalesPos4-ul-li4-span7"),
    //       ]}
    //       style={[
    //         { color: "text-custom-black", fontWeight: "font-light" },
    //         { color: "text-custom-black", fontWeight: "font-light" },
    //         { color: "text-custom-black", fontWeight: "font-light" },
    //         { color: "text-custom-black", fontWeight: "font-light" },
    //         { color: "text-custom-black", fontWeight: "font-light" },
    //         { color: "text-custom-black", fontWeight: "font-light" },
    //         { color: "text-custom-black", fontWeight: "font-light" },
    //       ]}
    //     />
    //   ),
    // },
  ];
  const paragraphData = [
    t("SalesPos5-span1"),
    t("SalesPos5-span2"),
    t("SalesPos5-span3"),
    //t("SalesPos5-span4"),
   // t("SalesPos5-span5"),
  ];
  const paragraphStyle = [
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
  ];
  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="container">
      <div className="w-full text-center mb-5">
            <HeadingWidget style={"text-2xl !mb-8   md:text-3xl font-semibold"} head={t("SalesPos5-head")}/>
            <div className="sm:w-3/4 m-auto mb-10"><Paragraph spans={paragraphData} style={paragraphStyle}/></div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <UlWithBoltBlock ul={WidgetSection4} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
          </div>
      </div>
    </section>
  );
};

export default SalesPosSection4;


