"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Accounting managment/sec3.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const AccountSection2 = () => {
   const locale = useLocale()
  const t = useTranslations("accountPage")
  const Widget3Ul = [
    {
      ulHead:t("AccountModule3-ul-li2-head"),
      ulP:t("AccountModule3-ul-li2-p")
    },
    {
      ulHead:t("AccountModule3-ul-li3-head"),
      ulP:t("AccountModule3-ul-li2-p")
    },
    {
      ulHead:t("AccountModule3-ul-li4-head"),
      ulP:t("AccountModule3-ul-li4-p")
    },
    {
      ulHead:t("AccountModule3-ul-li5-head"),
      ulP:t("AccountModule3-ul-li5-p")
    }
  ]
  const paragraphData = [
    t("AccountModule3-span1"),
    t("AccountModule3-span2"),
    t("AccountModule3-span3"),
  ];
  const paragraphStyle = [
    { color: "text-custom-black leading-[170%]", fontWeight: "font-light" },
    { color: "text-custom-black leading-[170%]", fontWeight: "font-light" },
    { color: "text-custom-black leading-[170%]", fontWeight: "font-light" },
  ];
  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className="container">
        <HeadingWidget head={t("AccountModule3-head")} style={"!mb-12  text-center text-2xl md:text-3xl font-semibold"} />
        <div className="flex flex-col-reverse lg:flex-row  items-center justify-between">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <div className="mb-5">
            <HeadingWidget head={t("AccountModule3-secHead")} style={"text-xl mb-8 md:text-2xl font-semibold"} />
            <Paragraph  spans={paragraphData} style={paragraphStyle}/>
          </div>
          <UlWithBoltInline ul={Widget3Ul} />
        </div>
        <div className=" lg:w-[48%] relative max-md:mb-10 max-lg:mb-16  max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountSection2