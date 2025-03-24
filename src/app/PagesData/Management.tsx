
import BtnUp from '@/app/components/BtnUp'
import { ManagementHeroSection, ManagementSection1, ManagementSection2, ManagementSection3 } from '@/app/components/SubPages/UltraSubPages/ManagementAndLinking'
import React from 'react'


const Management = () => {
  return (
<div className='mt-[74px]'>
<BtnUp/>
      <ManagementHeroSection/>
      <ManagementSection1/>
      <ManagementSection2/>
      <ManagementSection3/>
</div>
  )
}

export default Management