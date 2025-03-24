"use client";

import Image from "next/image";
import Link from "next/link";
const logo = "/assets/logo/logo1.png";

const NavbarLogo = () => {
  return (
    <div>
      <Link href="/" className="flex gap-2">
        <Image src={logo} alt="logo" width={157} height={40} />
      </Link>
    </div>
  );
};

export default NavbarLogo;