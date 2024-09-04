import "./InputWrapper.css";
import InputLabel from "../InputLabel/InputLabel";

const InputWrapper = ({ prop }) => {
  return (
    <div className={`input__wrapper--${prop}`}>
      <InputLabel prop={prop} />
    </div>
  );
};

export default InputWrapper;
