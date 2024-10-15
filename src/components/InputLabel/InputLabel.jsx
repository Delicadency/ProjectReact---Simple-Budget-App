import "./InputLabel.css";
import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";

const InputLabel = ({ prop }) => {
  const type = useContext(TypeContext);
  return (
    <label
      className="error_label"
      htmlFor={`${type}-${prop}`}
      id={`${type}-${prop}-error`}
    >
      Uzupełnij pole
    </label>
  );
};

export default InputLabel;
