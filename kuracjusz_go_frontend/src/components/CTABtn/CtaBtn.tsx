import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  link: string;
  isActive?: boolean;
  customClasses?:string;
};
export default function CtaBtn({ text, link,customClasses}: ButtonProps) {
  return (
    <Link
      to={`/${link}`}
      className={`${customClasses?customClasses:"rounded-xl bg-slate-600 text-white px-24 mt-20 tracking-wider py-6 font-bold text-4xl"}`}
    >
      {text}
    </Link>
  );
}
