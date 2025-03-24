interface IHeroSectionHeading {
    head1:string
    head2:string
}
const HeroSectionHeading:React.FC<IHeroSectionHeading> = ({head1,head2}) => {
  return (
    <div>
        <h1 className={`text-[28px] md:text-[42px] text-white mb-8 font-bold  leading-[120%] `}><span>{head1}</span> <span className="text-[#0EC2A7]">{head2}</span></h1>
    </div>
  )
}

export default HeroSectionHeading