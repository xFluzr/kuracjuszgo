import AuthForm from "../components/AuthForm/AuthForm";
import Navbar from "../components/Navbar/Navbar";
import bgIMG from "../assets/loginBG.svg";

const Login = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <main className="flex min-h-[calc(100vh-64px)] w-full items-center justify-center">
        <AuthForm />
      </main>
      <div className="absolute inset-0 -z-10">
        <img src={bgIMG} alt="bg-img" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
