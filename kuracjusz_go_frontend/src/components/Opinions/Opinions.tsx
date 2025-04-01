import Opinion from "./Opinion";
export type OpinionsType = {
  id: number;
  userName: string;
  comment: string;
  rating: number;
};

const opinions: OpinionsType[] = [
  {
    id: 1,
    userName: "Zdzislaw",
    comment: "Grazyna kocha mnie",
    rating: 7,
  },
  {
    id: 2,
    userName: "Halinka",
    comment: "Super ekstra sprawa",
    rating: 9,
  },
  {
    id: 3,
    userName: "Grazyna",
    comment: "Zajerzyste",
    rating: 5,
  },
];

export default function Opinions() {
  return (
    <div className="flex justify-between gap-4 absolute left-[-8rem] top-[80%]">
      {opinions.map((opinion) => (
        <Opinion key={opinion.id} opinion={opinion} />
      ))}
    </div>
  );
}
