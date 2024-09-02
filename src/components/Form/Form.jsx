import "./Form.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const Form = () => {
  const type = useContext(TypeContext);

  return (
    <form
      className={`flex j-c--between ${type}__container"`}
      id={`${type}-form`}
    ></form>
  );
};

export default Form;
