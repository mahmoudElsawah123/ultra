"use client"
import { useState, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import { useTranslations } from "next-intl";
import { navLinks } from "@/app/utils/dummy";


const DropMenu = ({ handleCloseMenu }: { handleCloseMenu: () => void }) => {
  const router = useRouter();
  const  t  = useTranslations("navbarPage");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };
  const handleNavigation = (path: string) => {
    router.push(path); 
  };
  

  const styleLink = "text-custom-black hoverCustomBtn py-4  px-5 text-start cursor-pointer";
  return (
    <div className={` flex flex-col `} ref={menuRef}>
      <Link href="/" className={styleLink} onClick={ () => {
          handleNavigation("/")
          handleCloseMenu()
      }}>{t("nav-Home")}</Link>

      <button onClick={ () => {
          handleNavigation("/ultra-business-solutions")
          handleCloseMenu()
      }}   className={styleLink}>
        <h6>{t("nav-Solutions-link1")}</h6>
      </button>
      <button onClick={ () => {
          handleNavigation("/e-invoice-solutions")
          handleCloseMenu()
      }}
          className={styleLink}>
        <h6 className="">{t("nav-Solutions-link2")}</h6>
      </button>
      <div onClick={() => handleDropdownToggle("Ultra Programs")}>
        <a href="#" className={`${styleLink} flex items-center gap-1`}>
          {t("nav-Programs")}
          <MdKeyboardArrowDown className={`text-2xl transition-all duration-300 ${openDropdown === "Ultra Programs" ? "rotate-180" : "rotate-0"}`} />
        </a>
        <div className={`overflow-hidden transition-all duration-300 ${openDropdown === "Ultra Programs" ? "h-auto" : "max-h-0"}`}>
          <div className="bg-white">
          {navLinks.map((ele,ind)=>(
          <button onClick={ () => {
            handleNavigation(ele.url)
            handleCloseMenu()
        }} key={ind} className="block w-full text-start  hoverCustomBtn cursor-pointer ">
            <h6 className="px-[40px] py-2">{t(`${ele.link}`)}</h6>
          </button>
          ))}
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-between">
        <button  onClick={()=>{
          handleCloseMenu()
          handleNavigation("/contact-Us")
        }} className="hover:text-white cursor-pointer hoverCustomBtnBg text-[#1076D7]  rounded-[4px] border leading-[120%] py-3 px-[16px] border-[#1076D7]">{t("contact-head")}</button>
        <button  onClick={()=>{
          handleCloseMenu()
          handleNavigation("/request-quote")
        }} className="hover:text-white cursor-pointer hoverCustomBtnBg text-[#1076D7] rounded-[4px] border leading-[120%] py-3 px-[16px] border-[#1076D7]">{t("nav-ExploreNow")}</button>
      </div>
    </div>
  );
};

export default DropMenu;