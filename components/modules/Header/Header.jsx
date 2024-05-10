import Navbar from "@/components/elements/Navbar/Navbar";
import RightSide from "@/components/elements/RightSide/RightSide";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header__container">
      <Link href="/" className="header__logo"><img src="./img/logo.svg" alt="Umnoj logo" /></Link>
      <Navbar />
      <RightSide />
    </header>
  )
}

export default Header;