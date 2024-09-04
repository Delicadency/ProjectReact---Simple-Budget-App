import "./FormSection.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";
import Form from "../Form/Form";

const FormSection = () => {
  const type = useContext(TypeContext);

  return (
    <section
      className={`flex f--wrap j-c--center ${type}__container container`}
      id={`${type}-inputs`}
    >
      <Form />
    </section>
  );
};

export default FormSection;
