"use client"
import { useTranslations, useLocale } from "next-intl";
import { HiArrowTurnRightDown } from "react-icons/hi2";
import { MdHomeFilled } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
const imgVector = "/assets/Ultrasoft/Vector 32.png"
import Link from "next/link";
import Image from "next/image";
import { Btn, HeroSectionHeading } from "./Widget";


interface HeroSectionSubPagesProps {
  title1: string;
  title2: string;
  Link1:string
  Link2:string
  buttonText: string;
  bg:string
  ul:{ name: string }[]
}
const HeroSectionSubPages: React.FC<HeroSectionSubPagesProps> = ({ul,title1,title2,buttonText,bg,Link1,Link2}) => {
  const t = useTranslations("homePage")
  const locale = useLocale(); 
  return (
    <header  className={`bg-[#021F3B] pt-[129px] pb-[95px] flex lg:flex-row items-center justify-between  mt-[74px] relative`}>
      <div className="container relative  ">
        <div className="flex  items-center absolute -top-[70px] ">
            <Link href={"/"} className="bg-white rounded-[13px] text-custom-btn w-fit px-3 font-normal leading-[100%] h-[26px] flex justify-center items-center gap-1 text-[14px]"><MdHomeFilled/> {Link1}</Link>
            {locale === "ar" ? <IoMdArrowDropleft className="w-6 h-6 text-white"/> : <IoMdArrowDropright className="w-6 h-6 text-white"/>}
            <span className="bg-white rounded-[13px] w-fit px-3 h-[26px] font-normal leading-[100%] flex justify-center items-center gap-1 text-[14px] hoverCustomBtn">{Link2}</span>
        </div>
        <div className="w-full flex max-sm:flex-col">
          <div className="sm:w-1/2">
            <span className="text-white leading-[120%] font-semibold mb-2 text-xl flex items-center">
      {t("heroUltra")}
      <div className="translate-y-1">
        <HiArrowTurnRightDown
          className={`${locale === "ar" ? "heroArrowLang" : ""}`}
        />
      </div>
            </span>
            <HeroSectionHeading head1={title1} head2={title2} />
            <div className="mt-[44px] mb-12 w-[374px] h-[26px] relative">
            <Image fill src={imgVector} className="" alt="" />
            </div>
            
            <ul className="mb-12">
              {ul.map((ele, ind) => (
                <li key={ind} className="text-white mb-3 text-xl leading-[34px] font-[500] flex items-center gap-[13px]">
                  <Image width={20} height={20} src={"/assets/subPages/ulIcon.svg"} alt=""/> { ele.name}
                </li>
              ))}
            </ul>
            <div className="mb-6">
             <Btn Explore={""} GitInTouch={buttonText} style={"py-0 px-6"} />
            </div>
          </div>
          <div className="max-sm:mt-12 sm:w-1/2 flex lg:items-end justify-end pr-5 h-auto lg:h-[440px] relative">
            <Image
            fill
              className=""
              src={bg}
              alt="image" />
          </div>
          </div>
      </div>
</header>
  )
}
export default HeroSectionSubPages