"use client"
import { HeadingWidget, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/subPages/sub2.png"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const AccountSection8 = () => {
     const locale = useLocale()
       const t = useTranslations("accountPage")
    const WidgetSection9 = [
      {
        ulHead:t("AccountModule9-ul-head1"),
        ulP:t("AccountModule9-ul-p1")
      },
      {
        ulHead:t("AccountModule9-ul-head2"),
        ulP:t("AccountModule9-ul-p2")
      },
      {
        ulHead:t("AccountModule9-ul-head3"),
        ulP:""
      },
      {
        ulHead:t("AccountModule9-ul-head4"),
        ulP:t("AccountModule9-ul-p4")
      }
    ]
  return (
    <section className="py-24 bg-[#F7FBFF]">
        <div className="flex flex-col-reverse lg:flex-row container items-center justify-between ">
            <div className={`${locale === "ar" ? "lg:pl-8" :"lg:pr-8" } w-full lg:w-[52%]`}>
                <HeadingWidget head={t("AccountModule9-head")} style={"mb-8 text-2xl md:text-3xl font-semibold"} />
                <UlWithBoltInline ul={WidgetSection9} />
            </div>
            <div className=" lg:w-[48%] relative max-md:mb-10 max-lg:mb-16  max-md:h-[270px]  h-[357px]">
            <Image fill className="rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
    </section>
  )
}

export default AccountSection8