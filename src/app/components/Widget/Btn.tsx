import Link from "next/link";

const Btn = ({Explore,GitInTouch,style}:{ Explore: string; GitInTouch: string; style:string }) => {
  return (
    <div>
        {Explore !== "" ? <Link href={"/Explore-Now"} className={`${style} border leading-[120%] text-sm md:text-lg font-medium py-[6px] px-[24px] rounded-[6px] bg-custom-btn hover:bg-custom-btn-hover text-white flex w-fit items-center h-[48px] justify-center`}>{Explore}</Link> : ""}
        {GitInTouch !== "" ? <Link href={"/free-trial"} className={`${style}  leading-[120%] text-sm md:text-lg font-medium py-[6px] px-[24px] rounded-[6px] bg-custom-btn hover:bg-custom-btn-hover text-white flex w-fit items-center h-[48px] justify-center`}>{GitInTouch}</Link> : ""}
    </div>
  )
}

export default Btn