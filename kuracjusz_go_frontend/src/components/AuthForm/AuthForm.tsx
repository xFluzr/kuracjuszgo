import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import UserInput from "./UserInput";
import CtaBtn from "../CTABtn/CtaBtn";

export default function AuthForm() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(passwordRef.current?.value);
    console.log(userNameRef.current?.value);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-center items-center gap-8 md-gap px-24 bg-white py-12 rounded-lg relative"
    >
      <h2 className="text-left font-bold text-2xl w-full">Login</h2>
      <div className="flex flex-col gap-8 justify-start w-full">
        <UserInput
          ref={passwordRef}
          name="Username"
          type="string"
          defaultVal={""}
        />
        <UserInput
          ref={userNameRef}
          name="Password"
          type="password"
          defaultVal={""}
        />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        <Link className="text-red-600 font-bold" to={""}>
          Forgot Details?
        </Link>
        <Link className="text-blue-500 font-bold" to={""}>
          Create Account
        </Link>
      </div>

      <CtaBtn
        link="dashboard"
        text="Submit"
        customClasses="text-2xl bg-orange-400 px-12 py-2 rounded-full absolute -bottom-4 font-bold"
      ></CtaBtn>
    </form>
  );
}
