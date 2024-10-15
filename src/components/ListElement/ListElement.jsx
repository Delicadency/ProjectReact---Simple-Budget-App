import SubmitButton from "../../common/SubmitButton";

const ListElement = ({ textValue, amountValue }) => {
  console.log({ textValue, amountValue });
  return (
    <li className="flex a-i--center list__element" data-id={Date.now()}>
      <p className="flex a-i--center j-c--between list__paragraph">
        {textValue} - {amountValue}
      </p>
      <SubmitButton isFormButton={false} listButtonType="edit" />
      <SubmitButton isFormButton={false} listButtonType="delete" />
    </li>
  );
};

export default ListElement;
