import "./Main.css";
import Section from "../Section/Section";
import { TypeProvider } from "../../contexts/TypeContext";

const Main = () => {
  return (
    <main className="flex main f--column f--row">
    <TypeProvider type="income">
        <Section />
      </TypeProvider>
      <TypeProvider type="expense">
        <Section />
      </TypeProvider>
    </main>
  );
};

export default Main;
