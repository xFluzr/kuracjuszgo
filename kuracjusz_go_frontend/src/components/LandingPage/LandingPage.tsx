import Button from "../Button/Button";
import landingPageImg from "../../assets/logoLanding.webp";
import Opinions from "../Opinions/Opinions";
export default function LandingPage() {
  return (
    <main className="flex items-center justify-start w-full h-full">
      <div className="w-1/2 flex flex-col justify-center  items-start">
        <h1 className="text-8xl  font-bold leading-[1.1]">
          <span className="text-green-500">Zmotywuj</span> Się
          <br />
          Do <span className="text-orange-400">Zdrowia</span>
        </h1>
        <Button link="login" text="Zacznij Zmianę" />
      </div>
      <div className="w-1/2  flex flex-col justify-center h-[calc(100vh-12rem)] relative">
        <img
          className="w-full h-full object-cover rounded-xl bg-cover bg-no-repeat"
          src={landingPageImg}
          alt="landingPage image"
        />
        <Opinions/>
      </div>
    </main>
  );
}
