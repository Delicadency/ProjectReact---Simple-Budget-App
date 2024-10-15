import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";
import SectionParagraph from "./SectionParagraph";
import SectionForm from "./SectionForm";

const Section = () => {
  const type = useContext(TypeContext);
  return (
    <section className="flex f--wrap a-i--center j-c--center" id={type}>
      <div className="flex j-c--between a-i--center container__paragraph f-s-20">
        <SectionParagraph
          text={type === "income" ? "Przychody" : "Wydatki"}
          id={`sectionparagraph-${type}`}
          type={type}
        />
        <SectionParagraph text={"0,00"} id={`total-${type}`} type={type} />
      </div>
      <SectionForm />
    </section>
  );
};

export default Section;
