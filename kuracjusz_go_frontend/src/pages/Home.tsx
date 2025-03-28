import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="lg:px-24 md:px-12 max-sm:px-4 w-full h-full">
      <Navbar/>
      <LandingPage/>
    </div>
  );
};

export default Home;
