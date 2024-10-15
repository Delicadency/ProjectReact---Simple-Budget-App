import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";
import SubmitButton from "../../common/SubmitButton";
import SectionInput from "./SectionInput";

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
        <SectionInput prop="text" type={type} />
        <SectionInput prop="amount" type={type} />
        <SubmitButton isFormButton={true} listButtonType={""} text={"Dodaj"} />
      </form>
    </section>
  );
};

export default SectionForm;
