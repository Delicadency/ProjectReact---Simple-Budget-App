import "./ListElement.css";
import { useContext } from "react";
import TypeContext from "../../contexts/TypeContext";

const ListElement = (dataID) => {
  const type = useContext(TypeContext);

  return <li className="flex a-i--center list__element" data-id={dataID}>
    
  </li>;
};

export default ListElement;
