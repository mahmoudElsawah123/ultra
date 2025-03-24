import React from 'react'
import NavbarLogo from './HeaderSub/NavbarLogo'
import NavbarLinksData from './HeaderSub/NavbarLinksData'
import NavbarLang from './HeaderSub/NavbarLang'

const Header = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white z-50 ' style={{boxShadow:" 0px 4px 15px 0px rgba(0, 0, 0, 0.05)"}}>
      <div className="container mx-auto flex justify-between items-center h-[74px]">
      <NavbarLogo/>
      <NavbarLinksData/>
      <NavbarLang/>
      </div>
    </nav>
  )
}

export default Header