import "./SectionParagraph.css";
import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";

const SectionParagraph = ({ text, id }) => {
  const type = useContext(TypeContext);
  return (
    <p className={`paragraph-gradient--${type}`} id={id}>
      {text}
    </p>
  );
};

export default SectionParagraph;
