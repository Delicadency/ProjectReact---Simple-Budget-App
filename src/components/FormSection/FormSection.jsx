import "./FormSection.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const FormSection = () => {
  const type = useContext(TypeContext);

  return (
    <section
      className={`flex f--wrap j-c--center ${type}__container container`}
      id={`${type}-inputs`}
    ></section>
  );
};

export default FormSection;
