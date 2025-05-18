import { FormEvent, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "./UserInput";

export default function AuthForm() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isForgotMode, setIsForgotMode] = useState(false);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<{ login: string; password: string }>({
    login: "admin",
    password: "1234",
  });

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      setCredentials(JSON.parse(stored));
    }
  }, []);

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredUsername = userNameRef.current?.value || "";
    const enteredPassword = passwordRef.current?.value || "";

    if (
      enteredUsername === credentials.login &&
      enteredPassword === credentials.password
    ) {
      setError(null);
      navigate("/dashboard");
    } else {
      setError("Nieprawidłowy login lub hasło.");
    }
  };

  const handleResetCredentials = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newLogin = userNameRef.current?.value || "";
    const newPassword = passwordRef.current?.value || "";

    if (newLogin.length < 3 || newPassword.length < 3) {
      setError("Login i hasło muszą mieć co najmniej 3 znaki.");
      return;
    }

    const newCreds = { login: newLogin, password: newPassword };
    localStorage.setItem("auth", JSON.stringify(newCreds));
    setCredentials(newCreds);
    setError(null);
    setIsForgotMode(false);
    alert("Zaktualizowano dane logowania!");
  };

  return (
    <form
      onSubmit={isForgotMode ? handleResetCredentials : handleLoginSubmit}
      className="flex flex-col shadow-lg justify-center items-center gap-8 md-gap px-24 bg-white py-12 rounded-lg relative"
    >
      <h2 className="text-left font-bold text-2xl w-full">
        {isForgotMode ? "Resetuj Dane Logowania" : "Login"}
      </h2>

      <div className="flex flex-col gap-8 justify-start w-full">
        <UserInput
          ref={userNameRef}
          name={isForgotMode ? "Nowy login" : "Username"}
          type="text"
          defaultVal={""}
        />
        <UserInput
          ref={passwordRef}
          name={isForgotMode ? "Nowe hasło" : "Password"}
          type="password"
          defaultVal={""}
        />
      </div>

      {error && (
        <p className="text-red-600 font-semibold text-sm mt-2">{error}</p>
      )}

      <div className="flex justify-between gap-4 mt-4 w-full">
        {!isForgotMode ? (
          <button
            type="button"
            onClick={() => setIsForgotMode(true)}
            className="text-red-600 font-bold"
          >
            Forgot Details?
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsForgotMode(false)}
            className="text-blue-500 shadow-lg font-bold"
          >
            Wróć do logowania
          </button>
        )}
       
      </div>

      <button
        type="submit"
        className="text-2xl bg-dark_oragne-0 px-12 py-2 rounded-full absolute -bottom-4 font-bold"
      >
        {isForgotMode ? "Zapisz nowe dane" : "Zaloguj"}
      </button>
    </form>
  );
}
