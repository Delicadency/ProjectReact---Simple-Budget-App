import "./SubmitButton.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const SubmitButton = ({ isFormButton, listButtonType, text }) => {
  const type = useContext(TypeContext);
  return (
    <button
      type="submit"
      className={
        isFormButton
          ? `input__button input__button--${type} txt-a--center f-s-14`
          : `list__button ${listButtonType} ${listButtonType}--${type}`
      }
      id={isFormButton ? `${type}-list` : ""}
    >
      {isFormButton ?  text : ""}
    </button>
  );
};

export default SubmitButton;
