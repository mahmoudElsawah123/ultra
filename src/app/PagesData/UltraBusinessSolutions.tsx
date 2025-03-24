import BtnUp from '@/app/components/BtnUp'
import { Contact } from '@/app/components/HomePage'
import { UltraBusinessSolutionsHeroSection, UltraBusinessSolutionsSection1, UltraBusinessSolutionsSection2, UltraBusinessSolutionsSection3, UltraBusinessSolutionsSection4 } from '@/app/components/SubPages/SolutionsPages/UltraBusinessSolutionsPages'
import React from 'react'


const UltraBusinessSolutions = () => {
  return (
<div className='mt-[74px]'>
<BtnUp/>
      <UltraBusinessSolutionsHeroSection/>
      <UltraBusinessSolutionsSection1/>
      <UltraBusinessSolutionsSection2/>
      <UltraBusinessSolutionsSection3/>
      <UltraBusinessSolutionsSection4/>
      <Contact/>
</div>
  )
}

export default UltraBusinessSolutions