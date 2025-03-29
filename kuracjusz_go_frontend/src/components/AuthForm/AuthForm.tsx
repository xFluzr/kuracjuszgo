import { FormEvent } from "react";
import { Link } from "react-router-dom";
import UserInput from "./UserInput";

export default function AuthForm() {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-1/2justify-center items-center gap-8 md-gap px-24 bg-white py-12 rounded-lg relative"
    >
      <h2 className="text-left font-bold text-2xl w-full">Login</h2>
      <div className="flex flex-col gap-8 justify-start w-full">
        <UserInput name="Username" type="string" val={""} />
        <UserInput name="Password" type="password" val={""} />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        <Link className="text-red-600 font-bold" to={""}>
          Forgot Details?
        </Link>
        <Link className="text-blue-500 font-bold" to={""}>
          Create Account
        </Link>
      </div>

      <button
        type="submit"
        className="text-2xl bg-orange-400 px-12 py-2 rounded-full absolute -bottom-4 font-bold"
      >
        Submit
      </button>
    </form>
  );
}
