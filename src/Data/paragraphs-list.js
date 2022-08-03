import React from 'react';

const ParagraphsList = (props) => {
  return (
    <div className='paragraph'>
      {props.paragraphs &&
        props.paragraphs.map((paragraph) => {
          return (
            <div key={paragraph.id}>
              <p>{paragraph.title}</p>
              <p> {paragraph.body} </p>
            </div>
          );
        })}
    </div>
  );
};

export default ParagraphsList;

// useEffect(() => {
//   fetchParagraphs();
// }, []);

// constructor(props) {
//   super(props);

//   this.state = {
//     id: props.id,
//   };
// }

// fetchContent() {
//   axios
//     .get(`http://localhost:5000/get/${this.state.id}/`)
//     .then((response) => {
//       console.log(response);
//       // this.setState({
//       //   paragraphItem: response.data.paragraph,
//       // });
//     })
//     .catch((error) => console.log('fetchContent error ', error));
// }

// componentDidMount() {
//   this.fetchContent();
// }

// {
//   /* {paragraphs.map((paragraph) => {
//                   return (
//                     <div key={paragraph.id}>
//                       <p>{paragraph.title}</p>
//                       <p>{paragraph.body}</p>
//                     </div>
//                   );
//                 })} */
// }

// ParagraphsList = (props) => {
//   return (
//     <div className='paragraph'>
//       {props.paragraphs &&
//         props.paragraphs.map((paragraph) => {
//           return (
//             <div key={paragraph.id}>
//               <p> {paragraph.body} </p>
//             </div>
//           );
//         })}
//     </div>
//   );
// };
