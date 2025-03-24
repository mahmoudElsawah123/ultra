import React from 'react'

import { Metadata } from "next";
import ElectronicInvoice from '@/app/PagesData/ElectronicInvoice';

export const generateMetadata = (): Metadata => {
    return {
        title: "الفاتورة الإلكترونية من شركة حلول الترا سوفت – حل متكامل للامتثال الضريبي",
        description: "نظام الفاتورة الإلكترونية من حلول الترا سوفت يساعدك على إدارة الفواتير والمبيعات بكل سهولة وامتثال كامل للمتطلبات الضريبية. دمج سلس مع الأنظمة المحاسبية وإرسال الفواتير مباشرة إلى مصلحة الضرائب.",
        keywords:"الفاتورة الإلكترونية, حلول الترا سوفت, الامتثال الضريبي, إصدار الفواتير, مصلحة الضرائب المصرية, تكامل محاسبي, إدارة الفواتير, الفواتير المبسطة, مزامنة البيانات, تقارير الضرائب, E-invoice Solutions, Best E-invoicing System, Tax Compliance, Invoicing Automation, VAT Invoices, Tax Filing, Financial Data Integration, Business Tax Compliance ",
        openGraph: {
          title: "الفاتورة الإلكترونية من شركة حلول الترا سوفت – حل متكامل للامتثال الضريبي",
          description: "نظام الفاتورة الإلكترونية من حلول الترا سوفت يساعدك على إدارة الفواتير والمبيعات بكل سهولة وامتثال كامل للمتطلبات الضريبية. دمج سلس مع الأنظمة المحاسبية وإرسال الفواتير مباشرة إلى مصلحة الضرائب.",
          type: "website",
        },
      };
};

const page = () => {
  return (
    <div>

       <ElectronicInvoice/>
    </div>
  )
}

export default page