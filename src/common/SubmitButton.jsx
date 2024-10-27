import { useContext } from "react";
import TypeContext from "../contexts/TypeContext";

const SubmitButton = ({ isFormButton, listButtonType, text, onClick }) => {
  const type = useContext(TypeContext);
  const buttonAttributes = isFormButton
    ? {
        className: `input__button input__button--${type} txt-a--center f-s-14`,
        id: `${type}-list`,
        type: "submit",
      }
    : {
        className: `list__button ${listButtonType} ${listButtonType}--${type}`,
        type: "button",
        onClick,
      };

  return (
    <button {...buttonAttributes}>{isFormButton ? text : undefined}</button>
  );
};

export default SubmitButton;
