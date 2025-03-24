"use client"
import { HeadingWidget, UlWithBoltInline, UlWithNumber } from "../../../Widget"
const imgs = "/assets/Ultrasoft/E invoice/sec1.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const TaxesSection1 = () => {
     const locale = useLocale()
    const t = useTranslations("LinkageWithEgyptianTaxesPage")
    const ul =[
      {
        ulHead:t("LinkageWithEgyptianTaxes2-ul-li1-head"),
        ulP:""//t("LinkageWithEgyptianTaxes2-ul-li1-p")
      },
      {
        ulHead:t("LinkageWithEgyptianTaxes2-ul-li2-head"),
        ulP:""//t("LinkageWithEgyptianTaxes2-ul-li2-p")
      },
      {
        ulHead:t("LinkageWithEgyptianTaxes2-ul-li3-head"),
        ulP:""//t("LinkageWithEgyptianTaxes2-ul-li3-p")
      },
      {
        ulHead:t("LinkageWithEgyptianTaxes2-ul-li4-head"),
        ulP:""//t("LinkageWithEgyptianTaxes2-ul-li4-p")
      },
      {
        ulHead:t("LinkageWithEgyptianTaxes2-ul-li5-head"),
        ulP:""//t("LinkageWithEgyptianTaxes2-ul-li5-p")
      },
    ]

  return (
    <section className=" container py-24">
      <HeadingWidget head={t("LinkageWithEgyptianTaxes2-head")} style={"text-2xl text-center  !mb-12 md:text-3xl font-semibold "} />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
        <UlWithBoltInline ul={ul} />
      </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  )
}

export default TaxesSection1


