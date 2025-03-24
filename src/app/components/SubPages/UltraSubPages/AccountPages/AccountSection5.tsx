"use client"
import { HeadingWidget, Paragraph, UlWithBoltBlock } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Accounting managment/sec6.jpg"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const AccountSection5 = () => {
   const locale = useLocale()
    const t = useTranslations("accountPage")
  const WidgetSection5 = [
    {
      ulHead:t("AccountModule6-ul-head1"),
      ulP:t("AccountModule6-ul-p1")
    },
    {
      ulHead:t("AccountModule6-ul-head2"),
      ulP:t("AccountModule6-ul-p2")
    },
    {
      ulHead:t("AccountModule6-ul-head3"),
      ulP:t("AccountModule6-ul-p3")
    },
    {
      ulHead:t("AccountModule6-ul-head4"),
      ulP:t("AccountModule6-ul-p4")
    }
  ]
  const paragraphData1 = [
    t("AccountModule6-span2"),
  ];
  const paragraphStyle1 = [
    { color: "text-custom-black leading-[170%]", fontWeight: "font-normal" },
  ];
  const paragraphData2 = [
    t("AccountModule6-p-span2"),

  ];
  const paragraphStyle2 = [
    { color: "text-custom-black leading-[170%]", fontWeight: "font-normal" },
  ];
  return (
    <section className="py-24 ">
    <div className="container">
        <div className="text-center mb-5 w-full">
          <HeadingWidget head={t("AccountModule6-head1")} style={" text-2xl md:text-3xl font-semibold"} />
          <div className="lg:w-3/4 m-auto mb-10"><Paragraph  spans={paragraphData1} style={paragraphStyle1}/>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row-reverse ">
        <div className={`${locale === "ar" ? "lg:pr-12" :"lg:pl-12" } w-full lg:w-[52%]`}>
        <div className="mb-5">
          <HeadingWidget head={t("AccountModule6-head2")} style={"mb-5 text-xl md:text-2xl font-semibold"} />
          <UlWithBoltBlock ul={WidgetSection5} />
        </div>
      </div>
      <div className=" lg:w-[48%] relative  max-md:mb-10 max-lg:mb-16  max-md:h-[270px]  h-[357px]">
            <Image fill className="rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
    </div>
  </section>
  )
}

export default AccountSection5