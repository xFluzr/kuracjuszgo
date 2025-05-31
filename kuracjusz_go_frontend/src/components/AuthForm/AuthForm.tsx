import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "./UserInput"; // Zakładam, że to Twój komponent do inputów

export default function AuthForm() {
  const phoneRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);

  const [otpValues, setOtpValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const validOtp = "123456";

  const handlePhoneSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneRaw = phoneRef.current?.value || "";
    const phone = phoneRaw.replace(/\s+/g, ""); // Usuwa spacje

    const phoneRegex = /^[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("Wprowadź poprawny numer telefonu (9 cyfr).");
      return;
    }

    setError(null);
    setLoading(true);
    setTimeout(() => {
      console.log("Wysłano kod OTP na numer:", phone);
      setStep("otp");
      setLoading(false);
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((v) => v.length === 1)) {
      const fullOtp = newOtp.join("");
      setLoading(true);
      setTimeout(() => {
        if (fullOtp === validOtp) {
          setError(null);
          navigate("/dashboard");
        } else {
          setError("Nieprawidłowy kod weryfikacyjny.");
        }
        setLoading(false);
      }, 1000);
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <form
      onSubmit={
        step === "phone" ? handlePhoneSubmit : (e) => e.preventDefault()
      }
      className="flex flex-col text-center shadow-lg justify-center items-center gap-8 px-8 md:px-24 bg-[var(--beige)] py-12 rounded-lg relative"
    >
      <h2 className="text-center font-bold text-3xl leading-relaxed w-full text-[var(--olive)]">
        {step === "phone" ? "Podaj numer telefonu" : "Wpisz kod z telefonu"}
      </h2>

      <div className="flex flex-col gap-8 justify-start w-full items-center shadow-sm">
        {step === "phone" ? (
          <UserInput
            ref={phoneRef}
            name="Numer telefonu"
            type="tel"
            defaultVal=""
          />
        ) : (
          <div className="flex gap-2">
            {otpValues.map((val, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                className="w-12 h-14 text-center text-xl border border-[var(--olive)] text-[var(--olive)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--light_orange)] bg-white"
              />
            ))}
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-600 font-semibold text-sm mt-2">{error}</p>
      )}

      {step === "otp" && (
        <button
          type="button"
          onClick={() => {
            setStep("phone");
            setOtpValues(["", "", "", "", "", ""]);
            setError(null);
          }}
          className="text-[var(--olive)] font-semibold text-sm mt-2 underline"
        >
          Zmień numer telefonu
        </button>
      )}

      {/* Spinner */}
      {loading && (
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-[var(--olive)] border-opacity-50"></div>
        </div>
      )}

      {/* Przycisk tylko w kroku telefonu i gdy nie trwa ładowanie */}
      {step === "phone" && !loading && (
        <button
          type="submit"
          className="text-2xl shadow-lg bg-[var(--green)] text-[var(--beige)] px-12 py-2 rounded-md font-bold"
        >
          Wyślij kod
        </button>
      )}
    </form>
  );
}
