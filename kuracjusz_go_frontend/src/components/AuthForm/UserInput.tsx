import { forwardRef } from "react";

type userInputType = {
  type: string;
  defaultVal: string;
  name: string;
  ref: null | HTMLInputElement;
};

export default forwardRef<HTMLInputElement, userInputType>(function UserInput(
  { type, defaultVal, name },
  ref
) {
  return (
    <input
      ref={ref}
      placeholder={name}
      name={name}
      defaultValue={defaultVal}
      type={type}
      className="border-b-2 text-xl pb-2 focus:outline  outline-none border-black"
    />
  );
});
