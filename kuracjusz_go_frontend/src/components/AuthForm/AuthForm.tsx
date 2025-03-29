import { FormEvent } from "react";

export default function AuthForm(){

    const submitHandler=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }


    return(
       <form onSubmit={submitHandler} className="flex flex-col items-center">
            <input/>
            <input/>
            <button type="submit">
                Submit
            </button>
       </form>
    )
}