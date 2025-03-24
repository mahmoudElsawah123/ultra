"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import DropMenu from "./DropMenu";
import { useTranslations, useLocale } from "next-intl";
const navLang = "/assets/logo/navLang.svg";
const suodi = "/assets/logo/suodi.jpg";

const NavbarLang = () => {
  const router = useRouter();
  const pathname = usePathname();
  const tNav = useTranslations("navbarPage");
  const tHome = useTranslations("homePage");
  const currentLocale = useLocale();

  const [isTranslateOpen, setTranslateOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLng = (newLocale: string) => {
    setTranslateOpen(false);
    
    // Remove any existing locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)(\/|$)/, '/');
    
    // Set new path with locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
    document.cookie = `localeCookie=${newLocale}; path=/`;
    router.push(newPath);
  };

  const handleNavigation = (path: string) => {
    // Preserve locale when navigating
    const newPath = `/${currentLocale}${path}`;
    router.push(newPath);
  };

  const handleCloseMenu = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("localeCookie="))
      ?.split("=")[1];
      
    if (!cookieLocale) {
      const browserLang = navigator.language.slice(0, 2);
      const defaultLocale = ['en', 'ar'].includes(browserLang) ? browserLang : 'en';
      document.cookie = `localeCookie=${defaultLocale}; path=/`;
      
      // Redirect to default locale if path doesn't contain locale
      if (!pathname.startsWith(`/${defaultLocale}`) && !pathname.startsWith('/en') && !pathname.startsWith('/ar')) {
        router.push(`/${defaultLocale}${pathname === '/' ? '' : pathname}`);
      }
    }
  }, [pathname, router]);

  return (
    <div className="flex gap-4 items-center">
      <span className="relative">
        <img
          onClick={() => setTranslateOpen(!isTranslateOpen)}
          src={navLang}
          alt="navLang"
          className="h-[24px] w-[24px] cursor-pointer"
        />
        {isTranslateOpen && (
          <div className="flex flex-col border overflow-hidden z-[100] absolute right-0 w-[150px] bg-white rounded-md shadow-lg">
            <button
              onClick={() => handleLng("en")}
              className={`w-full border-b py-2 cursor-pointer z-20 hover:bg-gray-100 flex items-center gap-2 justify-center ${
                currentLocale === 'en' ? 'bg-gray-100' : ''
              }`}
            >
              <Image width={28} height={20} src={suodi} alt="English" /> English
            </button>
            <button
              onClick={() => handleLng("ar")}
              className={`w-full py-2 cursor-pointer z-20 hover:bg-gray-100 flex items-center gap-2 justify-center ${
                currentLocale === 'ar' ? 'bg-gray-100' : ''
              }`}
            >
              <Image width={28} height={20} src={suodi} alt="Arabic" /> العربية
            </button>
          </div>
        )}
      </span>

      <button
        onClick={() => handleNavigation("/contact-Us")}
        className="text-[#1076D7] hidden lg:block rounded-[4px] border leading-[120%] py-3 px-[16px] border-custom-btn hover:text-white hoverCustomBtnBg cursor-pointer"
      >
        {tHome("contact-head")}
      </button>

      <button
        onClick={() => handleNavigation("/request-quote")}
        className="hidden lg:block text-[#1076D7] rounded-[4px] border leading-[120%] py-3 px-[16px] border-custom-btn hover:text-white hoverCustomBtnBg cursor-pointer"
      >
        {tNav("nav-ExploreNow")}
      </button>

      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="text-gray-800 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute z-50 top-16 right-0 w-full bg-white shadow-lg transition-all ease-in-out duration-300">
            <DropMenu handleCloseMenu={handleCloseMenu} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarLang;