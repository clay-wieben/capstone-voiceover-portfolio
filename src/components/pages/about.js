import React, { useState, useEffect } from 'react';
// import ParagraphsList from '../../data/paragraphs-list.js';
import { Band1, Theater, OldTimey, GuitLord } from '../../assets/images/index';
import '../../style/about.scss';

export default function About() {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get', {
      methods: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => setParagraphs(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='about-page-container'>
      <div className='about-page-wrapper'>
        <div className='left-column'>
          <div className='square'>
            <div className='content-wrapper'>
              {/* <ParagraphsList paragraphs={paragraphs} /> */}
              {paragraphs.map((paragraph) => {
                return (
                  <div key={paragraph.id}>
                    <p>{paragraph.title}</p>
                    <p>{paragraph.body}</p>
                  </div>
                );
              })}
            </div>

            <div className='image-wrapper'>
              <img src={OldTimey} alt='OldTimey' />
            </div>
          </div>

          <div className='square'>
            <div className='content-wrapper'>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit\r\n
              integer class felis hac tempus vitae est velit iaculis
              habitasse\r\n egestas. Fermentum taciti urna nibh efficitur aptent
              viverra\r\n cubilia praesent; pharetra at magna. Quis dui nulla
              tortor dolor\r\n varius vehicula mi accumsan suscipit in odio
              aliquam nascetur\r\n augue. Himenaeos mi risus imperdiet fames
              efficitur sociosqu\r\n elementum eget lobortis lacinia arcu aptent
              condimentum interdum,\r\n elementum duis sagittis et.
            </div>

            <div className='image-wrapper'>
              <img src={Band1} alt='Band1' />
            </div>
          </div>
        </div>

        <div className='right-column'>
          <div className='square'>
            <div className='image-wrapper'>
              <img src={Theater} alt='theater' />
            </div>

            <div className='content-wrapper'>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit\r\n
              integer class felis hac tempus vitae est velit iaculis
              habitasse\r\n egestas. Fermentum taciti urna nibh efficitur aptent
              viverra\r\n cubilia praesent; pharetra at magna. Quis dui nulla
              tortor dolor\r\n varius vehicula mi accumsan suscipit in odio
              aliquam nascetur\r\n augue. Himenaeos mi risus imperdiet fames
              efficitur sociosqu\r\n elementum eget lobortis lacinia arcu aptent
              condimentum interdum,\r\n elementum duis sagittis et.
            </div>
          </div>

          <div className='square'>
            <div className='image-wrapper'>
              <img src={GuitLord} alt='GuitLord' />
            </div>
            <div className='content-wrapper'>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit\r\n
              integer class felis hac tempus vitae est velit iaculis
              habitasse\r\n egestas. Fermentum taciti urna nibh efficitur aptent
              viverra\r\n cubilia praesent; pharetra at magna. Quis dui nulla
              tortor dolor\r\n varius vehicula mi accumsan suscipit in odio
              aliquam nascetur\r\n augue. Himenaeos mi risus imperdiet fames
              efficitur sociosqu\r\n elementum eget lobortis lacinia arcu aptent
              condimentum interdum,\r\n elementum duis sagittis et.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
