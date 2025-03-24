import BtnUp from '@/app/components/BtnUp'
import { Contact } from '@/app/components/HomePage'
import { ElectronicInvoiceHeroSection, ElectronicInvoiceSection1, ElectronicInvoiceSection2 } from '@/app/components/SubPages/SolutionsPages/ElectronicInvoicePages'
import React from 'react'



const ElectronicInvoice = () => {
  return (
    <div className='mt-[74px]'>
            <BtnUp/>
      <ElectronicInvoiceHeroSection/>
      <ElectronicInvoiceSection1/>
      <ElectronicInvoiceSection2/>
      <Contact/>
    </div>
  )
}

export default ElectronicInvoice