import { useContext, useState } from "react";
import TypeContext from "../../contexts/TypeContext";
import SubmitButton from "../../common/SubmitButton";
import SectionInput from "./SectionInput";
import ListElement from "../ListElement/ListElement";

const SectionForm = () => {
  const type = useContext(TypeContext);
  const [textValue, setTextValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [listElements, setListElements] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (textValue.trim() && amountValue.trim()) {
      console.log({ textValue, amountValue });
      setListElements([...listElements, [textValue, amountValue]]);
      setTextValue("");
      setAmountValue("");
    }
  }

  return (
    <section
      className={`flex f--wrap j-c--center ${type}__container container`}
      id={`${type}-inputs`}
    >
      <form
        className={`flex j-c--between input__container`}
        id={`${type}-form`}
        onSubmit={handleSubmit}
      >
        <SectionInput
          prop="text"
          type={type}
          value={textValue}
          onChange={setTextValue}
        />
        <SectionInput
          prop="amount"
          type={type}
          value={amountValue}
          onChange={setAmountValue}
        />
        <SubmitButton isFormButton={true} listButtonType={""} text={"Dodaj"} />
      </form>
      <ul
        className={`flex f--wrap list__container list__container--${type} f-s-14`}
        id={`${type}-list`}
      >
        {listElements.map((listElement, index) => (
          <ListElement
            key={index}
            textValue={listElement[0]}
            amountValue={listElement[1]}
          />
        ))}
      </ul>
    </section>
  );
};

export default SectionForm;
