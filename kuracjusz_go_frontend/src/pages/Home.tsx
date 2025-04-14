import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
import landingPageImg from "../assets/background.webp";
const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <div
        className="w-screen h-screen bg-no-repeat bg-cover bg-center absolute  brightness-[0.3] top-0 left-0 z-[-1]"
        style={{ backgroundImage: `url(${landingPageImg})` }}
      >
        
      </div>
    </>
  );
};

export default Home;
