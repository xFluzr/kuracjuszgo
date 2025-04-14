import NavbarLinks from "./NavbarLinks/NavbarLinks";
import logo from "../../assets/logoNavbar.svg";
import { Link } from "react-router-dom";

const links = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Get Started",
    href: "/login",
  },
  {
    label: "About Us",
    href: "/about",
  },
  
];

export default function Navbar() {
  return (
    <nav className="flex justify-between py-12 z-10 relative text-beige-0  text-center">
      <div className="flex-1">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <NavbarLinks links={links} />
      <ul className="flex-1 flex text-4xl justify-center gap-4 items-center">
        <li>Tiktok</li> 
        <li>Insta</li> 
        <li>Face</li> 
      </ul>
    </nav>
  );
}
