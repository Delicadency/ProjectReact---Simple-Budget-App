import Section from "../Section/Section";
import { TypeProvider } from "../../contexts/TypeContext";

const Main = ({ setIncomeTotal, setExpenseTotal }) => {
  return (
    <main className="flex main f--column f--row">
      <TypeProvider type="income">
        <Section updateTotal={setIncomeTotal} />
      </TypeProvider>
      <TypeProvider type="expense">
        <Section updateTotal={setExpenseTotal} />
      </TypeProvider>
    </main>
  );
};

export default Main;
