"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline } from "../../../Widget"

const imgs = "/assets/Ultrasoft/Payments/sec3.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const RecordsSection3 = () => {
     const locale = useLocale()
 const t = useTranslations("RecordsAndSecuritiesPage")
  const Widget4Ul = [
    {
      ulHead:t("RecordsAndSecurities4-ul-li1-head"),
      ulP:t("RecordsAndSecurities4-ul-li1-p")
    },
    {
      ulHead:t("RecordsAndSecurities4-ul-li2-head"),
      ulP:t("RecordsAndSecurities4-ul-li2-p")
    },
    {
      ulHead:t("RecordsAndSecurities4-ul-li3-head"),
      ulP:t("RecordsAndSecurities4-ul-li3-p")
    },

  ]
  const paragraphData = [
    t("RecordsAndSecurities4-span1"),
    t("RecordsAndSecurities4-span2"),
    t("RecordsAndSecurities4-span3"),
    t("RecordsAndSecurities4-span4"),
    t("RecordsAndSecurities4-span5"),
  ];
  const paragraphStyle = [
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
    { color: "text-custom-black", fontWeight: "font-light" },
  ];
  return (
    <section className="py-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse container items-center justify-between ">
        <div className={`${locale === "ar" ? "pr-12" :"pl-12" } lg:w-[52%]`}>
          <div className="mb-5">
            <HeadingWidget head={t("RecordsAndSecurities4-head")} style={"text-2xl md:text-3xl font-semibold"} />
            <UlWithBoltInline ul={Widget4Ul} />
          </div>
          {/* <div>
            <HeadingWidget head={t("RecordsAndSecurities4-head2")} style={"text-xl md:text-2xl font-semibold"} />
            <Paragraph  spans={paragraphData} style={paragraphStyle}/>
          </div> */}
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  )
}

export default RecordsSection3
