"use client"
import { HeadingWidget, UlWithBoltBlock } from "../../../Widget"

const imgs = "/assets/Ultrasoft/Accounting managment/sec5.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const AccountSection4 = () => {
   const locale = useLocale()
  const t = useTranslations("accountPage")
  const WidgetSection4 = [
    {
      ulHead:t("AccountModule5-ul-head1"),
      ulP:t("AccountModule5-ul-p1")
    },
    {
      ulHead:t("AccountModule5-ul-head2"),
      ulP:t("AccountModule5-ul-p2")
    },
    {
      ulHead:t("AccountModule5-ul-head3"),
      ulP:t("AccountModule5-ul-p3")
    },
    {
      ulHead:t("AccountModule5-ul-head4"),
      ulP:t("AccountModule5-ul-p4")
    },
    {
      ulHead:t("AccountModule5-ul-head5"),
      ulP:t("AccountModule5-ul-p5")
    }
  ]
  return (
    <section className="py-24 bg-[#F7FBFF]">
    <div className="flex flex-col-reverse lg:flex-row container items-center justify-between ">
      <div className={`${locale === "ar" ? "pl-8" :"pr-8" } w-full lg:w-[52%]`}>
        <HeadingWidget head={t("AccountModule5-head")} style={"text-2xl mb-5 md:text-3xl font-semibold"} />
        <UlWithBoltBlock ul={WidgetSection4} />
      </div>
      <div className=" lg:w-[48%] relative max-md:mb-10 max-lg:mb-16  max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
    </div>
  </section>
  )
}

export default AccountSection4