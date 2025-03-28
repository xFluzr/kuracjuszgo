import NavbarLinks from "./NavbarLinks/NavbarLinks";
import logo from "../../assets/logoNavbar.svg";
import { Link } from "react-router-dom";

const links = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "About Us",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between py-12 ">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <NavbarLinks links={links} />
    </nav>
  );
}
