import NavbarLinks from "./NavbarLinks/NavbarLinks";
import logo from '../../assets/logoNavbar.svg'

const links=[
    {
        label:'About Us',
        href:'/about'
    },
    {
        label:'About Us',
        href:'/about'
    },
    {
        label:'About Us',
        href:'/about'
    }
]

export default function Navbar(){
    return(
        <nav className="flex justify-between py-12 ">
            <div>
               <img src={logo} alt=""/>
            </div>
            <NavbarLinks links={links} />
        </nav>
    );
}