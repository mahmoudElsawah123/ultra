import React from 'react'

import { Metadata } from "next";
import LinkageWithTaxes from '@/app/PagesData/LinkageWithTaxes';

export const generateMetadata = (): Metadata => {
    return {
        title: "التكامل بين الترا لحلول الأعمال وبرنامج الفاتورة الإلكترونية – الامتثال الضريبي بسهولة وكفاءة",
        description: "يقدم التكامل بين الترا لحلول الأعمال وبرنامج الفاتورة الإلكترونية حلاً متكاملاً لضمان امتثال الشركات لمتطلبات مصلحة الضرائب المصرية. يتيح هذا التكامل إصدار الفواتير الضريبية والمبسطه مباشرة وإرسالها إلى مصلحة الضرائب, مما يعزز دقة البيانات, ويسرع التنفيذ, ويقلل الأخطاء المحاسبية.",
        keywords:"التكامل مع الفاتورة الإلكترونية, الفاتورة الإلكترونية, مصلحة الضرائب المصرية, إصدار الفواتير, الامتثال الضريبي, نظام الفاتورة الإلكترونية, أتمتة إرسال الفواتير, تقارير مالية, فحص ضريبي, تدقيق مالي, تحديث البيانات المالية, E-invoice Integration, Best E-invoicing System, Egypt Tax Compliance, Tax Filing, VAT Invoices, Automated Invoicing Solutions",
        openGraph: {
          title: "التكامل بين الترا لحلول الأعمال وبرنامج الفاتورة الإلكترونية – الامتثال الضريبي بسهولة وكفاءة",
          description: "يقدم التكامل بين الترا لحلول الأعمال وبرنامج الفاتورة الإلكترونية حلاً متكاملاً لضمان امتثال الشركات لمتطلبات مصلحة الضرائب المصرية. يتيح هذا التكامل إصدار الفواتير الضريبية والمبسطه مباشرة وإرسالها إلى مصلحة الضرائب, مما يعزز دقة البيانات, ويسرع التنفيذ, ويقلل الأخطاء المحاسبية.",
          type: "website",
        },
      };
};

const page = () => {
  return (
    <div>

       <LinkageWithTaxes/>
    </div>
  )
}

export default page