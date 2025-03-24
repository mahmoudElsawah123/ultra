"use client"
import { UlWithBoltBlock } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Sales Management/sec3.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const SalesSection3 = () => {
     const locale = useLocale()
        const t = useTranslations("SalesPage")
    const WidgetSection3 = [
      {
        ulHead: t("Sales4-ul-head1"),
        ulP: t("Sales4-ul-p1")
      },
      {
        ulHead: t("Sales4-ul-head2"),
        ulP: t("Sales4-ul-p2")
      },
      {
        ulHead: t("Sales4-ul-head3"),
        ulP: t("Sales4-ul-p3")
      },
    ];
  return (
    <section className=" py-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse container items-center justify-between">
        <div className={`${locale === "ar" ? "pr-12" :"pl-12" } lg:w-[52%]`}>
          <UlWithBoltBlock ul={WidgetSection3} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
</section>
  )
}

export default SalesSection3