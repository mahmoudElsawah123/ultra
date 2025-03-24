import { Metadata } from "next";
export const generateMetadata = (): Metadata => {
    return {
        title: "اتصل بنا",
        description: "إذا كان لديك أي استفسار أو تحتاج إلى مساعدة، لا تتردد في الاتصال بفريق الترا لحلول الأعمال. نحن هنا لخدمتك ونوفر لك الدعم الكامل لجميع خدماتنا وحلولنا المحاسبية.",
        keywords:"اتصل بنا, دعم العملاء, خدمات الترا لحلول الأعمال, استفسارات المحاسبة, دعم فني, التواصل مع الدعم, استفسار عن الخدمات, مساعدة العملاء, حلول محاسبية, استفسار عن البرامج, استفسار تجاري, الترا لحلول الأعمال, تواصل معنا, أفضل دعم فني, Contact Us, Customer Support, Accounting Solutions, Business Solutions, Contact for Assistance, Technical Support, Get Help, Customer Inquiry, Accounting Support",
        openGraph: {
          title: "اتصل بنا",
          description: "إذا كان لديك أي استفسار أو تحتاج إلى مساعدة، لا تتردد في الاتصال بفريق الترا لحلول الأعمال. نحن هنا لخدمتك ونوفر لك الدعم الكامل لجميع خدماتنا وحلولنا المحاسبية.",
          type: "website",
        },
      };
};
import ContactUs from "@/app/PagesData/ContactUs";

const Page = () => {
  return (
<div>
  <ContactUs/>
</div>
  );
};

export default Page;

