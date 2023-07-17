import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <Link href="/" passHref>
          <div className="logo cursor-pointer">
            <Image src="/p8Wordmark_sm.svg" layout="fill" alt="Produce8 logo" />
          </div>
        </Link>
        <FiMenu size={30} className="text-grey cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
