import { Link } from "react-router-dom";

type NavbarLinksProps = {
  links: { label: string; href: string }[];
};
export default function NavbarLinks({ links }: NavbarLinksProps) {
  return (
    <ul className="flex flex-row gap-4 font-bold flex-1 justify-center ">
      {links.map((link, index) => (
        <li
          className=" flex justify-center items-center px-2 rounded-lg transition-all hover:shadow-sm"
          key={index}
        >
          <Link className="text-dark text-4xl" to={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
