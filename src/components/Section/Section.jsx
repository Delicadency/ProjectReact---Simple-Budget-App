import "./Section.css";
import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";
import SectionParagraph from "../SectionParagraph/SectionParagraph";
import FormSection from "../FormSection/FormSection";

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
      <FormSection />
    </section>
  );
};

export default Section;
