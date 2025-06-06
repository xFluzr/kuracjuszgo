import { Link } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
      className={`${customClasses?customClasses:"rounded-xl font-main bg-slate-600 text-white px-24 mt-20 tracking-wider flex justify-center items-center gap-2 py-6 font-bold text-4xl shadow-lg"}`}
    >
      {text}<PlayArrowIcon style={{scale:1.5}}/>
    </Link>
  );
}
