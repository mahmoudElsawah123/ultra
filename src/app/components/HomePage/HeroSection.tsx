"use client"
import { HiArrowTurnRightDown } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations,useLocale } from "next-intl";
import Link from "next/link";
const HeroSection = () => {
  const router = useRouter();
    const t = useTranslations("homePage");
    const locale = useLocale()
    const handleNavigation = (path: string) => {
      router.push(path);
    };
  return (
    
    <header className=" lg:pt-[128px] py-[50px] lg:pb-[55px] mt-[74px]">
      <div className="container">
        <div className="flex flex-col items-center  lg:flex lg:flex-row relative">
          <div className="box lg:w-1/2 lg:translate-y-[-40px] ">
            <span className="text-custom-black leading-[120%] font-medium text-2xl flex items-center mb-5">
              {t("hero-span")} 
              <div className=" translate-y-1"><HiArrowTurnRightDown className= {`${locale === "ar" ? "heroArrowLang" : ""} `} /></div>
              </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-custom-black leading-[135%] font-semibold mb-4 max-w-[610px]">{t("hero-heading")}</h1>
            <p className="text-lg md:text-xl text-custom-black leading-[150%] font-light mb-8 w-auto lg:w-[549px]">{t("hero-p")}</p>
            <div className="btn max-sm:flex-col flex gap-4">
             <button onClick={() => handleNavigation("/request-quote")} className="border max-sm:w-[250px] leading-[120%] text-base md:text-lg font-medium py-[6px] px-[24px] rounded-[6px] bg-custom-btn text-white  hover:text-white flex items-center min-h-[48px] justify-center customBtnHover cursor-pointer">{t("hero-btn-1")}</button> 
              <button onClick={() => handleNavigation("/free-trial")} className="border max-sm:w-[250px] leading-[120%] text-base md:text-lg font-medium py-[6px] px-[24px] rounded-[6px] bg-[#E8FAF7] text-[#0EC2A7] flex items-center min-h-[48px] justify-center hover:bg-[#0EC2A7] hover:text-white cursor-pointer">{t("hero-btn-2")}</button>
            </div>
          </div>
          <div className="box mt-12 md:mb-10 lg:mb-0 w-full lg:w-1/2 lg:translate-y-[-40px] h-auto md:h-[502px]">
            <Image
              src={"/assets/HeroSection/Frame2.svg"}
              width={1920}
              height={502}
              priority
              className={`${locale === "ar" ? "heroImgLang" : ""} `}
              alt="Illustration of a modern website hero section with call-to-action buttons"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection