import NavbarLinks from "./NavbarLinks/NavbarLinks";
import logo from "../../assets/logoNavbar.svg";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TikTokIcon from "@mui/icons-material/MusicNote"; //

const links = [
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
      <Box
        sx={{ flex: 1, display: "flex", justifyContent: "flex-end", gap: 1 }}
      >
        <IconButton color="inherit" aria-label="Instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="TikTok">
          <TikTokIcon />
        </IconButton>
      </Box>
    </nav>
  );
}
