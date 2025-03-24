"use client"
import { HeadingWidget, Paragraph, UlWithBoltBlock } from "../../../Widget";
const imgs = "/assets/Ultrasoft/POS/sec2.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const SalesPosSection2 = () => {
     const locale = useLocale()
   const  t  = useTranslations("SalesPosPage");

  const WidgetSection2 = [
    {
      ulHead: t("SalesPos3-ul-li1-head"),
      ulP: (
        <Paragraph
          spans={[
            t("SalesPos3-ul-li1-span1"),
            t("SalesPos3-ul-li1-span2"),
            t("SalesPos3-ul-li1-span3"),
            t("SalesPos3-ul-li1-span4"),
           // t("SalesPos3-ul-li1-span5"),
            // t("SalesPos3-ul-li1-span6"),
            // t("SalesPos3-ul-li1-span7"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
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
    {
      ulHead: t("SalesPos3-ul-li2-head"),
      ulP: (
        <Paragraph
          spans={[
            t("SalesPos3-ul-li2-span1"),
            t("SalesPos3-ul-li2-span2"),
            t("SalesPos3-ul-li2-span3"),
            t("SalesPos3-ul-li2-span4"),
            t("SalesPos3-ul-li2-span5"),
            // t("SalesPos3-ul-li2-span6"),
            // t("SalesPos3-ul-li2-span7"),
            // t("SalesPos3-ul-li2-span8"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
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
    {
      ulHead: t("SalesPos3-ul-li3-head"),
      ulP: (
        <Paragraph
          spans={[
            t("SalesPos3-ul-li3-span1"),
            t("SalesPos3-ul-li3-span2"),
            t("SalesPos3-ul-li3-span3"),
            t("SalesPos3-ul-li3-span4"),
            // t("SalesPos3-ul-li3-span5"),
            // t("SalesPos3-ul-li3-span6"),
 
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
    {
      ulHead: t("SalesPos3-ul-li4-head"),
      ulP: (
        <Paragraph
          spans={[
            t("SalesPos3-ul-li4-span1"),
            t("SalesPos3-ul-li4-span2"),
            // t("SalesPos3-ul-li4-span3"),
            // t("SalesPos3-ul-li4-span4"),

          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },

  ];
  const paragraphData = [
    ""
    // t("SalesPos3-span1"),
    // t("SalesPos3-span2"),
    // t("SalesPos3-span3"),
    // t("SalesPos3-span4"),
    // t("SalesPos3-span5"),

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
      <div className=" container ">
        <HeadingWidget style={"text-center !mb-12  text-2xl md:text-3xl font-semibold"} head={t("SalesPos3-head")}/>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <div className="mb-5">
            <HeadingWidget style={"text-xl md:text-2xl font-semibold"} head={t("SalesPos3-secHead")}/>
            <Paragraph spans={paragraphData} style={paragraphStyle}/>
          </div>
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

export default SalesPosSection2;

