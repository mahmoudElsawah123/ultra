"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Branches managemnet/sec2.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const ManagementSection2 = () => {
     const locale = useLocale()
  const t = useTranslations("ManagementAndLinkingPage")
  const Widget3Ul = [
    {
      ulHead:t("ManagementAndLinking3-ul-li1-head"),
      ulP:(
        <Paragraph
          spans={[
            t("ManagementAndLinking3-ul-li1-span1"),
            t("ManagementAndLinking3-ul-li1-span2"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    {
      ulHead:t("ManagementAndLinking3-ul-li2-head"),
      ulP:t("ManagementAndLinking3-ul-li2-p")
    },
    {
      ulHead:t("ManagementAndLinking3-ul-li3-head"),
      ulP:(
        <Paragraph
          spans={[
            t("ManagementAndLinking3-ul-li3-span1"),
            t("ManagementAndLinking3-ul-li3-span2"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    {
      ulHead:t("ManagementAndLinking3-ul-li4-head"),
      ulP:t("ManagementAndLinking3-ul-li4-p")
    },
    // {
    //   ulHead:t("ManagementAndLinking3-ul-li5-head"),
    //   ulP:t("ManagementAndLinking3-ul-li5-p")
    // },
    {
      ulHead:t("ManagementAndLinking3-ul-li6-head"),
      ulP:t("ManagementAndLinking3-ul-li6-p")
    }
  ]
  return (
    <section className="py-24 bg-[#F7FBFF]">
      <div className=" container">
        <HeadingWidget head={t("ManagementAndLinking3-head")} style={"text-center !mb-12  text-2xl md:text-3xl font-semibold"} />
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between ">
        <div className={`${locale === "ar" ? "pl-8" :"pr-8" } lg:w-[52%]`}>
          <UlWithBoltInline ul={Widget3Ul} />
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManagementSection2



