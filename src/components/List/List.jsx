import "./List.css";
import { useContext } from "react";
import TypeContext from "../TypeContext/TypeContext";

const List = () => {
  const type = useContext(TypeContext);

  return (
    <ul
      className={`flex f--wrap list__container list__container--${type} f-s-14`}
      id={`${type}-list`}
    ></ul>
  );
};

export default List;
