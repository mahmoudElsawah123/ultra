import BtnUp from '@/app/components/BtnUp'
import { RecordsHeroSection, RecordsSection1, RecordsSection2, RecordsSection3,RecordsSection4 } from '@/app/components/SubPages/UltraSubPages/RecordsAndSecurities'
import React from 'react'


const RecordsAndSecurities = () => {
  return (
    <div className='mt-[74px]'>
      <BtnUp/>
      <RecordsHeroSection/>
      <RecordsSection1/>
      <RecordsSection2/>
      <RecordsSection3/>
      <RecordsSection4/>
    </div>
  )
}

export default RecordsAndSecurities