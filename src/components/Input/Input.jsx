import "./Input.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const Input = ({ prop }) => {
  const type = useContext(TypeContext);

  const amountAttributes =
    prop === "amount"
      ? {
          placeholder: "Kwota",
          pattern: "^\\d{0,7}(\\.\\d{0,2})?$",
          inputMode: "numeric",
          step: "0.01",
          maxLength: "10",
        }
      : {
          placeholder: "Nazwa wydatku",
          maxLength: "30",
        };

  return (
    <input
      className={`input input--${prop} input--${type} txt-a--center f-s-14"`}
      type={prop}
      id={`${type}-${prop}`}
      autoComplete="off"
      {...amountAttributes}
    ></input>
  );
};

export default Input;
