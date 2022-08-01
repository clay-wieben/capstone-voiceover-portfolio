const ParagraphsList = (props) => {
  return (
    <div className='paragraph'>
      {props.paragraphs &&
        props.paragraphs.map((paragraph) => {
          return (
            <div key={paragraph.id}>
              <h2 className='text-primary'> {paragraph.title} </h2>
              <p> {paragraph.body} </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default ParagraphsList;
