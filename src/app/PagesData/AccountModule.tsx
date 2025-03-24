import BtnUp from '@/app/components/BtnUp'
import { AccountHeroSection, AccountSection1, AccountSection2, AccountSection3, AccountSection4, AccountSection5, AccountSection6 } from '@/app/components/SubPages/UltraSubPages/AccountPages'
import AccountSection7 from '@/app/components/SubPages/UltraSubPages/AccountPages/AccountSection7'
import AccountSection8 from '@/app/components/SubPages/UltraSubPages/AccountPages/AccountSection8'
import React from 'react'
const AccountModule = () => {
  return (
    <div className='mt-[74px]'>
        <BtnUp/>
        <AccountHeroSection/>
        <AccountSection1/>
        <AccountSection2/>
        <AccountSection3/>
        <AccountSection4/>
        <AccountSection5/>
        <AccountSection6/>
        <AccountSection7/>
        <AccountSection8/>
    </div>
  )
}
export default AccountModule