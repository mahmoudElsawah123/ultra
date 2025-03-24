interface IHeading{
  head:string
  p:string
  style:string
}

const Heading:React.FC<IHeading> = ({head,p,style}) => {
  return (
    <div className={``}>
        <h2 className={`${style === "text-white" ? "text-white" : ""} leading-[120%] mb-4 text-custom-black text-2xl md:text-3xl  lg:text-4xl font-medium`}>{head}</h2>
        <p className={`${style === "text-white" ? "text-white" : ""} leading-[140%] h-[56px] mb-5 text-custom-black text-lg md:text-xl font-light`}>{p}</p>
    </div>
  )
}

export default Heading