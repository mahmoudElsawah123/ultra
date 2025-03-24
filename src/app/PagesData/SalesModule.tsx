import BtnUp from '@/app/components/BtnUp'
import { SalesHeroSection, SalesSection1, SalesSection2, SalesSection3, SalesSection4 } from '@/app/components/SubPages/UltraSubPages/SalesPages'
import React from 'react'


const SalesModule = () => {
  return (
    <div className='mt-[74px]'>
      <BtnUp/>
      <SalesHeroSection/>
      <SalesSection1/>
      <SalesSection2/>
      <SalesSection3/>
      <SalesSection4/>
    </div>
  )
}

export default SalesModule