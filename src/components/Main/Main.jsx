import "./Main.css";
import Section from "../Section/Section";

const Main = () => {
  return (
    <main className="flex main f--column f--row">
      <Section type={"income"} />
      <Section type={"expense"} />
    </main>
  );
};

export default Main;
