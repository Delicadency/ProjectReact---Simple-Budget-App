import "./Form.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";
import InputWrapper from "../InputWrapper/InputWrapper";

const Form = () => {
  const type = useContext(TypeContext);

  return (
    <form
      className={`flex j-c--between ${type}__container"`}
      id={`${type}-form`}
    >
      <InputWrapper prop="text" />
      <InputWrapper prop="amount" />
    </form>
  );
};

export default Form;