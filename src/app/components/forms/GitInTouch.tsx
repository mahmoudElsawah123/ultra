"use client"
import { useTranslations } from "next-intl";;
import contactImg from "../../assets/Contact/contactImg.svg" 
import facebook from "../../assets/Contact/facebook.svg" 
import linkedin from "../../assets/Contact/Group.svg" 
import phone from "../../assets/Contact/phone.png" 
import locationImg from "../../assets/Contact/location.png" 
import Frame from "../../assets/Explore/Frame.png"
import { usePathname, useSearchParams } from "next/navigation";
import {ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import FormHeroSection from "../FormsShard/FormHeroSection";
import FormData from "../FormsShard/FormData";
import Image from "next/image";

const GitInTouch = () => {
  // const {t} = useTranslation()
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scrollToTop")) {
      window.scrollTo(0, 0);
    }
  }, [pathname, searchParams]);
  return (
    <div className="">
      <header>
      <ToastContainer />
        {/* <FormHeroSection img={Frame} btnName={"GitInTouch"} 
        ExploreHeroHead1={t("GitInTouch-HeroHead1")}
         ExploreSpan={t("Explore-span")} 
         ExploreP={t("GitInTouch-HeroP")}
          HeroHead={t("GitInTouch-form-head")}
           /> */}
        <div id="GitInTouch" className="bg-[#F6FBFF] py-[72px]">
        <div className="container px-5 lg:pl-6 py-3 lg:pr-3 bg-white  flex flex-col gap-10 lg:flex-row rounded-[4px]" style={{boxShadow: "0px 0px 55.987px 27.993px rgba(0, 0, 0, 0.03)"}}>
          <div className="relative rounded-[10px] lg:w-1/3 overflow-hidden w-full bg-[#001411] p-10 h-[647px]">
            <div className="flex max-lg:gap-12 flex-col justify-between h-full z-20 relative">
              <div className="">
                <h2 className="lg:text-[25px] xl:text-[28px] w-fit font-semibold text-white">
                  {/* {t("contact-head2")} */}
                </h2>
                <p className="font-normal mt-2 w-fit lg:text-[15px] xl:text-lg text-white">
                  {/* {t("contact-p")} */}
                  </p>
              </div>
              <div>
                <ul className="flex flex-col gap-8 xl:gap-12">
                  <li>
                    <span className="flex mb-3 items-center text-white text-sm font-normal gap-2"><Image src={phone} className="w-6 h-6" alt="phone" /> 201016934955+</span>
                    <span className="flex items-center text-white text-sm font-normal gap-2"><span className="w-6 h-6"></span> 201140181114+ </span>
                  </li>
                  <li>
                    <span className="flex items-center gap-3 text-white text-sm font-normal">
                      <MdOutlineEmail className="w-6 h-6" /> 
                      {/* {t("footer-secUl-email")} */}
                    </span>
                  </li>
                  <li><span className="flex items-center text-white text-sm font-normal gap-3"><Image src={locationImg} className="w-6 h-6" alt="" /> 
                  {/* {t("footer-secUl-location")} */}
                  </span></li>
                </ul>
              </div>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/ultrasoftsolutions" target="_blank"><Image src={linkedin} className="w-[30px] h-[30px]" alt="linkedin" /></a>
                <a href="https://www.facebook.com/UltraSoftERP" target="_blank"><Image src={facebook} className="w-[30px] h-[30px]" alt="facebook" /></a>
              </div>
            </div>
              <Image src={contactImg} className=" max-lg:hidden absolute w-full lg:w-[40%] z-10 h-[286px] bottom-[-12px] left-0 " alt="" />
          </div>
          {/* <FormData type={"2"} Api={"https://ultrasoftsolutions.com/mail/send_email.php"} /> */}
      </div>
        </div>
      </header>
    </div>
  )
}

export default GitInTouch



 
