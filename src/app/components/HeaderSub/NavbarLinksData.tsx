"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl";
import { navLinks } from "@/app/utils/dummy";

interface HeaderProps {
  locale: string;
}


const NavbarLinksData: React.FC<HeaderProps> = ({locale}) => {
  const  tNav  = useTranslations("navbarPage");
  const  tHome  = useTranslations("homePage");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setOpenDropdown(null); 
    router.push(path);
  };

  return (
    <div className="hidden h-[72px] lg:flex gap-[28px]">
      <button onClick={() => handleNavigation(`/${locale}`)} className="cursor-pointer text-custom-black leading-[120%] flex items-center hoverCustomBtn">
        {tNav("nav-Home")}
      </button>
      <button onClick={() => handleNavigation("/ultra-business-solutions")} className="cursor-pointer text-custom-black leading-[120%] flex items-center hoverCustomBtn">
        {tNav("nav-UltraSolutions")}
      </button>
      <button onClick={() => handleNavigation("/e-invoice-solutions")} className="cursor-pointer text-custom-black leading-[120%] flex items-center hoverCustomBtn">
        {tNav("nav-Solutions-link2")}
      </button>
      <div
        className="relative flex items-center "
        onMouseEnter={() => setOpenDropdown("Ultra Programs")}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <span className="text-custom-black leading-[120%] flex items-center hoverCustomBtn cursor-pointer ">
          {tNav("nav-Programs")}
          <MdKeyboardArrowDown className={`text-xl transition-transform duration-300 ${openDropdown === "Ultra Programs" ? "rotate-180" : "rotate-0"}`} />
        </span>
        <div
        className={`absolute top-[72px] -right-4 z-[99999] w-[300px] bg-white rounded-[12px] navLinksArrow ${
          openDropdown === "Ultra Programs" ? "h-auto" : "max-h-0 overflow-hidden"
        }`} style={{filter:"drop-shadow(0px 2px 20px rgba(43, 39, 105, 0.10))"}}
      >
        <div className="py-8 navLinksArrow relative">
          {navLinks.map((ele,ind)=>(
          <button key={ind} onClick={() => {
            setOpenDropdown(null)
            handleNavigation(ele.url)
          }} className="block px-6  mb-[30px] last:mb-0 w-full text-start h-[30px] hoverCustomBtn cursor-pointer">
            <h6>{tHome(`${ele.link}`)}</h6>
          </button>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default NavbarLinksData;
