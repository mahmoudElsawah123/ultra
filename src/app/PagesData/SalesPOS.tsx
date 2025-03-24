import BtnUp from '@/app/components/BtnUp'
import { SalesPosHeroSection, SalesPosSection1, SalesPosSection2, SalesPosSection3, SalesPosSection4 } from '@/app/components/SubPages/UltraSubPages/SalesPosPages'
import React from 'react'



const SalesPOS = () => {
  return (
<div className='mt-[74px]'>
    <BtnUp/>
    <SalesPosHeroSection />
    <SalesPosSection1 />
    <SalesPosSection2 />
    <SalesPosSection3 />
    <SalesPosSection4 />
</div>
  )
}

export default SalesPOS