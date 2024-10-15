import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";
import InputWrapper from "../InputWrapper/InputWrapper";
import SubmitButton from "../SubmitButton/SubmitButton";

const SectionForm = () => {
  const type = useContext(TypeContext);

  return (
    <section
      className={`flex f--wrap j-c--center ${type}__container container`}
      id={`${type}-inputs`}
    >
      <form
        className={`flex j-c--between input__container`}
        id={`${type}-form`}
      >
        <InputWrapper prop="text" />
        <InputWrapper prop="amount" />
        <SubmitButton isFormButton={true} listButtonType={""} text={"Dodaj"} />
      </form>
    </section>
  );
};

export default SectionForm;
