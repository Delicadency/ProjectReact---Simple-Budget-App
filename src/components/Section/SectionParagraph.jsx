const SectionParagraph = ({ text, id, type }) => {
  return (
    <p className={`paragraph-gradient--${type}`} id={id}>
      {text}
    </p>
  );
};

export default SectionParagraph;
