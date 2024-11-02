import { useState } from "react";
import SubmitButton from "../../common/SubmitButton";
import Input from "../../common/Input";

const ListElement = ({
  id,
  textValue,
  amountValue,
  onDelete,
  onEdit,
  type,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(textValue ?? "");
  const [newAmount, setNewAmount] = useState(amountValue ?? "");
  const [textError, setTextError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  function handleSave() {
    const formattedAmount = newAmount.toString().replace(",", ".");
    
    if (newText.trim() === "") {
      setTextError(true);
      return;
    } else {
      setTextError(false);
    }

    if (formattedAmount === "" || isNaN(parseFloat(formattedAmount))) {
      setAmountError(true);
      return;
    } else {
      setAmountError(false);
    }

    onEdit(id, newText, parseFloat(formattedAmount));
    setIsEditing(false);
  }

  return (
    <li className="flex a-i--center list__element">
      {isEditing ? (
        <>
          <div className="flex a-i--center j-c--between list__paragraph">
            <Input
              isEditing={true}
              className={`input input--edit input--${type} txt-a--center f-s-14`}
              prop="text"
              type={type}
              value={newText}
              onChange={(value) => setNewText(value)}
              hasError={textError} 
            />
            <Input
              isEditing={true}
              className={`input input--edit input--${type} txt-a--center f-s-14`}
              prop="amount"
              type={type}
              value={newAmount}
              onChange={(value) => setNewAmount(value)}
              hasError={amountError} 
            />
          </div>
          <SubmitButton
            isFormButton={false}
            listButtonType="save"
            onClick={handleSave}
          />
          <SubmitButton
            isFormButton={false}
            listButtonType="cancel"
            onClick={() => setIsEditing(false)}
          />
        </>
      ) : (
        <>
          <p className="flex a-i--center j-c--between list__paragraph">
            {textValue} -{" "}
            {amountValue ? amountValue.toString().replace(".", ",") : ""}
          </p>
          <SubmitButton
            isFormButton={false}
            listButtonType="edit"
            onClick={() => setIsEditing(true)}
          />
          <SubmitButton
            isFormButton={false}
            listButtonType="delete"
            onClick={() => onDelete(id)}
          />
        </>
      )}
    </li>
  );
};

export default ListElement;
