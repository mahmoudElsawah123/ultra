"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import { UltraSolutionsData } from "@/app/utils/dummy";
const UltraBusinessSolutionsSection4 = () => {
    const t = useTranslations("UltraBusinessSolutionsPage")
return (
    <section className=" py-24 bg-[#F7FBFF] ">
      <div className="container">
        <div className="text-center mb-[55px]">
          <h2 className="text-[34px] border-r  font-semibold mb-4 leading-[120%]">{t("UltraBusinessSolutions5-head")}</h2>
          <p className="text-xl leading-[170%] font-light">{t("UltraBusinessSolutions5-p")}</p>
        </div>
        <div className="flex flex-wrap md:gap-[40px] lg:gap-x-[97px] mt-5">
        {UltraSolutionsData.map((ele,ind)=>(
          <div key={ind} className="box mb-6   UltraSolutionsDataBox">
            <div className="">
              <span className="w-10 h-10 bg-white flex items-center justify-center rounded-[8px] border border-[#E2E8F0;] mb-3">
                <Image width={24} height={24} src={ele.img} className="w-6 h-6" alt="" />
              </span>
              <h3 className="text-base UltraSolutionsDataHead relative  pr-3 font-semibold mb-3 text-custom-black">{t(ele.headKey)}</h3>
              <p className="text-base leading-[131%] font-light text-custom-black">{t(ele.p)}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
)
}

export default UltraBusinessSolutionsSection4
