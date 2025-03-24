"use client"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { navLinks } from "../utils/dummy";
import Image from "next/image";
import { useTranslations } from "next-intl";
const logo = "/assets/logo/logo1.png"
const Footer = () => {
  const tNavbar = useTranslations('navbarPage');
  const tHome = useTranslations('homePage');
  const tFooter = useTranslations('footer');
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <footer className="bg-[#00162B] pt-[56px] p">
      <div className="container   ">
      <div className="flex max-lg:flex-wrap  gap-6 lg:gap-0">
          <div className="box max-lg:mb-8 w-full md:w-full lg:ml-24 lg:w-[25%]">
            <a href="#" className='block mb-7'>
              <Image width={157} height={40} src={logo} alt="logo" />
            </a>
            <p className="text-white text-[13px] leading-[20px]">{tFooter("footer-p")}</p>
          </div>
          <div className="box max-md:mb-8 w-full md:w-[22%] lg:w-[15%] lg:ml-20 ml-0">
            <ul className=" flex flex-col gap-6">
              <li><button onClick={() => handleNavigation("/")} className="text-sm text-white hover:text-[#0EC2A7] font-semibold cursor-pointer">{tNavbar("nav-Home")}</button></li>
              <li><button className="text-white hover:text-[#0EC2A7] font-normal text-sm cursor-pointer" onClick={() => handleNavigation("/ultra-business-solutions")}>{tNavbar("nav-Solutions-link1")}</button></li>
              <li><button className="text-white hover:text-[#0EC2A7] font-normal text-sm cursor-pointer" onClick={() => handleNavigation("/e-invoice-solutions")}>{tNavbar("nav-Solutions-link2")}</button></li>
              <li><span className="text-white  font-normal text-sm">{tNavbar("nav-btn")}</span></li>
              <li>
                <span className="flex mb-3 items-center  text-white text-sm font-normal gap-2"><FaPhone className="w-[20px] h-[20px]" /> 201016934955+</span>
                <span className="flex items-center  text-white text-sm font-normal gap-2"><span className="w-5 h-5"></span> 201140181114+ </span>
              </li>
            </ul>
          </div>
          <div className="box max-md:mb-8 w-full md:w-[25%] lg:w-[16%] lg:ml-24 ml-0">
            <ul className="flex flex-col gap-6">
              {navLinks.map((ele, ind) => (
              <button key={ind} onClick={() => handleNavigation(ele.url)} className={ind === 0 ? "text-white hover:text-[#0EC2A7] text-sm font-semibold text-start cursor-pointer" : "text-white hover:text-[#0EC2A7] text-sm font-normal text-start cursor-pointer"}>
                <h6>{tHome(`${ele.link}`)}</h6>
              </button>
              ))}
            </ul>
          </div>
          <div className="box max-md:mb-8 w-full md:w-[40%] lg:w-[25%]">
            <ul className="text-white flex flex-col gap-6">
              <li><button onClick={() => handleNavigation("/contact-Us")} className="hover:text-[#0EC2A7] font-semibold text-sm cursor-pointer"> {tFooter("footer-secUl-Contacts")}</button></li>
              <li><span className="flex items-center text-white text-sm font-normal gap-3"><IoLocationOutline className="w-6 md:w-[41px] xl:w-[34px] h-[24px]" />{tFooter("footer-secUl-location")}</span></li>
              <li>
                <span className=" flex items-center gap-3 text-white text-sm font-normal">
                  <MdOutlineEmail className="w-[24px] h-[24px]" /> {tFooter("footer-secUl-email")}
                </span>
              </li>
            </ul>
          </div>
  <div className="box hidden  w-full md:w-[40%] lg:w-[25%] xl:w-[25%] text-white md:ml-24 lg:ml-0">
    <h2 className="leading-normal font-bold text-[14px]">{tFooter("footer-lastUl-head")}</h2>
    <p className="mb-6 mt-3 text-[12px] leading-normal font-medium">{tFooter("footer-lastUl-p")}</p>
    <div className="relative h-8">
      <input className="w-full h-full px-5" type="email" style={{ borderRadius: "3px 0px 0px 3px" }} placeholder="Your email address" />
      <span className="absolute right-0 h-full w-8 bg-seeMore-green"></span>
    </div>
  </div>
</div>

      </div>
      <div className=" bg-[#010D18]  h-16  mt-5">
        <div className="max-lg:container lg:px-[60px]  xl:pl-[128px] xl:pr-[114px] flex h-full justify-center gap-8 items-center ">
        <div className="social flex gap-3 items-center ">
            <a href="https://www.facebook.com/UltraSoftERP" target="_blank"><FaFacebook className="text-white text-xl" /></a>
            <a href="https://www.linkedin.com/company/ultrasoftsolutions" target="_blank"><FaLinkedin className="text-white text-xl" /></a>
          </div>
          <div className="Copyright text-white text-xs">
          Copyright 2020 – 2025
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer