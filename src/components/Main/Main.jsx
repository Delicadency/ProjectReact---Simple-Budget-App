import "./Main.css";
import Section from "../Section/Section";

const Main = () => {
  return (
    <main className="flex main f--column f--row">
      <Section id={"income"} />
      <Section id={"expense"} />
    </main>
  );
};

export default Main;
