"use client"
import { UltraShard } from "@/app/components/UltraShard";
import { HeadingWidget, Paragraph } from "../../../Widget"
import { useTranslations } from "next-intl";

const UltraBusinessSolutionsSection1 = () => {
      const t = useTranslations("UltraBusinessSolutionsPage")
    const paragraphData1 = [
        t("UltraBusinessSolutions2-p"),
    ];
    const paragraphStyles1 = [
        { color: "text-custom-black", fontWeight: "font-light" },
    ];
return (
    <header className=" py-24 container">
        <HeadingWidget style={"text-2xl mb-8  md:text-3xl font-semibold text-center"} head={t("UltraBusinessSolutions2-head")} />
        <div className="text-center mb-10 w-3/4 m-auto">
          <Paragraph spans={paragraphData1} style={paragraphStyles1}/>
        </div>
    <div className=" w-full">
      <UltraShard/>
    </div>

</header>
)
}

export default UltraBusinessSolutionsSection1