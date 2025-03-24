"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import Heading from "../Heading";
import Image from "next/image";
import { BlogSectionData } from "@/app/utils/dummy";


const BlogSection = () => {
 const t  = useTranslations("homePage");
  return (
    <section className="py-[96px] hidden bg-white ">
        <div className="container">
          <div className="text-center mb-12 lg:mb-0">
            <Heading head={t("blog-head")} p={t("blog-p")} style={""} />
          </div>
          <div className="flex flex-wrap gap-6">
            {BlogSectionData.map((ele,ind)=>(
              <div key={ind} className='box w-full mt-5 sm:mt-0 sm:w-[47.8%] md:w-[48%] lg:w-[31.5%] shadow-2xl rounded-[6px]'>
                <div className="p-2">
                  <Image height={100} width={100} src={ele.img} className=" h-[100px]" alt="" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl text-custom-black leading-[120%] font-medium ">{t(ele.headKey)}</h2>
                  <p className="text-lg text-custom-black leading-[150%] font-light my-4">{t(ele.pKey)}</p>
                  <Link href="" className="flex gap-4 items-center text-seeMore-blue">{t(ele.btnKey)} <span className="">{<ele.btnIcon/>}</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default BlogSection
