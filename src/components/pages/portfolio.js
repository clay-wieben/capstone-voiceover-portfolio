import React, { Component } from 'react';
import { AudioPlayer } from '../player/audio-player';
import '../../style/portfolio.scss';

export default class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio-container'>
        <div className='portfolio-items-wrapper'>
          <div className='portfolio-items'>
            <div className='portfolio-item'>
              <div className='title-description'>
                <h2>Title goes here</h2>
                <h3>Description goes here</h3>
              </div>
              <AudioPlayer />
            </div>
            <div className='portfolio-item'>
              <div className='title-description'>
                <h2>Title goes here</h2>
                <h3>Description goes here</h3>
              </div>
              <AudioPlayer />
            </div>
            <div className='portfolio-item'>
              <div className='title-description'>
                <h2>Title goes here</h2>
                <h3>Description goes here</h3>
              </div>
              <AudioPlayer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
