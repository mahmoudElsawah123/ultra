"use client"
import { useTranslations } from "next-intl";
import Heading from "../Heading";
import { UltraShard } from "../UltraShard";
const UltraSection = () => {
 const t  = useTranslations("homePage");

  return (
    <section className="py-[96px] bg-[#F7FBFF]" id="Ultra">
      <header className="container">
        <div className="text-center mb-12 lg:mb-0">
          <Heading head={t("Ultra-head")} p={t("Ultra-p")} style={""} />
        </div>
        <article>
          <UltraShard/>
        </article>
      </header>
    </section>
  );
};

export default UltraSection;
