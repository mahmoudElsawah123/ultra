import BtnUp from '@/app/components/BtnUp'
import { ManufacturingHeroSection, ManufacturingSection1, ManufacturingSection2, ManufacturingSection3, ManufacturingSection4 } from '@/app/components/SubPages/UltraSubPages/ManufacturingPages'
import React from 'react'



const ManufacturingModule = () => {
  return (
    <div className='mt-[74px]'>
      <BtnUp/>
      <ManufacturingHeroSection/>
      <ManufacturingSection1/>
      <ManufacturingSection2/>
      <ManufacturingSection3/>
      <ManufacturingSection4/>
    </div>
  )
}

export default ManufacturingModule