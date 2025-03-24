"use client"
import { ServicesSectionData } from "@/app/utils/dummy";
import Heading from "../Heading";
import { useTranslations } from "next-intl";
import Link from "next/link";



const Services = () => {
      const t = useTranslations("homePage")
  return (
    <section className="py-[96px] ">
    <div className="container">
      <div className="text-center mb-12 lg:mb-0">
        <Heading head={t("services-head")} p={t("services-p")} style={""} />
      </div>
      <div className="flex flex-wrap gap-6">
        {ServicesSectionData.map((ele, ind) => (
          <div key={ind} className="box w-full mt-5 sm:mt-0 sm:w-[47.5%] md:w-[48%] lg:w-[31.58%] xl:w-[31.97%]">
            <div className="rounded-[6px]  bg-white h-auto" style={{boxShadow: "0px 0px 15px 0px rgba(43, 39, 105, 0.03), 0px 2px 30px 0px rgba(43, 39, 105, 0.04), 0px 0px 1px 0px rgba(43, 39, 105, 0.20)"}}>
              <div className="mb-3 p-2">
                  <img src={ele.img} className="h-[158px] w-full" alt="" />
              </div>
              <div className="info px-6 pb-4">
                <h2 className=" text-custom-black mb-3 text-xl leading-[120%] font-medium">{t(ele.headKey)}</h2>
                <p className=" text-[#62626D] mb-[13.5px] leading-[150%] text-lg font-light">{t(ele.pKey)}</p>
                <Link href={ele.url} className="hidden  gap-2 items-center text-seeMore-green text-base leading-[131%] font-normal">
                  {t(ele.btnKey)} <span className="translate-y-[2px] "><ele.btnIcon /></span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>
  )
}

export default Services