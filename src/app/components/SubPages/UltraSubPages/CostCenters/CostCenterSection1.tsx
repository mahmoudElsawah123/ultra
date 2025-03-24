"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Cost center/sec1.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const CostCenterSection1 = () => {
     const locale = useLocale()
    const t = useTranslations("costCentersPage")
    const ul =[
      {
        ulHead:t("costCenters2-ul-li1-head"),
        ulP:""//t("costCenters2-ul-li1-p")
      },
      {
        ulHead:t("costCenters2-ul-li2-head"),
        ulP:""//t("costCenters2-ul-li2-p")
      },
      {
        ulHead:t("costCenters2-ul-li3-head"),
        ulP:""//t("costCenters2-ul-li3-p")
      },
      {
        ulHead:t("costCenters2-ul-li4-head"),
        ulP:""//t("costCenters2-ul-li4-p")
      },
      {
        ulHead:t("costCenters2-ul-li5-head"),
        ulP:""//t("costCenters2-ul-li5-p")
      },
    ]
    const paragraphData = [
      t("costCenters2-span1"),
      t("costCenters2-span2"),
    ];
    const paragraphStyle = [
      { color: "text-custom-black", fontWeight: "font-light" },
      { color: "text-custom-black", fontWeight: "font-light" },
    ];
  return (
    <section className=" container py-24">
        <div className="mb-5 text-center w-full">
          <HeadingWidget head={t("costCenters2-head")} style={"text-2xl md:text-3xl font-semibold"} />
          <div className="m-auto mb-10 lg:w-3/4"><Paragraph spans={paragraphData} style={paragraphStyle}/></div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className={`${locale === "ar" ? "lg:pl-8" :"lg:pr-8" } w-full lg:w-[52%]`}>
        <div>
          <HeadingWidget head={t("costCenters2-head2")} style={"mb-8 text-xl md:text-2xl font-semibold "} />
          <UlWithBoltInline ul={ul} />
        </div>
      </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
    </section>
  )
}

export default CostCenterSection1


