"use client"

import { useLocale } from "next-intl";
import { useRef, useState, useEffect } from "react";

const UlWithBoltInline = ({ ul }: { ul: { ulHead: string|null; ulP: string | null | React.ReactNode }[] }) => {
  const [showAll, setShowAll] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const [collapsedHeight, setCollapsedHeight] = useState("auto");
  const locale = useLocale()
  useEffect(() => {

    const updateHeight = () => {
      if (ulRef.current) {
        const firstFourItems = Array.from(ulRef.current.querySelectorAll("li:nth-child(-n+5)")) as HTMLElement[];
        if (firstFourItems.length > 0) {
          const firstItemTop = firstFourItems[0].offsetTop;
          const lastItem = firstFourItems[firstFourItems.length - 1];
          const lastItemBottom = lastItem.offsetTop + lastItem.offsetHeight;

          const extraMargin = window.innerWidth < 768 ? 0 : 10;
          const totalHeight = lastItemBottom - firstItemTop + extraMargin;
          setCollapsedHeight(`${totalHeight}px`);
        }
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ul]);

  return (
    <div>
      <ul
        ref={ulRef}
        className={`${locale === "ar" ? "pr-10" : "pl-10" } list-disc overflow-hidden transition-all duration-500`}
        style={{ height: showAll ? `${ulRef.current?.scrollHeight}px` : collapsedHeight }}
      >
        {ul.map((ele, ind) => (
          <li key={ind} className={` mb-4`}>
            {ele.ulHead && <h4 className="font-normal  inline-block text-lg md:text-xl text-custom-black"> {ele.ulHead} </h4>}
            {ele.ulP && <span className="text-lg lg:text-xl text-custom-black font-light"> {ele.ulP} </span>}
          </li>
        ))}
      </ul>
      {ul.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-5 px-4 py-2 bg-custom-btn hover:bg-custom-btn-hover text-white rounded"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default UlWithBoltInline;
