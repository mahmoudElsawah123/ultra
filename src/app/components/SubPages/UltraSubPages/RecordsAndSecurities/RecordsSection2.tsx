"use client"
import { HeadingWidget, UlWithBoltInline, UlWithNumber } from "../../../Widget"

const imgs = "/assets/Ultrasoft/Payments/sec2.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const RecordsSection2 = () => {
     const locale = useLocale()
 const t = useTranslations("RecordsAndSecuritiesPage")
  const Widget3Ul = [
    {
      ulHead:t("RecordsAndSecurities3-ul2-li1-head"),
      ulP:t("RecordsAndSecurities3-ul2-li1-p")
    },
    {
      ulHead:t("RecordsAndSecurities3-ul2-li2-head"),
      ulP:t("RecordsAndSecurities3-ul2-li2-p")
    },
    {
      ulHead:t("RecordsAndSecurities3-ul2-li3-head"),
      ulP:t("RecordsAndSecurities3-ul2-li3-p")
    },
    {
      ulHead:t("RecordsAndSecurities3-ul2-li4-head"),
      ulP:t("RecordsAndSecurities3-ul2-li4-p")
    },
    {
      ulHead:t("RecordsAndSecurities3-ul2-li5-head"),
      ulP:t("RecordsAndSecurities3-ul2-li5-p")
    },
  ]
  const Widget3Ul2 = [
    {
      ulHead:t("RecordsAndSecurities3-ul-li1-head"),
      ulP:t("RecordsAndSecurities3-ul-li1-p")
    },
    {
      ulHead:t("RecordsAndSecurities3-ul-li2-head"),
      ulP:t("RecordsAndSecurities3-ul-li2-p")
    },
    {
      ulHead:t("RecordsAndSecurities3-ul-li3-head"),
      ulP:t("RecordsAndSecurities3-ul-li3-p")
    },
    {
      ulHead:t("RecordsAndSecurities3-ul-li4-head"),
      ulP:t("RecordsAndSecurities3-ul-li4-p")
    },
    {
      ulHead:t("RecordsAndSecurities3-ul-li5-head"),
      ulP:t("RecordsAndSecurities3-ul-li5-p")
    },
  ]

  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="container  ">
        <HeadingWidget head={t("RecordsAndSecurities3-head")} style={"text-center  !mb-12 text-2xl md:text-3xl font-semibold"} />
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <div className="mb-5">
            <UlWithBoltInline ul={Widget3Ul2} />
          </div>
          {/* <div>
            <HeadingWidget head={t("AccountModule3-secHead")} style={"text-xl md:text-2xl font-semibold"} />
            <UlWithNumber ul={Widget3Ul} />
          </div> */}
        </div>
           <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
                 <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
               </div>
        </div>
      </div>
    </section>
  )
}

export default RecordsSection2

