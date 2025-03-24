"use client"
import { HeadingWidget, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Branches managemnet/sec1.jpg"

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
const ManagementSection1 = () => {
     const locale = useLocale()
   const t = useTranslations("ManagementAndLinkingPage")
    const ul =[
      {
        ulHead:t("ManagementAndLinking2-ul-li1-head"),
        ulP:t("ManagementAndLinking2-ul-li1-p")
      },
      {
        ulHead:t("ManagementAndLinking2-ul-li2-head"),
        ulP:t("ManagementAndLinking2-ul-li2-p")
      },
      {
        ulHead:t("ManagementAndLinking2-ul-li3-head"),
        ulP:t("ManagementAndLinking2-ul-li3-p")
      },
      {
        ulHead:t("ManagementAndLinking2-ul-li4-head"),
        ulP:t("ManagementAndLinking2-ul-li4-p")
      },
      {
        ulHead:t("ManagementAndLinking2-ul-li5-head"),
        ulP:t("ManagementAndLinking2-ul-li5-p")
      },
    ]
  return (
    <section className=" container py-24">
        <HeadingWidget head={t("ManagementAndLinking2-head")} style={"text-2xl !mb-12  text-center md:text-3xl font-semibold "} />
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

export default ManagementSection1



