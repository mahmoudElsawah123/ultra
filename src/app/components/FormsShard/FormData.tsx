"use client"
const send = "/assets/Contact/send.png" 
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
interface IFormData{
    Api:string
    type:string
}
const FormData:React.FC<IFormData> = ({Api,type}) => {
    const t = useTranslations("homePage");
  const router = useRouter();
    const validationSchema = Yup.object({
        userName: Yup.string().required(t("Explore-form-name") + " " ),
        companyName: Yup.string().required(t("Explore-form-company") + " " ),
        email: Yup.string().email(t("Explore-form-email")).required(t("contact-form-email") + " " ),
        countryName: Yup.string().required(t("Explore-form-country") + " " ),
        phone: Yup.string().matches(/^\d+$/, t("invalid-phone")).required(t("Explore-form-phone") + " " ),
        CompanyActivity: Yup.string().required(t("Explore-form-CompanyActivity") + " " ),
        NumberOfCompanyMembers: Yup.string().required(t("Explore-form-NumberOfCompanyMembers") + " " ),
    });
    const formik = useFormik({
        initialValues: {
        type:type,
        userName: "",
        email: "",
        companyName: "",
        phone: "",
        countryName: "",
        CompanyActivity: "",
        NumberOfCompanyMembers: "",
        lastName: "",
        website: "",
        services: [] as string[],
        message:"",
    },
        validationSchema,
        onSubmit: async (values, { resetForm,setSubmitting  }) => {
        try {
            const payload = {
                type: values.type,
                first_name: values.userName || "",
                last_name: values.lastName || "",
                email: values.email,
                phone: values.phone,
                country_Name: values.countryName,
                Company_Activity: values.CompanyActivity,
                Number_Of_Company_Members: values.NumberOfCompanyMembers,
                company: values.companyName,
                website: values.website || "",
                services: values.services.length > 0 ? values.services.join(" ،") : "",
                message: values.message || ""
            };
          console.log("Payload being sent:", payload);
            const response = await fetch(Api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (data.success) {
              toast.success("🚀 تم  إرسال البيانات بنجاح!", { position: "top-center" });
                resetForm();
                setTimeout(() => {
                  router.push("/");
                }, 3000);

            } else {
              toast.error("❌ فشل في إرسال  البيانات: " + data.message, { position: "top-center" });
            }
        } catch (error) {
            toast.error("⚠️ حدث خطأ أثناء إرسال الطلب.", { position: "top-center" });
            console.error("Error:", error);
        }finally {
          setSubmitting(false); 
        }
        },
    });
  return (
    <form   onSubmit={formik.handleSubmit}  className="rounded-[8px] flex-1 pt-3">
    <div className="box">
      <div className="flex flex-wrap md:flex-nowrap gap-6 mb-6">
        <div className="w-full">
          <label className="mb-2 block text-sm">{t("Explore-form-name")} </label>
          <input placeholder="ادخل الاسم الكامل" className="w-full border px-5 py-2 text-xs  h-[32px] rounded-[4px]" type="text" {...formik.getFieldProps("userName")} />
          {formik.touched.userName && formik.errors.userName ? (
            <span className="text-red-500 text-xs">{formik.errors.userName}</span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-6  mb-6">
        <div  className="w-full md:w-1/2 ">
          <label className="mb-2 block text-sm">{t("Explore-form-company")} </label>
          <input placeholder="ادخل اسم الشركة" className="w-full  border px-5 py-2 text-xs  h-[32px]  rounded-[4px]" type="text" {...formik.getFieldProps("companyName")} />
          {formik.touched.companyName && formik.errors.companyName ? (
            <span className="text-red-500 text-xs">{formik.errors.companyName}</span>
          ) : null}
        </div>
        <div className="w-full md:w-1/2">
          <label className="mb-2 block text-sm">{t("Explore-form-email")} </label>
          <input placeholder="ادخل البريد الالكتروني" className="w-full  border px-5 py-2 text-xs  h-[32px]  rounded-[4px]" type="text" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-red-500 text-xs">{formik.errors.email}</span>
          ) : null}
        </div>
      </div>
      <div className="flex gap-6 flex-wrap md:flex-nowrap mb-6">
      <div  className="w-full md:w-1/2">
          <label className="mb-2 block text-sm">{t("Explore-form-country")} </label>
          <input placeholder="ادخل الدولة" className="w-full  border px-5 py-2 text-xs  h-[32px]  rounded-[4px]" type="text" {...formik.getFieldProps("countryName")} />
          {formik.touched.countryName && formik.errors.countryName ? (
            <span className="text-red-500 text-xs">{formik.errors.countryName}</span>
          ) : null}
        </div>
        <div className="w-full md:w-1/2 ">
          <label className="mb-2 block text-sm">{t("Explore-form-phone")} </label>
          <input placeholder="ادخل رقم الهاتف" className="w-full  border px-5 py-2 text-xs  h-[32px]  rounded-[4px]" type="text" {...formik.getFieldProps("phone")} />
          {formik.touched.phone && formik.errors.phone ? (
            <span className="text-red-500 text-xs">{formik.errors.phone}</span>
          ) : null}
        </div>

      </div>
      <div className="flex-wrap md:flex-nowrap flex gap-6">
      <div  className="w-full md:w-1/2 ">
          <label className="mb-2 block text-sm">{t("Explore-form-CompanyActivity")} </label>
          <input placeholder="ادخل عدد الأعضاء" className="w-full  border px-5 py-2 text-xs  h-[32px]  rounded-[4px]" type="text" {...formik.getFieldProps("CompanyActivity")} />
          {formik.touched.CompanyActivity && formik.errors.CompanyActivity ? (
            <span className="text-red-500 text-xs">{formik.errors.CompanyActivity}</span>
          ) : null}
        </div>
        <div className="w-full md:w-1/2">
          <label className="mb-2 block text-sm">{t("Explore-form-NumberOfCompanyMembers")} </label>
          <input placeholder="ادخل نشاط الشركة" className="w-full  border px-5 py-2 text-xs  h-[32px]  rounded-[4px]" type="number" {...formik.getFieldProps("NumberOfCompanyMembers")} />
          {formik.touched.NumberOfCompanyMembers && formik.errors.NumberOfCompanyMembers ? (
            <span className="text-red-500 text-xs">{formik.errors.NumberOfCompanyMembers}</span>
          ) : null}
        </div>
      </div>
        <div className="flex w-fit items-end mt-9">
        <button 
          type="submit"
          className="leading-normal text-[16px] text-white bg-custom-btn hover:bg-custom-btn-hover flex justify-center items-center w-[109px] h-[36px] rounded-[4px] cursor-pointer"
          disabled={formik.isSubmitting}>
          {formik.isSubmitting ? (
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          ) : <div className="flex text-base items-center gap-3"><Image width={20} height={20} src={send}  alt="send" />
           {/* {t("Explore-form-submit")} */}
           </div> }
        </button>            
        </div>
    </div>
  </form>
  )
}

export default FormData