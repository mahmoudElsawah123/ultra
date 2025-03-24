"use client"
import { HeadingWidget, UlWithBoltBlock } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Accounting managment/sec8.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const AccountSection7 = () => {
     const locale = useLocale()
    const t = useTranslations("accountPage")

    const WidgetSection7 = [
      {
        ulHead:t("AccountModule8-ul-head1"),
        ulP:t("AccountModule8-ul-p1")
      },
      {
        ulHead:t("AccountModule8-ul-head2"),
        ulP:t("AccountModule8-ul-p2")
      },
      {
        ulHead:t("AccountModule8-ul-head3"),
        ulP:t("AccountModule8-ul-p3")
      },
      {
        ulHead:t("AccountModule8-ul-head4"),
        ulP:t("AccountModule8-ul-p4")
      },
      {
        ulHead:t("AccountModule8-ul-head5"),
        ulP:t("AccountModule8-ul-p5")
      },
      {
        ulHead:t("AccountModule8-ul-head6"),
        ulP:t("AccountModule8-ul-p6")
      },
      {
        ulHead:t("AccountModule8-ul-head7"),
        ulP:t("AccountModule8-ul-p7")
      },
      {
        ulHead:t("AccountModule8-ul-head8"),
        ulP:t("AccountModule8-ul-p8")
      },


    ]
  return (
    <section className="py-24">
    <div className="flex flex-col-reverse  lg:flex-row-reverse container items-center justify-between ">
      <div className={`${locale === "ar" ? "lg:pr-12" :"lg:pl-12" } w-full lg:w-[52%]`}>
        <HeadingWidget head={t("AccountModule8-head")} style={"mb-8 text-2xl md:text-3xl font-semibold"} />
        <UlWithBoltBlock ul={WidgetSection7} />
      </div>
      <div className=" lg:w-[48%] relative max-md:mb-10 max-lg:mb-16  max-md:h-[270px]  h-[357px]">
            <Image fill className="  h-[357px] rounded-[12px]" src={imgs} alt=""/>
          </div>
    </div>
  </section>
  )
}

export default AccountSection7