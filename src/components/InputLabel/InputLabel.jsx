import "./InputLabel.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const InputLabel = ({ prop }) => {
  const type = useContext(TypeContext);
  return (
    <label
      className="error_label"
      for={`${type}-${prop}`}
      id={`${type}-${prop}-error`}
    >
      Uzupełnij pole
    </label>
  );
};

export default InputLabel;
