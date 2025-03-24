import BtnUp from '@/app/components/BtnUp'
import { CostCenterHeroSection, CostCenterSection1, CostCenterSection2, CostCenterSection3 } from '@/app/components/SubPages/UltraSubPages/CostCenters'
import React from 'react'


const CostCenter = () => {
  return (
<div className='mt-[74px]'>
    <BtnUp/>
    <CostCenterHeroSection/>
    <CostCenterSection1/>
    <CostCenterSection2/>
    <CostCenterSection3/>
</div>
  )
}

export default CostCenter