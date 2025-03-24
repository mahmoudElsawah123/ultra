import SalesPOS from "@/app/PagesData/SalesPOS";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    return {
        title: "نظام نقطة البيع  في الترا لحلول الأعمال – الحل الأمثل لإدارة المبيعات والمخزون بدقة وسرعة",
        description: "نظام نقطة البيع (POS) في الترا لحلول الأعمال يوفر حلولًا متكاملة لإدارة المبيعات والمخزون بكفاءة عالية. احصل على تحكم كامل في عمليات البيع والتخزين بواجهة سهلة, تقارير شاملة, ودعم متعدد للدفع.",
        keywords:"نظام نقطة البيع, POS, أفضل نظام POS, إدارة المبيعات, إدارة المخزون, برنامج نقاط البيع, نقطة بيع سهلة, نقطة بيع بسيطة, إدارة المتاجر, إدارة السوبر ماركت, تقارير المبيعات, إدارة الحسابات, نظام محاسبي, حل تجاري, الفواتير الضريبية, تخزين وإدارة المنتجات, قارئ باركود, Point Of Sale, POS System, Best POS System, Retail POS Solutions",
        openGraph: {
          title: "نظام نقطة البيع  في الترا لحلول الأعمال – الحل الأمثل لإدارة المبيعات والمخزون بدقة وسرعة",
          description: "نظام نقطة البيع (POS) في الترا لحلول الأعمال يوفر حلولًا متكاملة لإدارة المبيعات والمخزون بكفاءة عالية. احصل على تحكم كامل في عمليات البيع والتخزين بواجهة سهلة, تقارير شاملة, ودعم متعدد للدفع.",
          type: "website",
        },
      };
};
const page = () => {
  return (
    <div>

       <SalesPOS/>
    </div>
  )
}

export default page