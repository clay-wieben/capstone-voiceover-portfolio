import React, { Component } from "react";
import AudioPlayer from "../player/audio-player";
import "../../style/portfolio.scss";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-items-wrapper">
          <div className="portfolio-items">
            <div className="portfolio-item">
              <div className="item-title">Title goes here</div>
              <div className="item-description">Description goes here</div>
              <div className="audio-container">
                <AudioPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
