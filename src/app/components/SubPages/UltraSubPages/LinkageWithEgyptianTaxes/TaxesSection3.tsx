"use client"
import { HeadingWidget, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/E invoice/sec2.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const TaxesSection3 = () => {
     const locale = useLocale()
    const t = useTranslations("LinkageWithEgyptianTaxesPage")
  const Widget4Ul = [
    {
      ulHead:t("LinkageWithEgyptianTaxes3-ul-li1-head"),
      ulP:t("LinkageWithEgyptianTaxes3-ul-li1-p")
    },
    {
      ulHead:t("LinkageWithEgyptianTaxes3-ul-li2-head"),
      ulP:t("LinkageWithEgyptianTaxes3-ul-li2-p")
    },
    {
      ulHead:t("LinkageWithEgyptianTaxes3-ul-li3-head"),
      ulP:t("LinkageWithEgyptianTaxes3-ul-li3-p")
    },
    {
      ulHead:t("LinkageWithEgyptianTaxes3-ul-li4-head"),
      ulP:t("LinkageWithEgyptianTaxes3-ul-li4-p")
    },

  ]
  const Widget4Ul2 = [
    {
      ulHead:null,
      ulP:t("LinkageWithEgyptianTaxes3-ul2-li1-p")
    },
    {
      ulHead:null,
      ulP:t("LinkageWithEgyptianTaxes3-ul2-li2-p")
    },
    {
      ulHead:null,
      ulP:t("LinkageWithEgyptianTaxes3-ul2-li3-p")
    },
    {
      ulHead:null,
      ulP:t("LinkageWithEgyptianTaxes3-ul2-li4-p")
    },
    {
      ulHead:null,
      ulP:t("LinkageWithEgyptianTaxes3-ul2-li5-p")
    },


  ]
  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="flex flex-col-reverse lg:flex-row container items-center justify-between ">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          {/* <div>
            <HeadingWidget head={t("LinkageWithEgyptianTaxes3-head")} style={"text-2xl md:text-3xl font-semibold"} />
            <UlWithBoltInline ul={Widget4Ul} />
          </div> */}
          <div className="mt-8">
            <HeadingWidget head={t("LinkageWithEgyptianTaxes3-head2")} style={"text-xl md:text-2xl font-semibold"} />
            <UlWithBoltInline ul={Widget4Ul2} />
          </div>
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  )
}

export default TaxesSection3


