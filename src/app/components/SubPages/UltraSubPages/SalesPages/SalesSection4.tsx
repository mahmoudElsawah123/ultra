"use client"
import { HeadingWidget, UlWithBoltBlock } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Sales Management/sec4.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const SalesSection4 = () => {
     const locale = useLocale()
       const t = useTranslations("SalesPage")
    const WidgetSection4 = [
      {
        ulHead: t("Sales5-ul-head1"),
        ulP: t("Sales5-ul-p1")
      },
      {
        ulHead: t("Sales5-ul-head2"),
        ulP: t("Sales5-ul-p2")
      },
      {
        ulHead: t("Sales5-ul-head3"),
        ulP: t("Sales5-ul-p3")
      },
      {
        ulHead: t("Sales5-ul-head4"),
        ulP: t("Sales5-ul-p4")
      },
      {
        ulHead: t("Sales5-ul-head5"),
        ulP: t("Sales5-ul-p5")
      },
      // {
      //   ulHead: t("Sales5-ul-head6"),
      //   ulP: t("Sales5-ul-p6")
      // },

    ];
  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="flex flex-col-reverse lg:flex-row container items-center justify-between ">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <HeadingWidget style={"text-2xl md:text-3xl font-semibold"} head={t("Sales5-head")} />
          <UlWithBoltBlock ul={WidgetSection4} />
        </div>
            <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
                  <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
                </div>
      </div>
</section>
  )
}

export default SalesSection4