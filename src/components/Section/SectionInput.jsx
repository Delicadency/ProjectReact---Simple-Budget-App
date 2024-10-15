const SectionInput = ({ prop, type }) => {
  const amountAttributes =
    prop === "amount"
      ? {
          placeholder: "Kwota",
          pattern: "^\\d{0,7}(\\.\\d{0,2})?$",
          inputMode: "numeric",
          step: "0.01",
          maxLength: "10",
        }
      : {
          placeholder: "Nazwa wydatku",
          maxLength: "30",
        };

  return (
    <div className={`input__wrapper--${prop}`}>
      <label
        className="error_label"
        htmlFor={`${type}-${prop}`}
        id={`${type}-${prop}-error`}
      >
        Uzupełnij pole
      </label>
      <input
        className={`input input--${prop} input--${type} txt-a--center f-s-14"`}
        type={prop}
        id={`${type}-${prop}`}
        autoComplete="off"
        {...amountAttributes}
      ></input>
    </div>
  );
};

export default SectionInput;
