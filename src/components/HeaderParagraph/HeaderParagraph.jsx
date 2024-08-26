import "./HeaderParagraph.css";

const HeaderParagraph = ({className, id, text}) => {
  return (
    <p className={className} id={id}>
      {text}
    </p>
  );
};

export default HeaderParagraph;
