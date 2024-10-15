import SubmitButton from "../../common/SubmitButton";

const ListElement = (dataID, text) => {

  return (
    <li className="flex a-i--center list__element" data-id={dataID}>
      <p class="flex a-i--center j-c--between list__paragraph">
        {text}
      </p>
      <SubmitButton isFormButton={false} listButtonType="edit" />
      <SubmitButton isFormButton={false} listButtonType="delete" />

    </li>
  );
};

export default ListElement;
