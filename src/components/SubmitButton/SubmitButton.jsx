import "./SubmitButton.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const SubmitButton = ({ isFormButton, listButtonType, text }) => {
  const type = useContext(TypeContext);
  const buttonAtrributes = isFormButton
    ? {
        className: `input__button input__button--${type} txt-a--center f-s-14`,
        id: `${type}-list`,
      }
    : {
        className: `list__button ${listButtonType} ${listButtonType}--${type}`,
      };

  return (
    <button type="submit" {...buttonAtrributes}>
      {isFormButton ? text : undefined}
    </button>
  );
};

export default SubmitButton;
