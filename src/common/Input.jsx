const Input = ({
  className,
  prop,
  type,
  value,
  onChange = () => {},
  isEditing,
}) => {
  const amountPattern = /^\d{0,6}(,\d{0,2})?$/;
  const handleChange = (event) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(",", ".");
    if (
      prop === "amount" &&
      !amountPattern.test(inputValue.replace(".", ","))
    ) {
      event.target.value = value.replace(".", ","); // Przywróć poprawną wartość
    } else {
      onChange(inputValue);
    }
  };

  // Formatowanie wyświetlanej wartości z kropką na przecinek
  const displayValue = value.replace(".", ",");
  const amountAttributes =
    prop === "amount"
      ? {
          placeholder: "Kwota",
          inputMode: "numeric",
          pattern:"^\\d{0,7}(,\\d{0,2})?$",
          step: "0.01",
          maxLength: "10",
        }
      : {
          placeholder: "Nazwa wydatku",
          maxLength: "30",
        };

  return (
    <div
      className={
        isEditing ? `input__wrapper--edit-${prop}` : `input__wrapper--${prop}`
      }
    >
      <label
        className="error_label"
        htmlFor={`${type}-${prop}`}
        id={`${type}-${prop}-error`}
      >
        Uzupełnij pole
      </label>
      <input
        className={className}
        type={prop}
        id={`${type}-${prop}`}
        autoComplete="off"
        value={displayValue}
        onChange={handleChange}
        {...amountAttributes}
      ></input>
    </div>
  );
};

export default Input;
