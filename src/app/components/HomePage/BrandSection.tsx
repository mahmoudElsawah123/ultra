import { getTranslations } from "next-intl/server";
import SliderClient from "./SliderClient";
import { brandSectionBoxData } from "@/app/utils/dummy";

const victor = "/assets/Brand/Vector.svg";

const BrandSection = async () => {
  const t = await getTranslations("homePage");

  // تجهيز البيانات المترجمة مسبقًا
  const translatedData = brandSectionBoxData.map((ele) => ({
    img: ele.img,
    name: t(ele.name),
    job: t(ele.job),
    pKey: t(ele.pKey),
  }));

  return (
    <section
      className="pt-[70px] sm:pt-[120px] pb-[150px] sm:pb-[240px] color-section"
      style={{
        background: "linear-gradient(180deg, #1076D7 0%, #07345E 100%)",
      }}
    >
      <div className="container">
        <h2 className="text-center text-[#f0efff] leading-[120%] text-2xl md:text-3xl lg:text-4xl font-semibold mb-[80px]">
          {t("brand-head2")}
        </h2>

        <SliderClient data={translatedData} victor={victor} />
      </div>
    </section>
  );
};

export default BrandSection;
