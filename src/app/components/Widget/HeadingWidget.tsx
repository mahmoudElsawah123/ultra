
const HeadingWidget = ({head,style}:{head:string,style:string}) => {
  return (
    <div className="">
        <h2 className={`${style} mb-5 text-custom-black  leading-[120%]`}>{head}</h2>
    </div>
  )
}

export default HeadingWidget