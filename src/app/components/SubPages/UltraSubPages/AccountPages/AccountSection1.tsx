"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline, UlWithNumber } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Accounting managment/Sec2.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const AccountSection1 = () => {
   const locale = useLocale()
    const t = useTranslations("accountPage")
    const ul =[
      {
        ulHead:t("AccountModule2-ul-h1"),
        ulP:t("AccountModule2-ul-p1")
      },
      {
        ulHead:t("AccountModule2-ul-h2"),
        ulP:t("AccountModule2-ul-p2")
      }
    ]
    const Widget2SecUl = [
      {
        ulHead:"",
        ulP:t("AccountModule2-ul2-p1")
      },
      {
        ulHead:"",
        ulP:t("AccountModule2-ul2-p2")
      },
      {
        ulHead:"",
        ulP:t("AccountModule2-ul2-p3")
      },
    ]
    const paragraphData = [
      t("AccountModule2-span1"),
      t("AccountModule2-span2"),
      t("AccountModule3-span3"),
    ];
    const paragraphStyle = [
      { color: "text-custom-black leading-[170%]", fontWeight: "font-light" },
      { color: "text-custom-black leading-[170%]", fontWeight: "font-light" },
      { color: "text-custom-black leading-[170%]", fontWeight: "font-light" },
    ];
  return (
    <section className=" container  py-24">
        <div className="mb-5 w-full text-center ">
          <HeadingWidget head={t("AccountModule2-head")} style={"text-2xl md:text-3xl font-semibold  "} />
          <div className="sm:w-3/4 m-auto mb-10"><Paragraph spans={paragraphData} style={paragraphStyle}/></div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
            <div className="mb-8">
              <HeadingWidget head={t("AccountModule2-head2")} style={"mb-8 text-xl md:text-2xl font-semibold"} />
              <UlWithNumber ul={ul} />
            </div>
            <div className="">
              <HeadingWidget head={t("AccountModule2-head3")} style={"mb-8 text-xl  md:text-2xl font-semibold"} />
              <UlWithBoltInline ul={Widget2SecUl} />
            </div>
          </div>
          <div className=" lg:w-[48%] relative max-md:mb-10 max-lg:mb-16  max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
    </section>
  )
}

export default AccountSection1