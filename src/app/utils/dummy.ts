import { FaLongArrowAltLeft } from "react-icons/fa";
import { 
  IBlogSectionData, 
  IBrandSectionBoxData, 
  IBrandSectionData, 
  INavLinksData, 
  IServicesData, 
  IUltraSectionData, 
  IUltraSolutionData 
} from "../types/pageTypes";

const assets = {
  blogs: {
    blog1: "/assets/Blog/blog1.webp",
    blog2: "/assets/Blog/blog2.webp",
    blog3: "/assets/Blog/blog3.webp",
  },
  brands: {
    Capital: "/assets/Brand/Capital.png",
    Hermes: "/assets/Brand/Hermes.png",
    Hsbc: "/assets/Brand/Hsbc.png",
    Nova: "/assets/Brand/Nova.png",
    Pfizer: "/assets/Brand/Pfizer.png",
    Trivago: "/assets/Brand/Trivago.png",
    Zera: "/assets/Brand/Zera.png",
    Air: "/assets/Brand/Air.png",
    Expedia: "/assets/Brand/Expedia.png",
    customer1: "/assets/Brand/customer1.png",
    customer2: "/assets/Brand/customer2.png",
  },
  services: {
    Services1: "/assets/Services/Services1.png",
    Services2: "/assets/Services/Services2.png",
    Services3: "/assets/Services/Services3.png",
    Services4: "/assets/Services/Services4.png",
    Services5: "/assets/Services/Services5.png",
    Services6: "/assets/Services/Services6.png",
    Services7: "/assets/Services/Services7.png",
  },
  customer: {
    Services1: "/assets/",
    Services2: "/assets/Services/Services2.png",
    Services3: "/assets/Services/Services3.png",
    Services4: "/assets/Services/Services4.png",
    Services5: "/assets/Services/Services5.png",
    Services6: "/assets/Services/Services6.png",
    Services7: "/assets/Services/Services7.png",
  },
  subPages: {
    icon1: "/assets/subPages/icon1.png",
    icon2: "/assets/subPages/icon2.png",
    icon3: "/assets/subPages/icon3.png",
    icon4: "/assets/subPages/icon4.png",
  },
};
export const UltraSectionData:IUltraSectionData[] = [
  { img:"/assets/UltraSection/نظام الحسابات.png",headKey: "Ultra-box1-head", pKey: "Ultra-box1-p", btnKey: "Ultra-box1-btn",btnIcon:FaLongArrowAltLeft,url:"/accounting-module"  },
  { img:"/assets/UltraSection/نظام المخازن.png",headKey: "Ultra-box2-head", pKey: "Ultra-box2-p", btnKey: "Ultra-box2-btn",btnIcon:FaLongArrowAltLeft,url:"/inventory-module" },
  { img:"/assets/UltraSection/نظام المبيعات.png",headKey: "Ultra-box3-head", pKey: "Ultra-box3-p", btnKey: "Ultra-box3-btn",btnIcon:FaLongArrowAltLeft,url:"/sales-module" },
  { img:"/assets/UltraSection/نظام التصنيع.png",headKey: "Ultra-box4-head", pKey: "Ultra-box4-p", btnKey: "Ultra-box4-btn",btnIcon:FaLongArrowAltLeft,url:"/manufacture-module" },
  { img:"/assets/UltraSection/نظام نقطة البيع.png",headKey: "Ultra-box5-head", pKey: "Ultra-box5-p", btnKey: "Ultra-box5-btn",btnIcon:FaLongArrowAltLeft,url:"/point-of-sale-module"  },
  { img:"/assets/UltraSection/نظام المدفوعات والاوراق المالية.png",headKey: "Ultra-box6-head", pKey: "Ultra-box6-p", btnKey: "Ultra-box6-btn",btnIcon:FaLongArrowAltLeft,url:"/note-payables-module" },
  { img:"/assets/UltraSection/مراكز.png",headKey: "Ultra-box7-head", pKey: "Ultra-box7-p", btnKey: "Ultra-box7-btn",btnIcon:FaLongArrowAltLeft,url:"/cost-center-module" },
  { img:"/assets/UltraSection/الادارة.png",headKey: "Ultra-box8-head", pKey: "Ultra-box8-p", btnKey: "Ultra-box8-btn",btnIcon:FaLongArrowAltLeft,url:"/replication-system" },
  { img:"/assets/UltraSection/الربط.png",headKey: "Ultra-box9-head", pKey: "Ultra-box9-p", btnKey: "Ultra-box9-btn",btnIcon:FaLongArrowAltLeft,url:"/egypt-tax-integration" }
]
export const ServicesSectionData: IServicesData[] = [
  { img: assets.services.Services1, headKey: "services-box1-head", pKey: "services-box1-p", btnKey: "services-box1-btn", btnIcon: FaLongArrowAltLeft, url: "/WebsiteDevelopment" },
  { img: assets.services.Services2, headKey: "services-box2-head", pKey: "services-box2-p", btnKey: "services-box2-btn", btnIcon: FaLongArrowAltLeft, url: "/MobileApp" },
  { img: assets.services.Services3, headKey: "services-box3-head", pKey: "services-box3-p", btnKey: "services-box3-btn", btnIcon: FaLongArrowAltLeft, url: "/BusinessSolutions" },
  { img: assets.services.Services4, headKey: "services-box4-head", pKey: "services-box4-p", btnKey: "services-box4-btn", btnIcon: FaLongArrowAltLeft, url: "/CloudSolutions" },
  { img: assets.services.Services5, headKey: "services-box5-head", pKey: "services-box5-p", btnKey: "services-box5-btn", btnIcon: FaLongArrowAltLeft, url: "/ITSupport" },
  { img: assets.services.Services6, headKey: "services-box6-head", pKey: "services-box6-p", btnKey: "services-box6-btn", btnIcon: FaLongArrowAltLeft, url: "/CybersecuritySolutions" },
  { img: assets.services.Services7, headKey: "services-box7-head", pKey: "services-box7-p", btnKey: "services-box7-btn", btnIcon: FaLongArrowAltLeft, url: "/AccountModule" },
];


export const navLinks:INavLinksData[] = [
    {link:"Ultra-Account-Module",url:"/accounting-module"},
    {link:"Ultra-InventoryModule",url:"/inventory-module"},
    {link:"Ultra-SalesModule",url:"/sales-module"},
    {link:"Ultra-Manufacturing-Module",url:"/manufacture-module"},
    {link:"Ultra-Sales-POS",url:"/point-of-sale-module"},
    {link:"Ultra-Records-And-Securities",url:"/note-payables-module"},
    {link:"Ultra-Cost-Center",url:"/cost-center-module"},
    {link:"Ultra-Management",url:"/replication-system"},
    {link:"Ultra-Linkage-With-Taxes",url:"/egypt-tax-integration"},
]
export const BlogSectionData: IBlogSectionData[] = [
  { img: assets.blogs.blog1, headKey: "blog-box1-head", pKey: "blog-box1-p", btnKey: "blog-box1-btn", btnIcon: FaLongArrowAltLeft },
  { img: assets.blogs.blog2, headKey: "blog-box2-head", pKey: "blog-box2-p", btnKey: "blog-box2-btn", btnIcon: FaLongArrowAltLeft },
  { img: assets.blogs.blog3, headKey: "blog-box3-head", pKey: "blog-box3-p", btnKey: "blog-box3-btn", btnIcon: FaLongArrowAltLeft },
];
export const brandSectionData:IBrandSectionData[] = [
    { img:assets.brands.Pfizer,height:"30px"},
    { img:assets.brands.Expedia,height:"20px"},
    { img:assets.brands.Air,height:"48px"},
    { img:assets.brands.Hsbc,height:"24px"},
    { img:assets.brands.Zera,height:"30px"},
    { img:assets.brands.Hermes,height:"37px"},
    { img:assets.brands.Trivago,height:"25px"},
    { img:assets.brands.Nova,height:"48px"},
    { img:assets.brands.Capital,height:"48px"},
]
export const brandSectionBoxData:IBrandSectionBoxData[] = [
    { img:assets.brands.customer1,name: "brand-box1-name", pKey: "brand-box1-p", job: "brand-box1-job",},
    { img:assets.brands.customer1,name: "brand-box2-name", pKey: "brand-box2-p", job: "brand-box2-job", },
    { img:assets.brands.customer2,name: "brand-box3-name", pKey: "brand-box3-p", job: "brand-box3-job",},
    { img:assets.brands.customer1,name: "brand-box4-name", pKey: "brand-box4-p", job: "brand-box4-job", },

]

export const UltraSolutionsData:IUltraSolutionData[] = [
    {
      img:assets.subPages.icon3,
      headKey: "UltraBusinessSolutions5-box1-head",
      p:"UltraBusinessSolutions5-box1-p",
    },
    {
      img:assets.subPages.icon2,
      headKey: "UltraBusinessSolutions5-box2-head",
      p:"UltraBusinessSolutions5-box2-p",
    },
    {
      img:assets.subPages.icon3,
      headKey: "UltraBusinessSolutions5-box3-head",
      p:"UltraBusinessSolutions5-box3-p",
    },
    {
      img:assets.subPages.icon4,
      headKey: "UltraBusinessSolutions5-box4-head",
      p:"UltraBusinessSolutions5-box4-p",
    },
    {
      img:assets.subPages.icon1,
      headKey: "UltraBusinessSolutions5-box5-head",
      p:"UltraBusinessSolutions5-box5-p",
    },
    {
      img:assets.subPages.icon2,
      headKey: "UltraBusinessSolutions5-box6-head",
      p:"UltraBusinessSolutions5-box6-p",
    },
  ];
  


