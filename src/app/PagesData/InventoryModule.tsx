import BtnUp from '@/app/components/BtnUp'
import { InventoryHeroSection, InventorySection1, InventorySection2, InventorySection3, InventorySection4 } from '@/app/components/SubPages/UltraSubPages/InventoryPages'
import React from 'react'


const InventoryModule = () => {
  return (
    <div className='mt-[74px]'>
      <BtnUp/>
      <InventoryHeroSection/>
      <InventorySection1/>
      <InventorySection2/>
      <InventorySection3/>
      <InventorySection4/>
    </div>
  )
}

export default InventoryModule