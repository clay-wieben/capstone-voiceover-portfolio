import React, { Component } from 'react';
import { AudioPlayer } from '../player/audio-player';
import '../../style/portfolio.scss';

// id=1opfO9yeIEVAq2fj_wQfRety8I9MUYLmB <-- DnD
// 19ykS7djGp54lr2TtXI43PT8-G27eoPSd <-- Thunder Bringer
// 1RkFYHTadTG5AKikWAHCgLy3Q-T5CnPdw <-- Character

export default class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio-container'>
        <div className='portfolio-items-wrapper'>
          <div className='portfolio-item'>
            <div className='title-description'>
              <h2>Narration Voiceover Demo</h2>
              <h3>An introductory narration for an upcoming DnD module.</h3>
            </div>
            <AudioPlayer id={'1opfO9yeIEVAq2fj_wQfRety8I9MUYLmB'} />
          </div>
          <div className='portfolio-item'>
            <div className='title-description'>
              <h2>Musical Voiceover Demo</h2>
              <h3>
                A snippet of "Thunder Bringer" from <em>Epic: The Musical.</em>
              </h3>
            </div>
            <AudioPlayer id={'19ykS7djGp54lr2TtXI43PT8-G27eoPSd'} />
          </div>
          <div className='portfolio-item'>
            <div className='title-description'>
              <h2>Character Voiceover Demo</h2>
              <h3>
                An audition recorded to display multiple different character
                voices
              </h3>
            </div>
            <AudioPlayer id={'1RkFYHTadTG5AKikWAHCgLy3Q-T5CnPdw'} />
          </div>
        </div>
      </div>
    );
  }
}
