import { useState } from "react";
import SubmitButton from "../../common/SubmitButton";

const ListElement = ({
  id,
  textValue,
  amountValue,
  onDelete,
  onEdit,
  type,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(textValue);
  const [newAmount, setNewAmount] = useState(amountValue);

  function handleSave() {
    onEdit(id, newText, parseFloat(newAmount));
    setIsEditing(false);
  }

  return (
    <li className="flex a-i--center list__element">
      {isEditing ? (
        <>
          <div className="flex a-i--center j-c--between list__paragraph">
            <div className="input__wrapper--edit-text">
              <label className="error_label" htmlFor={`text-${id}`}>
                Uzupełnij pole
              </label>
              <input
                className={`input input--edit input--${type} txt-a--center f-s-14`}
                type="text"
                maxLength="30"
                autoComplete="off"
                placeholder="Nazwa"
                id={`text-${id}`}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            </div>
            <div className="input__wrapper--edit-amount">
              <label className="error_label" htmlFor={`amount-${id}`}>
                Uzupełnij pole
              </label>
              <input
                className={`input input--edit input--${type} txt-a--center f-s-14`}
                type="number"
                maxLength="10"
                autoComplete="off"
                placeholder="Kwota"
                id={`amount-${id}`}
                inputMode="numeric"
                pattern="^d{0,7}(.d{0,2})?$"
                step="0.01"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
              />
            </div>
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
