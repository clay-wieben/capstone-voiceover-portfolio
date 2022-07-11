import React, { useState, useRef, useEffect } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { RiArrowGoForwardLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import "../../style/audio-player.scss";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (prevValue) {
      audioPlayer.current.play();
    } else audioPlayer.current.pause();
  };

  return (
    <div className="player-container">
      <audio
        ref={audioPlayer}
        src="https://drive.google.com/drive/folders/1gWSHAxFFhQ-DklgETFmzzjndcWVlnXNB"
        preload="metadata"
      ></audio>
      <button className="forward-backward">
        <RiArrowGoBackLine />
        <p>30</p>
      </button>
      <button className="play-pause" onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button className="forward-backward">
        <RiArrowGoForwardLine />
        <p>30</p>
      </button>

      {/* current time */}
      <div className="current-time">{calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div className="progress-bar">
        <input type="range" defaultValue="0" />
      </div>

      {/* duration */}
      <div className="duration">
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default AudioPlayer;
