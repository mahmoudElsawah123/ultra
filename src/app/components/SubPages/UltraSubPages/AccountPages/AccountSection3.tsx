"use client"
import { HeadingWidget, UlWithBoltBlock } from "../../../Widget"

const imgs = "/assets/Ultrasoft/Accounting managment/sec4.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const AccountSection3 = () => {
   const locale = useLocale()
  const t = useTranslations("accountPage")
  const WidgetSection3 = [
    {
      ulHead:t("AccountModule4-ul-head1"),
      ulP:t("AccountModule4-ul-p1")
    },
    {
      ulHead:t("AccountModule4-ul-head2"),
      ulP:t("AccountModule4-ul-p2")
    },
    {
      ulHead:t("AccountModule4-ul-head3"),
      ulP:t("AccountModule4-ul-p3")
    }
  ]

  return (
    <section className="py-24">
    <div className="flex flex-col-reverse lg:flex-row-reverse container items-center justify-between ">
      <div className={`${locale === "ar" ? "pr-8" :"pl-8" } w-full lg:w-[52%]`}>
        <HeadingWidget head={t("AccountModule4-head")} style={"text-2xl mb-5 md:text-3xl font-semibold"} />
        <UlWithBoltBlock ul={WidgetSection3} />
      </div>
      <div className=" lg:w-[48%] relative max-md:mb-10 max-lg:mb-16  max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
    </div>
  </section>
  )
}

export default AccountSection3