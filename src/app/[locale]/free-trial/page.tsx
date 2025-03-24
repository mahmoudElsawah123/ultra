import GitInTouch from "@/app/PagesData/GitInTouch";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    return {
        title: "احصل على النسخة المجانية",
        description: "جرّب النسخة المجانية من نظام الترا لحلول الأعمال وتعرف على كيفية تبسيط العمليات المحاسبية وإدارة الأعمال. نقدم لك نسخة تجريبية كاملة لتتمكن من اكتشاف جميع الميزات المتطورة لنظامنا.",
        keywords:"لنسخة المجانية, تحميل النسخة التجريبية, تجربة مجانية, برنامج محاسبة مجاني, تحميل برنامج الترا لحلول الأعمال, نظام محاسبي مجاني, تجربة النظام المحاسبي, النسخة التجريبية, جرب الآن, تنزيل النسخة المجانية, أفضل برنامج محاسبة تجريبي, حسابات الشركات المجانية, البرنامج المحاسبي المجاني, حلول محاسبية مجانية, تجربة مجانية لنظام ERP, Free Trial, Download Free Version, Free Accounting Software, Free ERP Trial, Business Software Trial, Free Business Solutions, Accounting Free Version, Try Now",
        openGraph: {
          title: "احصل على النسخة المجانية",
          description: "جرّب النسخة المجانية من نظام الترا لحلول الأعمال وتعرف على كيفية تبسيط العمليات المحاسبية وإدارة الأعمال. نقدم لك نسخة تجريبية كاملة لتتمكن من اكتشاف جميع الميزات المتطورة لنظامنا.",
          type: "website",
        },
      };
};
const page = () => {
  return (
    <div>

       <GitInTouch/>
    </div>
  )
}

export default page
