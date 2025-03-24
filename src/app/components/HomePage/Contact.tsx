"use client"

import { MdOutlineEmail } from "react-icons/md";
import ContactData from "./ContactData";
import Image from "next/image";
import { useTranslations } from "next-intl";
const contactImg = "/assets/Contact/contactImg.svg" 
const facebook = "/assets/Contact/facebook.svg" 
const linkedin = "/assets/Contact/Group.svg" 
const phone = "/assets/Contact/phone.png" 
const location = "/assets/Contact/location.png" 
const Contact = () => {
  const tHome  = useTranslations("homePage");
  const tFooter  = useTranslations("footer");
  return (
    <div className="bg-[#F6FBFF] py-[72px]" id="contactData">
        <div style={{boxShadow: "0px 0px 55.987px 27.993px rgba(0, 0, 0, 0.03)"}} className="flex flex-col gap-10 lg:flex-row rounded-[4px] container bg-white px-5 lg:pl-6 py-3 lg:pr-3">
          <div className="relative rounded-[10px] lg:w-1/3 overflow-hidden w-full bg-[#001411] p-10">
            <div className="flex max-lg:gap-12 flex-col justify-between h-full z-20 relative">
              <div className="">
                <h2 className="lg:text-[25px] xl:text-[28px] w-fit font-semibold text-white">{tHome("contact-head2")}</h2>
                <p className="font-normal mt-2 w-fit lg:text-[15px] xl:text-lg text-white">{tHome("contact-p")}</p>
              </div>
              <div>
                <ul className="flex flex-col gap-8 xl:gap-12">
                  <li>
                    <span className="flex mb-3 items-center text-white text-sm font-normal gap-2"><Image width={24} height={24}  src={phone} className="w-6 h-6" alt="phone" /> 201016934955+</span>
                    <span className="flex items-center text-white text-sm font-normal gap-2"><span className="w-6 h-6"></span> 201140181114+ </span>
                  </li>
                  <li>
                    <span className="flex items-center gap-3 text-white text-sm font-normal">
                      <MdOutlineEmail className="w-6 h-6" /> {tFooter("footer-secUl-email")}
                    </span>
                  </li>
                  <li><span className="flex items-center text-white text-sm font-normal gap-3"><Image width={24} height={24} src={location} className="w-6 h-6" alt="" /> {tFooter("footer-secUl-location")}</span></li>
                </ul>
              </div>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/ultrasoftsolutions" target="_blank"><Image width={30} height={30} src={linkedin} className="w-[30px] h-[30px]" alt="linkedin" /></a>
                <a href="https://www.facebook.com/UltraSoftERP" target="_blank"><Image width={30} height={30} src={facebook} className="w-[30px] h-[30px]" alt="facebook" /></a>
              </div>
            </div>
            <div className="max-lg:hidden absolute w-full lg:w-[40%] z-10 h-[286px] bottom-[-12px] left-0">
            <Image fill src={contactImg} className=" " alt="" />
            </div>
          </div>
          <div className="box lg:w-2/3 w-full py-3">
            <ContactData/>
          </div>
        </div>
    </div>
  )
}
export default Contact