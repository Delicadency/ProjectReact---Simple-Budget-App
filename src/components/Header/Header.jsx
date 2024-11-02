import Total from "../../common/Total";
import HeaderHeading from "./HeaderHeading";
import HeaderParagraph from "./HeaderParagraph";

const Header = ({total}) => {
  return (
    <header
      className="flex f--wrap f--column a-i--center j-c--center"
      id="header"
    >
      <HeaderHeading />
      <Total balance={total}/>
      <HeaderParagraph
        className={"header__error"}
        id={"header-error"}
        text={"Musisz najpierw zakończyć edycję!"}
      />
    </header>
  );
};

export default Header;
