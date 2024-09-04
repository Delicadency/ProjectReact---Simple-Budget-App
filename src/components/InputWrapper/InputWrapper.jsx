import "./InputWrapper.css";
import InputLabel from "../InputLabel/InputLabel";
import Input from "../Input/Input";

const InputWrapper = ({ prop }) => {
  return (
    <div className={`input__wrapper--${prop}`}>
      <InputLabel prop={prop} />
      <Input prop={prop} />
    </div>
  );
};

export default InputWrapper;
