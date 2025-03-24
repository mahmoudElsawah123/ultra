
import AccountModule from "@/app/PagesData/AccountModule";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    return {
        title: "نظام الحسابات في الترا لحلول الأعمال – الحل الشامل لمحاسبة الشركات",
        description: "نظام الحسابات في الترا لحلول الأعمال يقدم حلولاً متكاملة ومتطورة لإدارة الشؤون المالية للشركات الصغيرة والمتوسطة, مع ميزات قوية لتبسيط العمليات المحاسبية ودعم نمو الأعمال.",
        keywords:"نظام الحسابات, برنامج محاسبة, أفضل برنامج ERP, حلول محاسبية, برنامج محاسبة الشركات, حسابات الشركات الصغيرة, نظام محاسبي, التقارير المالية, نظام محاسبة متكامل, إدارة الحسابات, الفاتورة الإلكترونية, الضرائب, محاسبة الشركات المتوسطة, القيود اليومية, دفتر الأستاذ, السنة المالية, التحليل المالي, نظام حسابات سهل, نظام مبسط, أفضل نظام حسابات, ترحيل الحسابات, Accounting System, ERP Solutions, Financial Management Software, Tax Compliance, ERP Accounting, Daily Journal, Best ERP System, Easy Accounting System",
        openGraph: {
          title: "نظام الحسابات في الترا لحلول الأعمال – الحل الشامل لمحاسبة الشركات",
          description: "نظام الحسابات في الترا لحلول الأعمال يقدم حلولاً متكاملة ومتطورة لإدارة الشؤون المالية للشركات الصغيرة والمتوسطة, مع ميزات قوية لتبسيط العمليات المحاسبية ودعم نمو الأعمال.",
          type: "website",
        },
      };
};
import React from 'react'
const page = () => {
  return (
    <div>
       <AccountModule/>
    </div>
  )
}
export default page