"use client"
// import i18next, { t } from 'i18next'
import { HiArrowTurnRightDown } from 'react-icons/hi2'
import { MdHomeFilled } from 'react-icons/md'
import { GoArrowDown } from "react-icons/go";
const arrow = "/assets/Contact/arrow.png"
import Link from 'next/link'
import Image, { StaticImageData } from "next/image";
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
interface IFormHeroSection {
   ExploreHeroHead1:string
    ExploreP:String
    HeroHead:String
    ExploreSpan:string
    btnName:string
    img:string | StaticImageData;
}
const FormHeroSection:React.FC<IFormHeroSection> = ({img,btnName,ExploreHeroHead1,ExploreSpan,ExploreP,HeroHead}) => {
   const t = useTranslations("navbarPage");
  const param = useParams()
  const {locale} = param
  return (
    <header className="bg-white mt-[74px]">
     <div className={`  relative max-lg:py-[90px] pb-[90px] pt-[120px]`}>
        <div className="container relative z-10 max-lg:flex-col flex justify-between">
          <div className="py-[30px] lg:w-[55%] relative">
          <div className="flex items-center gap-[2px] absolute -top-[30px] ">
            <Link href={"/"} className="bg-[#E8F1FA] rounded-[13px] w-fit px-3 font-normal leading-[100%] h-[26px] text-[#1076D7] flex justify-center items-center gap-1 text-[14px]">
            <MdHomeFilled/>
             {t("nav-Home")}
             </Link>
            {/* {i18next.language === "ar" ? <Image width={20} height={20} src={arrow} alt="arrow" className="" /> : <IoMdArrowDropright className="w-6 h-6 text-custom-black"/>} */}
            <span className="bg-[#E8F1FA] rounded-[13px] w-fit px-3 h-[26px] font-normal leading-[100%] flex justify-center items-center gap-1 text-[14px]">{ExploreHeroHead1}</span>
          </div>
          <span className="text-custom-black mb-2 leading-[120%] font-medium text-2xl flex items-center">
            {ExploreSpan} 
            <div className=" translate-y-3"><HiArrowTurnRightDown 
            className= {`${locale == "ar" ? "heroArrowLang" : ""} `}
             /></div>
          </span>
          <h2 className="font-bold leading-[140%] text-[28px] md:text-[42px]  text-custom-black mb-2">{HeroHead}</h2>
          <p className="text-custom-black  w-full  leading-[198%] text-lg md:text-2xl font-normal h-[160px] mb-1">
            <span>{ExploreP}</span> {" "}
          </p>
          <span className="cursor-pointer"
           onClick={(e) => {
            e.preventDefault();
            document.getElementById(btnName)?.scrollIntoView({ behavior: "smooth" });
          }}
          >
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-3xl  bg-[#E5F3FF] formContactHover text-custom-btn'>
              <GoArrowDown className=''/>
            </div>
          </span>
          </div>
          <div className='max-lg:mx-auto  max-lg:mt-8'>
            <Image width={550} height={1000} className="" src={img} alt="heroImage" />
          </div>
        </div>
      </div>
  </header>
  )
}
export default FormHeroSection