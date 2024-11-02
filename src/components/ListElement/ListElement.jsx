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

  function handleSave() {
    onEdit(id, newText, parseFloat(newAmount));
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
            ></Input>
            <Input
              isEditing={true}
              className={`input input--edit input--${type} txt-a--center f-s-14`}
              prop="amount"
              type={type}
              value={newAmount}
              onChange={(value) => setNewAmount(value)}
            ></Input>
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
            {textValue} - {amountValue}
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
