"use client"
import { HeadingWidget, Paragraph, UlWithNumber } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Payments/sec1.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const RecordsSection1 = () => {
     const locale = useLocale()
    const t = useTranslations("RecordsAndSecuritiesPage")
    const ul =[
      {
        ulHead:t("RecordsAndSecurities2-ul-li1-head"),
        ulP:t("RecordsAndSecurities2-ul-li1-p")
      },
      {
        ulHead:t("RecordsAndSecurities2-ul-li2-head"),
        ulP:t("RecordsAndSecurities2-ul-li2-p")
      },
      {
        ulHead:t("RecordsAndSecurities2-ul-li3-head"),
        ulP:t("RecordsAndSecurities2-ul-li3-p")
      },
      {
        ulHead:t("RecordsAndSecurities2-ul-li4-head"),
        ulP:t("RecordsAndSecurities2-ul-li4-p")
      },
      {
        ulHead:t("RecordsAndSecurities2-ul-li5-head"),
        ulP:t("RecordsAndSecurities2-ul-li5-p")
      },
    ]
    const paragraphData = [
      t("RecordsAndSecurities2-span1"),
      t("RecordsAndSecurities2-span2"),
      t("RecordsAndSecurities2-span3"),
    ];
    const paragraphStyle = [
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
    ];
  return (
    <section className="container  py-24">
        <div className="mb-5 w-full text-center">
          <HeadingWidget head={t("RecordsAndSecurities2-head")} style={"text-2xl mb-8  md:text-3xl font-semibold "} />
          <div className="w-3/4 m-auto mb-10"><Paragraph spans={paragraphData} style={paragraphStyle}/></div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between ">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
        <div>
          <HeadingWidget head={t("RecordsAndSecurities2-ul-head")} style={"text-xl md:text-2xl font-semibold "} />
          <UlWithNumber ul={ul} />
        </div>
      </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
    </section>
  )
}

export default RecordsSection1