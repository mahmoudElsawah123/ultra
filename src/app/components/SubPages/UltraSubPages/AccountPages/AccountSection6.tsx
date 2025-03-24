"use client"
import { HeadingWidget, Paragraph, UlWithBoltBlock } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Accounting managment/sec7.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const AccountSection6 = () => {
     const locale = useLocale()
    const t = useTranslations("accountPage")
  const WidgetSection6 = [
    {
      ulHead:t("AccountModule7-ul-head1"),
      ulP:t("AccountModule7-ul-p1")
    },
    {
      ulHead:t("AccountModule7-ul-head2"),
      ulP:t("AccountModule7-ul-p2")
    },
    {
      ulHead:t("AccountModule7-ul-head3"),
      ulP:t("AccountModule7-ul-p3")
    },
    {
      ulHead:t("AccountModule7-ul-head4"),
      ulP:t("AccountModule7-ul-p4")
    }
  ]
  const WidgetSection6Two = [
    {
      ulHead:t("AccountModule7-ul2-head1"),
      ulP:t("AccountModule7-ul2-p1")
    },
    {
      ulHead:t("AccountModule7-ul2-head2"),
      ulP:t("AccountModule7-ul2-p2")
    },
    {
      ulHead:t("AccountModule7-ul2-head3"),
      ulP:t("AccountModule7-ul2-p3")
    },
    {
      ulHead:t("AccountModule7-ul2-head4"),
      ulP:t("AccountModule7-ul2-p4")
    },
    {
      ulHead:t("AccountModule7-ul2-head5"),
      ulP:t("AccountModule7-ul2-p5")
    },
    {
      ulHead:t("AccountModule7-ul2-head6"),
      ulP:t("AccountModule7-ul2-p6")
    },
    {
      ulHead:t("AccountModule7-ul2-head7"),
      ulP:t("AccountModule7-ul2-p7")
    },
  ]
  const paragraphData = [
    t("AccountModule7-span2"),
    t("AccountModule7-span3"),
  ];
  const paragraphStyle = [
    { color: "text-custom-black leading-[170%]", fontWeight: "font-light" },
    { color: "text-custom-black leading-[170%]", fontWeight: "font-light" },
  ];
  return (
    <section className="py-24 bg-[#F7FBFF]">
    <div className=" container">
        <div className="mb-5  w-full text-center">
          <HeadingWidget head={t("AccountModule7-head1")} style={"mb-8 text-2xl md:text-3xl font-semibold"} />
          <div className="w-full lg:w-3/4 m-auto mb-10"><Paragraph spans={paragraphData} style={paragraphStyle}/></div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between ">
        <div className={`${locale === "ar" ? "lg:pl-8" :"lg:pr-8" } w-full lg:w-[52%]`}>
        <div className="mb-5">
          <HeadingWidget head={t("AccountModule7-head2")} style={"mb-8 text-xl md:text-2xl font-semibold"} />
          <UlWithBoltBlock ul={WidgetSection6} />
        </div>
      </div>
      <div className=" lg:w-[48%] relative max-md:mb-10 max-lg:mb-16  max-md:h-[270px]  h-[357px]">
            <Image fill className="rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
    </div>
  </section>
  )
}

export default AccountSection6