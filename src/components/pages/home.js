import React from "react";
import "../../style/home.scss";
import { Mic, Headshot } from "../../assets/images/index";

export default function Home() {
  return (
    <div className="homepage-wrapper">
      <div
        className="background"
        style={{
          background: "url(" + Mic + ") no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="content-container">
        <div className="headshot-container">
          <div className="headshot">
            <img src={Headshot} alt="Headshot" />
          </div>
        </div>

        <h1>CLAY WIEBEN</h1>

        <h2>VOICEOVER ARTIST</h2>
      </div>
    </div>
  );
}
