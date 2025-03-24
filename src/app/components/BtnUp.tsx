"use client";
import { useEffect, useState, useRef } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const BtnUp = () => {
  const [isInSameColorSection, setIsInSameColorSection] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".color-section");

    if (!sections.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIsInSameColorSection(entries.some((entry) => entry.isIntersecting));
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed z-50 bottom-2 w-full h-12 flex justify-between items-center px-2">
      <Link href="https://wa.me/+201140181114" target="_blank" rel="noopener noreferrer">
        <Image
          width={48}
          height={48}
          priority
          className="cursor-pointer"
          src="/assets/whatsapp/whatsapp.png"
          alt="WhatsApp"
        />
      </Link>

      <FiArrowUpCircle
        onClick={scrollToTop}
        className={`transition-colors duration-300 cursor-pointer rounded-full w-12 h-12 ${
          isInSameColorSection ? "bg-white text-blue-500" : "bg-blue-500 text-white"
        }`}
      />
    </div>
  );
};

export default BtnUp;
