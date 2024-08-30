import Header from "../Header/Header";
import Main from "../Main/Main";
import Section from "../Section/Section";

const ProjectContainer = () => {
  return (
    <div className="flex f--wrap f--column">
      <Header />
      <Main />
      <Section />
      <Section />
    </div>
  );
};

export default ProjectContainer;
