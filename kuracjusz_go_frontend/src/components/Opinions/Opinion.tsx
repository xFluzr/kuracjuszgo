import { OpinionsType } from "./Opinions";
type OpionProps = {
  opinion: OpinionsType;
};


export default function Opinion({ opinion }: OpionProps) {
  return (
    <div className="bg-white rounded-xl text-xl font-bold border-black border-[4px] px-32 py-8">
      {opinion.userName}
      <img className="w-full" src={`https://randomuser.me/api/portraits/med/men/1.jpg`}/>
    </div>
  );
}
