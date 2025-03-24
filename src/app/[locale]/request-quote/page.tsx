import ExploreNow from "@/app/PagesData/ExploreNow";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "اطلب عرض سعر",
    description:
      "احصل على عرض سعر مخصص لحلول الترا لحلول الأعمال لتلبية احتياجاتك المالية والتجارية. استفسر عن الأسعار وخططنا المناسبة لأعمالك وابدأ في تحسين عملياتك المالية اليوم.",
    keywords: "خدمات, مدونة, علامة تجارية, اتصال, الصفحة الرئيسية",
    openGraph: {
      title: "اطلب عرض سعر",
      description:
        "احصل على عرض سعر مخصص لحلول الترا لحلول الأعمال لتلبية احتياجاتك المالية والتجارية. استفسر عن الأسعار وخططنا المناسبة لأعمالك وابدأ في تحسين عملياتك المالية اليوم.",
      type: "website",
    },
  };
};

const page = () => {
  return (
    <div>
      <ExploreNow />
    </div>
  );
};

export default page;
