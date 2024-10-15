import "./FormSection.css";
import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";
import Form from "../Form/Form";
import List from "../List/List";

const FormSection = () => {
  const type = useContext(TypeContext);

  return (
    <section
      className={`flex f--wrap j-c--center ${type}__container container`}
      id={`${type}-inputs`}
    >
      <Form />
      <List />
    </section>
  );
};

export default FormSection;
