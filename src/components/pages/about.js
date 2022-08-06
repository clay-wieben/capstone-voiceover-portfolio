import React, { useState, useEffect } from 'react';
import '../../style/about.scss';

export default function About() {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    fetch('https://cdw-voiceover-capstone.herokuapp.com/get', {
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
              <p>
                {paragraphs
                  .filter((paragraphs) => paragraphs.id === 1)
                  .map((paragraphs) => paragraphs.body)}
              </p>
            </div>

            <div className='image-wrapper'>
              <img
                src='https://cdw-voiceover-capstone.herokuapp.com/static/images/old-timey.png'
                alt='OldTimey'
              />
            </div>
          </div>

          <div className='square'>
            <div className='content-wrapper'>
              <p>
                {paragraphs
                  .filter((paragraphs) => paragraphs.id === 3)
                  .map((paragraphs) => paragraphs.body)}
              </p>
            </div>

            <div className='image-wrapper'>
              <img
                src='https://cdw-voiceover-capstone.herokuapp.com/static/images/band-1.png'
                alt='Band1'
              />
            </div>
          </div>
        </div>

        <div className='right-column'>
          <div className='square'>
            <div className='image-wrapper'>
              <img
                src='https://cdw-voiceover-capstone.herokuapp.com/static/images/theater.png'
                alt='theater'
              />
            </div>

            <div className='content-wrapper'>
              <p>
                {paragraphs
                  .filter((paragraphs) => paragraphs.id === 2)
                  .map((paragraphs) => paragraphs.body)}
              </p>
            </div>
          </div>

          <div className='square'>
            <div className='image-wrapper'>
              <img
                src='https://cdw-voiceover-capstone.herokuapp.com/static/images/guit-lord.png'
                alt='GuitLord'
              />
            </div>
            <div className='content-wrapper'>
              <p>
                {paragraphs
                  .filter((paragraphs) => paragraphs.id === 4)
                  .map((paragraphs) => paragraphs.body)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
