import Button from "../Button/Button";

export default function LandingPage() {
  return (
    <main className="flex items-center justify-start w-full h-[calc(100%-20rem)]">
      <div className="w-1/2 flex flex-col justify-center  items-start">
        <h1 className="text-8xl  font-bold leading-[1.1]">
          <span className="text-green-500">Zmotywuj</span> Się
          <br />
          Do <span className="text-orange-400">Zdrowia</span>
        </h1>
        <Button link="login" text="Zacznij Zmianę" />
      </div>
      <div className="w-1/2"></div>
    </main>
  );
}
