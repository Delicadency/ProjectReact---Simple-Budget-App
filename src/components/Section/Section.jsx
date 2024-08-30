import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const Section = () => {
  const type = useContext(TypeContext);
  return (
    <section
      className="flex f--wrap a-i--center j-c--center"
      id={type}
    ></section>
  );
};

export default Section;
