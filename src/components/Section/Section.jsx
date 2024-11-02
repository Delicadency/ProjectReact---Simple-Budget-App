import { useContext, useState } from "react";
import TypeContext from "../../contexts/TypeContext";
import SectionParagraph from "./SectionParagraph";
import SectionForm from "./SectionForm";

const Section = ({updateTotal}) => {
  const type = useContext(TypeContext);
  const [total, setTotal] = useState(0);
  return (
    <section className="flex f--wrap a-i--center j-c--center" id={type}>
      <div className="flex j-c--between a-i--center container__paragraph f-s-20">
        <SectionParagraph
          text={type === "income" ? "Przychody" : "Wydatki"} 
          id={`sectionparagraph-${type}`}
          type={type}
        />
        <SectionParagraph
          text={total.toFixed(2).replace(".", ",")} 
          id={`total-${type}`}
          type={type}
        />
      </div>
      <SectionForm 
        updateTotal={(newTotal) => {
          setTotal(newTotal); 
          updateTotal(newTotal); 
        }} 
      />
    </section>
  );
};

export default Section;
