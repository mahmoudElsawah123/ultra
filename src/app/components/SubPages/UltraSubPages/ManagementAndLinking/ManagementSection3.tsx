"use client"
import { HeadingWidget, Paragraph, UlWithBoltInline } from "../../../Widget"
const imgs = "/assets/Ultrasoft/Branches managemnet/sec3.jpg"
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const ManagementSection3 = () => {
     const locale = useLocale()
  const t = useTranslations("ManagementAndLinkingPage")
  const Widget4Ul = [
    {
      ulHead:t("ManagementAndLinking4-ul-li1-head"),
      ulP:t("ManagementAndLinking4-ul-li1-p")
    },
    {
      ulHead:t("ManagementAndLinking4-ul-li2-head"),
      ulP:t("ManagementAndLinking4-ul-li2-p")
    },
    {
      ulHead:t("ManagementAndLinking4-ul-li3-head"),
      ulP:t("ManagementAndLinking4-ul-li3-p")
    },
    {
      ulHead:t("ManagementAndLinking4-ul-li2-head"),
      ulP:t("ManagementAndLinking4-ul-li2-p")
    },
    {
      ulHead:t("ManagementAndLinking4-ul-li3-head"),
      ulP:t("ManagementAndLinking4-ul-li3-p")
    },
  ]
  const Widget4Ul2 = [
    {
      ulHead:null,
      ulP:(
        <Paragraph
          spans={[
            t("ManagementAndLinking4-ul2-li1-span1"),
            t("ManagementAndLinking4-ul2-li1-span2"),
            t("ManagementAndLinking4-ul2-li1-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    {
      ulHead:null,
      ulP:(
        <Paragraph
          spans={[
            t("ManagementAndLinking4-ul2-li2-span1"),
            t("ManagementAndLinking4-ul2-li2-span2"),
            t("ManagementAndLinking4-ul2-li2-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    {
      ulHead:null,
      ulP:(
        <Paragraph
          spans={[
            t("ManagementAndLinking4-ul2-li3-span1"),
            t("ManagementAndLinking4-ul2-li3-span2"),
            t("ManagementAndLinking4-ul2-li3-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },
    {
      ulHead:null,
      ulP:(
        <Paragraph
          spans={[
            t("ManagementAndLinking4-ul2-li4-span1"),
            t("ManagementAndLinking4-ul2-li4-span2"),
            t("ManagementAndLinking4-ul2-li4-span3"),
          ]}
          style={[
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
            { color: "text-custom-black", fontWeight: "font-light" },
          ]}
        />
      ),
    },

  ]

  return (
    <section className="py-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse container items-center justify-between ">
        <div className={`${locale === "ar" ? "pr-12" :"pl-12" } lg:w-[52%]`}>
          {/* <div className="mb-5">
            <HeadingWidget head={t("ManagementAndLinking4-head")} style={"text-2xl md:text-3xl font-semibold"} />
            <UlWithBoltInline ul={Widget4Ul} />
          </div> */}
          <div>
            <HeadingWidget head={t("ManagementAndLinking4-head2")} style={"text-xl md:text-2xl font-semibold"} />
            <UlWithBoltInline ul={Widget4Ul2} />
          </div>
        </div>
      <div className=" lg:w-[48%] max-md:mb-10 max-lg:mb-16 relative w-full max-md:h-[270px]  h-[357px]">
            <Image fill className=" rounded-[12px]" src={imgs} alt=""/>
          </div>
      </div>
    </section>
  )
}

export default ManagementSection3


