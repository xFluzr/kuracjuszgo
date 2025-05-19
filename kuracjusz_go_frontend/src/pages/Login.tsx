import AuthForm from "../components/AuthForm/AuthForm";
import Navbar from "../components/Navbar/Navbar";
import bgIMG from "../assets/loginBG.svg";
const Login = () => {
  return (
    <>
      <Navbar />
      <main className="flex  h-3/4 items-center justify-center">
        <AuthForm />
      </main>
      <div className="w-full absolute left-0 top-0 -z-10">
        <img src={bgIMG} alt="bg-img" className="w-full h-full block object-cover" />
      </div>
    </>
  );
};

export default Login;
