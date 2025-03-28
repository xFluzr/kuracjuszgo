import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  link: string;
  isActive?: boolean;
};
export default function Button({ text, link }: ButtonProps) {
  return (
    <Link
      to={`/${link}`}
      className="rounded-xl bg-slate-600 text-white px-24 mt-20 py-6 font-bold text-2xl"
    >
      {text}
    </Link>
  );
}
