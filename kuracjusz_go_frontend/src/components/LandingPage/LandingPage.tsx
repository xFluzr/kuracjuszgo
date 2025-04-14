import CtaBtn from "../CTABtn/CtaBtn";


export default function LandingPage() {
  return (
    <main className="flex items-center justify-start w-full h-full z-10 relative">
      <div className="w-full flex flex-col text-center justify-center  items-center">
        <h1 className="text-9xl font-main text-beige-0 font-bold leading-[1.1]">
          <span className="text-light_orange-0 ">Zmotywuj Się</span> 
          <br />
          Do Zdrowia
        </h1>
        <CtaBtn link="login" text="Zacznij Zmianę" />
      </div>
     
    </main>
  );
}
