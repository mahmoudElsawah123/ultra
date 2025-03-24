"use client"
import { HeadingWidget, UlWithBoltInline, UlWithNumber } from "../../../Widget"

const imgs = "/assets/Ultrasoft/Cost center/sec2.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const CostCenterSection2 = () => {
     const locale = useLocale()
const t = useTranslations("costCentersPage")
  const Widget3Ul = [
    {
      ulHead:t("costCenters3-ul-li1-head"),
      ulP:t("costCenters3-ul-li1-p")
    },
    {
      ulHead:t("costCenters3-ul-li2-head"),
      ulP:t("costCenters3-ul-li2-p")
    },
    {
      ulHead:t("costCenters3-ul-li3-head"),
      ulP:t("costCenters3-ul-li3-p")
    },
    {
      ulHead:t("costCenters3-ul-li4-head"),
      ulP:t("costCenters3-ul-li4-p")
    }
  ]
  const Widget3Ul2 = [
    {
      ulHead:t("costCenters3-ul2-li1-head"),
      ulP:t("costCenters3-ul2-li1-p")
    },
    {
      ulHead:t("costCenters3-ul2-li2-head"),
      ulP:t("costCenters3-ul2-li2-p")
    },
    {
      ulHead:t("costCenters3-ul2-li3-head"),
      ulP:t("costCenters3-ul2-li3-p")
    },
  ]


  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="container">
      <HeadingWidget head={t("costCenters3-head")} style={"text-2xl text-center !mb-10 md:text-3xl font-semibold"} />
      <div className="flex flex-col-reverse lg:flex-row  items-center justify-between">
      <div className={`${locale === "ar" ? "lg:pl-8" :"lg:pr-8" } w-full lg:w-[52%]`}>
          <div className="mb-5">
            <UlWithBoltInline ul={Widget3Ul} />
          </div>
          {/* <div>
            <HeadingWidget head={t("costCenters3-head2")} style={"mb-8 text-xl md:text-2xl font-semibold"} />
            <UlWithNumber ul={Widget3Ul2} />
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

export default CostCenterSection2


