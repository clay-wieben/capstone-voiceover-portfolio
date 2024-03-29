import React, { useState, useRef, useEffect } from 'react';
import styles from '../../style/audio-player.module.scss';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { RiArrowGoForwardLine } from 'react-icons/ri';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

const AudioPlayer = (props) => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //references
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioPlayer.current.duration) + 1;
    setDuration(seconds);
    progressBar.current.max = seconds;
  };

  useEffect(() => {
    if (Number(duration) > 0 && Number(currentTime) === Number(duration)) {
      togglePlayPause();
    }
    // eslint-disable-next-line
  }, [currentTime, duration]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const play = () => {
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      play();
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  };

  return (
    <div className={styles.playerContainer}>
      <audio
        ref={audioPlayer}
        src={`https://docs.google.com/uc?export=download&id=${props.id}`} //id can be found by copying the "share" link from Drive
        preload='metadata'
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
      {console.log(props.id)}
      <button className={styles.forwardBackward} onClick={backThirty}>
        <RiArrowGoBackLine />
        <p>30</p>
      </button>
      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      <button className={styles.forwardBackward} onClick={forwardThirty}>
        <RiArrowGoForwardLine />
        <p>30</p>
      </button>
      {/* current time */}
      <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
      {/* progress bar */}
      <div>
        <input
          type='range'
          className={styles.progressBar}
          defaultValue='0'
          ref={progressBar}
          onChange={changeRange}
        />
      </div>
      {/* duration */}
      <div className={styles.duration}>
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export { AudioPlayer };
