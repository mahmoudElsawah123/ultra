"use client";
import React, { useEffect } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { HiArrowTurnRightDown } from "react-icons/hi2";
import { MdHomeFilled } from "react-icons/md";
import { Contact } from '@/app/components/HomePage';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowDown } from "react-icons/go";
import { useTranslations } from "next-intl";
import { IoMdArrowDropright } from "react-icons/io";
const heroImage = "/assets/Contact/heroImage.png";
const arrow = "/assets/Contact/arrow.png";

const ContactUs = () => {
    const  t  = useTranslations("navbarPage");
  const searchParams = useSearchParams();
  const params = useParams()
  const {locale} = params
  useEffect(() => {
    if (searchParams.get("scrollToTop")) {
      window.scrollTo(0, 0);
    }
  }, [searchParams]);

  return (
    <header className="mt-[74px] bg-[#fff]">
      <div className="relative max-lg:py-[90px] pb-[90px] pt-[120px]">
        <div className="container relative z-10 max-lg:flex-col flex justify-between">
          <div className="py-[30px] lg:w-[55%] relative">
            <div className="flex items-center gap-[2px] absolute -top-[30px]">
              <Link href={"/"} className="bg-[#E8F1FA] rounded-[13px] w-fit px-3 font-normal leading-[100%] h-[26px] text-[#1076D7] flex justify-center items-center gap-1 text-[14px]">
                <MdHomeFilled /> 
                {t("nav-Home")}
              </Link>
              {locale == "ar" ? (
                <Image width={20} height={20} src={arrow} alt="arrow" className="w-5 h-5" />
              ) : (
                <IoMdArrowDropright className="w-6 h-6 text-custom-black" />
              )}
              <span className="bg-[#E8F1FA] rounded-[13px] w-fit px-3 h-[26px] font-normal leading-[100%] flex justify-center items-center gap-1 text-[14px]">
                {t("nav-btn")}
              </span>
            </div>
            <span className="text-custom-black mb-2 leading-[120%] font-medium text-2xl flex items-center">
              {t("nav-UltraSolutions")}
              <div className="translate-y-3">
                <HiArrowTurnRightDown 
                className={locale == "ar" ? "heroArrowLang" : ""} 
                />
              </div>
            </span>
            <h2 className="font-medium leading-normal text-[28px] md:text-4xl text-custom-black">
              {t("contact-head")}
            </h2>
            <p className="text-custom-black mb-5 w-full leading-[198%] text-lg md:text-2xl font-normal">
              <span>
                {t("heroUltraContactSpan1")}
                </span>{" "}
              <span className="text-[#1EA894]">
                {t("heroUltraContactSpan2")}
                </span>
            </p>
            <span
              className="cursor-pointer relative"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contactData")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
         <div className='w-12 h-12 rounded-full flex items-center justify-center text-3xl  bg-[#E5F3FF] formContactHover text-custom-btn '>
              <GoArrowDown className=''/>
            </div>
            </span>
          </div>
          <div className="relative max-lg:mx-auto max-lg:mt-16">
            <Image width={361} height={1000} className="" src={heroImage} alt="heroImage" />
          </div>
        </div>
      </div>
      <Contact />
    </header>
  );
};

export default ContactUs;
