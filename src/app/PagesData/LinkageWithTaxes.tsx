import BtnUp from '@/app/components/BtnUp'
import { TaxesHeroSection, TaxesSection1, TaxesSection2 } from '@/app/components/SubPages/UltraSubPages/LinkageWithEgyptianTaxes'
import TaxesSection3 from '@/app/components/SubPages/UltraSubPages/LinkageWithEgyptianTaxes/TaxesSection3'
import React from 'react'



const LinkageWithTaxes = () => {
  return (
<div className='mt-[74px]'>
    <BtnUp/>
    <TaxesHeroSection/>
    <TaxesSection1/>
    <TaxesSection2/>
    <TaxesSection3/>
</div>
  )
}

export default LinkageWithTaxes