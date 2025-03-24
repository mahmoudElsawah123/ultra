import { UltraSectionData } from "../utils/dummy";
import { useTranslations } from "next-intl";
import Link from "next/link";
export const UltraShard = () => {
 const t  = useTranslations("homePage");
  return (
    <div className="flex flex-wrap gap-6">
    {UltraSectionData.map((ele, ind) => (
      <div
        key={ind}
        className="box w-full mt-5 sm:mt-0  md:w-[48%] lg:w-[31.5%]"
      >
        <div style={{boxShadow: "0px 2px 20px 0px rgba(43, 39, 105, 0.10)"}} className="p-6 rounded-[6px] bg-white h-auto md:h-[250px] flex flex-col">
          <div className="flex justify-center text-custom-icon text-2xl">
            <span className="relative iconAfter mb-[22px]">
              <img src={ele.img} className="relative w-[36px] h-[36px] z-10" alt="" />
            </span>
          </div>
          <h3 className="text-center text-custom-black mb-2 text-lg leading-[120%] font-medium">
            {t(ele.headKey)}
          </h3>

          <p className="text-center text-custom-black mb-4 leading-[170%] text-base font-light flex-grow">
            {t(ele.pKey).length > 200
              ? t(ele.pKey).slice(0, 200) + " . . ."
              : t(ele.pKey)}
          </p>

          <div className="mt-auto">
            <Link
              href={ele.url}
              className="flex justify-center gap-4 items-center text-seeMore-green hover:text-custom-btn"
            >
              {t(ele.btnKey)} <span><ele.btnIcon aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}
