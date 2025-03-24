"use client"

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
const send = "/assets/Contact/send.png" 

const ContactData = () => {
    const router = useRouter();
    const t  = useTranslations("homePage");
    const labelStyle = "font-normal text-[#1B1616] text-[14px] leading-normal"
    const validationSchema = Yup.object({
        firstName: Yup.string().required(t("contact-form-first-name") + " " + t("required")),
        lastName: Yup.string().required(t("contact-form-last-name") + " " + t("required")),
        email: Yup.string().email(t("invalid-email")).required(t("contact-form-email") + " " + t("required")),
        phone: Yup.string().matches(/^\d+$/, t("invalid-phone")).required(t("contact-form-phone-number") + " " + t("required")),
        company: Yup.string().required(t("contact-form-company") + " " + t("required")),
        website: Yup.string().url(t("invalid-url")).nullable(),
        message: Yup.string().required(t("contact-form-textArea") + " " + t("required")),
        services: Yup.array().min(1, t("choseOne")),   
    });
    const formik = useFormik({
        initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        message: "",
        services: [] as string[],
        type:0
    },
        validationSchema,
        onSubmit: async (values, { resetForm,setSubmitting }) => {
            try {
                const payload = {
                    type: values.type,
                    first_name: values.firstName,
                    last_name: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    company: values.company,
                    website: values.website || "",
                    services: values.services.join(" ،"), 
                    message: values.message
                };
                const response = await fetch("https://ultrasoftsolutions.com/mail/send_email.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });
                const data = await response.json();
                if (data.success) {
                    toast.success("🚀 تم إرسال البيانات بنجاح!", { position: "top-center" });
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
    const serviceOptions = [
        { id: "Business", label: t("contact-form-check1") },
        { id: "Website", label: t("contact-form-check2") },
        { id: "Cloud", label: t("contact-form-check3") },
        { id: "Automation", label: t("contact-form-check4") },
        { id: "Mobile", label: t("contact-form-check5") },
        { id: "It", label: t("contact-form-check6") },
        { id: "SEO", label: t("contact-form-check7") },
        { id: "Cyber", label: t("contact-form-check8") },
        { id: "Design", label: t("contact-form-check9") },
    ];

  return (
<form action="" onSubmit={formik.handleSubmit} className=" max-w-[1185px]">
<ToastContainer />
    <div>
        <div className="sm:flex gap-6 mb-[18px]">
            <div className="flex flex-col max-sm:mb-3 sm:w-[49%]">
                <label className="mb-[6px] text-sm" htmlFor="firstName">{t("contact-form-first-name")}</label>
                <input placeholder="ادخل الاسم الاول" className="h-[36px] p-[6px] text-xs  rounded-[4px]" style={{border: "0.75px solid #D9D9D9"}} type="text" {...formik.getFieldProps("firstName")} id="firstName" />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <span className="text-red-500 text-xs">{formik.errors.firstName}</span>
                ) : null}
            </div>
            <div className="flex flex-col max-sm:mb-3 sm:w-[49%]">
                <label className="mb-[6px] text-sm" htmlFor="lastName">{t("contact-form-last-name")}</label>
                <input placeholder="ادخل اسم الاخير" className="h-[36px] p-[6px] text-xs  rounded-[4px]" style={{border: "0.75px solid #D9D9D9"}} type="text" {...formik.getFieldProps("lastName")} id="lastName" />
                {formik.touched.lastName && formik.errors.lastName && (
                    <span className="text-red-500 text-xs">{formik.errors.lastName}</span>
                )}
            </div>
        </div>
        <div className="sm:flex gap-6 mb-[18px]">
            <div className="flex flex-col max-sm:mb-3  sm:w-[49%]">
                <label className="mb-[6px] text-sm" htmlFor="email">{t("contact-form-email")}</label>
                <input placeholder="ادخل البريد الالكتروني" className="h-[36px] p-[6px] text-xs   rounded-[4px]" style={{border: "0.75px solid #D9D9D9"}} type="email"    {...formik.getFieldProps("email")} id="email" />
                {formik.touched.email && formik.errors.email && (
                    <span className="text-red-500 text-xs">{formik.errors.email}</span>
                )} </div>
            <div className="flex flex-col max-sm:mb-3  sm:w-[49%]">
                <label className="mb-[6px] text-sm" htmlFor="phone">{t("contact-form-phone-number")}</label>
                <input placeholder="ادخل رقم الهاتف" className="h-[36px] p-[6px] text-xs   rounded-[4px]" style={{border: "0.75px solid #D9D9D9"}} type="number"    {...formik.getFieldProps("phone")} id="phone" />
                {formik.touched.phone && formik.errors.phone && (
                    <span className="text-red-500 text-xs">{formik.errors.phone}</span>
                )}
            </div>
        </div>
        <div className="sm:flex gap-6 mb-10">
            <div className="flex flex-col max-sm:mb-3  sm:w-[49%]">
                <label className="mb-[6px] text-sm" htmlFor="company">{t("contact-form-company")}</label>
                <input placeholder="ادخل اسم الشركة" className="h-[36px] p-[6px] text-xs  rounded-[4px]" style={{border: "0.75px solid #D9D9D9"}} type="text"    {...formik.getFieldProps("company")} id="company" />
                {formik.touched.company && formik.errors.company && (
                    <span className="text-red-500 text-xs">{formik.errors.company}</span>
                )}
            </div>
            <div className="flex flex-col max-sm:mb-3  sm:w-[49%]">
                <label className="mb-[6px] text-sm" htmlFor="website">{t("contact-form-website")} <span className="text-[#7591B9]">(اختيارى)</span></label>
                <input placeholder="ادخل الموقع" className="h-[36px]  p-[6px] text-xs  rounded-[4px]" style={{border: "0.75px solid #D9D9D9"}} type="text"    {...formik.getFieldProps("website")} id="website" />
            </div>
        </div>
    </div>
    <div className="mb-5">
        <h2 className="text-[#1B1616] leading-normal text-base font-medium mb-3">{t("contact-form-head")}</h2>
        <div className=" flex flex-wrap  sm:gap-3">
            {serviceOptions.map((service) => (
                <div key={service.id} className="box w-full sm:w-[31%]">
                    <div className="flex items-center gap-2 mb-3">
                        <input
                                    type="checkbox"
                                    id={service.id}
                                    name="services"
                                    className="w-4 h-4 rounded-[2.4px] "
                                    style={{ border: "1.231px solid #1B1616" }}
                                    onChange={formik.handleChange}
                                    checked={formik.values.services.includes(service.id)}
                                    value={service.id}
                        />
                        <label htmlFor={service.id} className={labelStyle}>{service.label}</label>
                    </div>
                </div>
            ))}
        </div>
        {formik.touched.services && formik.errors.services && (
            <span className="text-red-500 text-sm">{formik.errors.services}</span>
        )}
    </div>
    <div className="mb-6">
        <span className="">{t("contact-form-textArea")}</span>
        <textarea  {...formik.getFieldProps("message")} className="h-[104px] mt-2 w-full rounded-[3px] px-5 py-2" style={{border: "0.75px solid #D9D9D9",resize:"none"}}></textarea>
        {formik.touched.message && formik.errors.message && (
            <span className="text-red-500 text-xs">{formik.errors.message}</span>
        )}
    </div>
    <button type="submit" className="leading-normal text-[16px] text-white bg-custom-btn hover:bg-custom-btn-hover flex justify-center items-center w-[109px] h-[36px] rounded-[4px] cursor-pointer"
        disabled={formik.isSubmitting}>
        {formik.isSubmitting ? (
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
        ) : <div className="flex text-base items-center gap-3"><Image width={20} height={20} src={send} className="w-5 h-5" alt="send" /> {t("contact-form-submit")}</div>}
    </button>
</form>
  )
}

export default ContactData