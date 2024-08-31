import HeaderHeading from "../HeaderHeading/HeaderHeading";
import HeaderParagraph from "../HeaderParagraph/HeaderParagraph";

const Header = () => {
  return (
    <header
      className="flex f--wrap f--column a-i--center j-c--center"
      id="header"
    >
      <HeaderHeading />
      <HeaderParagraph
        className={"header__paragraph txt-a--center"}
        id={"header-paragraph"}
        text={"Bilans wynosi zero"}
      />
      <HeaderParagraph
        className={"header__error"}
        id={"header-error"}
        text={"Musisz najpierw zakończyć edycję!"}
      />
    </header>
  );
};

export default Header;
