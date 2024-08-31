import "./Section.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";
import SectionParagraph from "../SectionParagraph/SectionParagraph";

const Section = () => {
  const type = useContext(TypeContext);
  return (
    <section className="flex f--wrap a-i--center j-c--center" id={type}>
      <div className="flex j-c--between a-i--center container__paragraph f-s-20">
        <SectionParagraph
          text={type === "income" ? "Przychody" : "Wydatki"}
          id={`sectionparagraph-${type}`}
        />
        <SectionParagraph text={"0,00"} id={`total-${type}`} />
      </div>
    </section>
  );
};

export default Section;
