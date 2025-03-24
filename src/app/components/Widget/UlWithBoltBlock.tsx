"use client"
import { useRef, useState, useEffect } from "react";
import { useLocale } from "next-intl";
const UlWithBoltBlock = ({ ul }: { ul: { ulHead: string; ulP: string | React.ReactNode | null }[] }) => {
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
    <div className="mb-5">
      <ul
        ref={ulRef}
        className={`${locale=== "ar" ? "pr-10" : "pl-10" } list-disc  overflow-hidden transition-all duration-500`}
        style={{ height: showAll ? `${ulRef.current?.scrollHeight}px` : collapsedHeight }}
      >
        {ul.map((ele, ind) => (
          <li key={ind} className="mb-4">
            {ele.ulHead && <h2 className="text-lg mb-2 lg:text-xl font-normal text-custom-black">{ele.ulHead}</h2>}
            {ele.ulP && <p className="text-lg lg:text-xl font-light text-custom-black">{ele.ulP}</p>}
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

export default UlWithBoltBlock;
