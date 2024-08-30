import Header from "../Header/Header";
import Main from "../Main/Main";
import Section from "../Section/Section";
import { TypeProvider } from "../TypeContext/TypeContext";

const ProjectContainer = () => {
  return (
    <div className="flex f--wrap f--column">
      <Header />
      <Main />
      <TypeProvider type="income">
        <Section />
      </TypeProvider>
      <TypeProvider type="expense">
        <Section />
      </TypeProvider>
    </div>
  );
};

export default ProjectContainer;
