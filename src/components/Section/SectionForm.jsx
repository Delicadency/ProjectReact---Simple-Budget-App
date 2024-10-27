import { useContext, useState } from "react";
import TypeContext from "../../contexts/TypeContext";
import SubmitButton from "../../common/SubmitButton";
import SectionInput from "./SectionInput";
import ListElement from "../ListElement/ListElement";

const SectionForm = ({ updateTotal }) => {
  const type = useContext(TypeContext);
  const [textValue, setTextValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [listElements, setListElements] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (textValue.trim() && amountValue.trim()) {
      const newAmount = parseFloat(amountValue);
      const newElement = {
        id: Date.now(),
        text: textValue,
        amount: amountValue,
      };
      setListElements([...listElements, newElement]);
      setTextValue("");
      setAmountValue("");
      updateTotal((prevTotal) => prevTotal + newAmount);
    }
  }

  function deleteElement(id) {
    const elementToDelete = listElements.find((element) => element.id === id);
    if (!elementToDelete) return;
    setListElements(listElements.filter((element) => element.id !== id));
    updateTotal((prevTotal) => prevTotal - elementToDelete.amount);
  }

  function editElement(id, newText, newAmount) {
    const updatedElements = listElements.map((element) => {
      if (element.id === id) {
        updateTotal((prevTotal) => prevTotal - element.amount + newAmount);
        return { ...element, text: newText, amount: newAmount };
      }
      return element;
    });
    setListElements(updatedElements);
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
        {listElements.map((element) => (
          <ListElement
            key={element.id}
            id={element.id}
            textValue={element.text}
            amountValue={element.amount}
            onDelete={deleteElement}
            onEdit={editElement}
            type={type}
          />
        ))}
      </ul>
    </section>
  );
};

export default SectionForm;
