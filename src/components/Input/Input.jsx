import "./Input.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const Input = ({ prop }) => {
  const type = useContext(TypeContext);
  return (
    <input
      className={`input input--${prop} input--${type} txt-a--center f-s-14"`}
      type={prop}
      placeholder={prop === "text" ? "Nazwa wydatku" : "Kwota"}
      id={`${type}-${prop}`}
      autoComplete="off"
      maxLength={prop === "text" ? "30" : "10"}
      pattern={prop === "amount" ? "^d{0,7}(.d{0,2})?$" : ""}
      inputMode={prop === "amount" ? "numeric" : ""}
      step={prop === "amount" ? "0.01" : ""}
    ></input>
  );
};

export default Input;
