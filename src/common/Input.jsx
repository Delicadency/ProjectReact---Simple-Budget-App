const Input = ({
  className,
  prop,
  type,
  value,
  onChange = () => {},
  isEditing,
}) => {
  const amountPattern = /^\d{0,6}(\,\d{0,2})?$/;
  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (prop === "amount" && !amountPattern.test(inputValue)) {
      event.target.value = value;
    } else {
      onChange(inputValue);
    }
  };
  const amountAttributes =
    prop === "amount"
      ? {
          placeholder: "Kwota",
          pattern: "^\\d{0,6}(\\.\\d{0,2})?$",
          inputMode: "numeric",
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
        value={value}
        onChange={handleChange}
        {...amountAttributes}
      ></input>
    </div>
  );
};

export default Input;
