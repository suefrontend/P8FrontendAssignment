import Image from "next/image";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Image src="/p8Wordmark_sm.svg" layout="fill" alt="Produce8 logo" />
        </div>
        <FiMenu size={30} className="text-grey cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
