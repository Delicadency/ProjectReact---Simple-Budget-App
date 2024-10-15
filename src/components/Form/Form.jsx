import "./Form.css";
import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";
import InputWrapper from "../InputWrapper/InputWrapper";
import SubmitButton from "../SubmitButton/SubmitButton";

const Form = () => {
  const type = useContext(TypeContext);

  return (
    <form className={`flex j-c--between input__container`} id={`${type}-form`}>
      <InputWrapper prop="text" />
      <InputWrapper prop="amount" />
      <SubmitButton isFormButton={true} listButtonType={""} text={"Dodaj"} />
    </form>
  );
};

export default Form;
