import React, { useState, useEffect } from 'react';
import ParagraphsList from '../../Data/paragraphs-list';
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
              <ParagraphsList paragraphs={paragraphs} />
            </div>

            <div className='image-wrapper'>
              <img src={OldTimey} alt='OldTimey' />
            </div>
          </div>

          <div className='square'>
            <div className='content-wrapper'>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
              integer class felis hac tempus vitae est velit iaculis habitasse
              egestas. Fermentum taciti urna nibh efficitur aptent viverra
              cubilia praesent; pharetra at magna. Quis dui nulla tortor dolor
              varius vehicula mi accumsan suscipit in odio aliquam nascetur
              augue. Himenaeos mi risus imperdiet fames efficitur sociosqu
              elementum eget lobortis lacinia arcu aptent condimentum interdum,
              elementum duis sagittis et.
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
              Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
              integer class felis hac tempus vitae est velit iaculis habitasse
              egestas. Fermentum taciti urna nibh efficitur aptent viverra
              cubilia praesent; pharetra at magna. Quis dui nulla tortor dolor
              varius vehicula mi accumsan suscipit in odio aliquam nascetur
              augue. Himenaeos mi risus imperdiet fames efficitur sociosqu
              elementum eget lobortis lacinia arcu aptent condimentum interdum,
              elementum duis sagittis et.
            </div>
          </div>

          <div className='square'>
            <div className='image-wrapper'>
              <img src={GuitLord} alt='GuitLord' />
            </div>
            <div className='content-wrapper'>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
              integer class felis hac tempus vitae est velit iaculis habitasse
              egestas. Fermentum taciti urna nibh efficitur aptent viverra
              cubilia praesent; pharetra at magna. Quis dui nulla tortor dolor
              varius vehicula mi accumsan suscipit in odio aliquam nascetur
              augue. Himenaeos mi risus imperdiet fames efficitur sociosqu
              elementum eget lobortis lacinia arcu aptent condimentum interdum,
              elementum duis sagittis et.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
