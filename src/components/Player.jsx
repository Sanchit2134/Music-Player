import React, { useRef, useState } from "react";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mock from "../services/Mock";

function Player({
  currentSongIndex,
  setcurrentSongIndex,
  setPlay,
  setPhoto,
  setArtist,
  setName,
  setSong,
  play,
}) {
  const audioRef = useRef();

  const handlPlay = () => {
    setPlay(!play);
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  const prevSong = () => {
    const newIndex =
      currentSongIndex === 0 ? Mock.data.length - 1 : currentSongIndex - 1;
    setcurrentSongIndex(newIndex);
    audioRef.current.src = Mock.data[newIndex].srco;
    setTimeout(() => {
      if (play) audioRef.current.play();
    }, 200);
    setArtist(Mock.data[newIndex].artist);
    setName(Mock.data[newIndex].name);
    setPhoto(Mock.data[newIndex].img_source);
  };

  const nextSong = () => {
    const newIndex = (currentSongIndex + 1) % Mock.data.length;
    setcurrentSongIndex(newIndex);
    audioRef.current.src = Mock.data[newIndex].srco;
    setTimeout(() => {
      if (play) audioRef.current.play();
    }, 200);
    setArtist(Mock.data[newIndex].artist);
    setName(Mock.data[newIndex].name);
    setPhoto(Mock.data[newIndex].img_source);
  };
  const shuffle = () => {
    return Math.floor(Math.random() * Mock.data.length);
  };

  const handleshuffle = () => {
    const i = shuffle();
    const selectedSong = Mock.data[i];
    setcurrentSongIndex(i);
    setArtist(selectedSong.artist);
    setName(selectedSong.name);
    setSong(selectedSong.srco);
    setPhoto(selectedSong.img_source);
    setPlay(true);
    // console.log(play);
    const audio = document.getElementById("audio-player");
    audio.src = selectedSong.srco;
    setTimeout(() => {
      audio.play();
    }, 300);
  };

  return (
    <div className="big--container">
      <div className="player--conatainer">
        <div className="border--player"></div>
      </div>

      <div className="parent--icon--div">
        <div className="icon--conatainer">
          <FontAwesomeIcon
            onClick={prevSong}
            className="icop"
            icon="fa-solid fa-backward"
            size="2xl"
            style={{ fontSize: "80px" }}
          />{" "}
          <FontAwesomeIcon
            onClick={handlPlay}
            className="icop"
            id="pause"
            icon={
              play ? `fa-solid fa-circle-pause ` : `fa-solid fa-circle-play`
            }
            size="2xl"
            style={{ fontSize: "80px" }}
          />{" "}
          <FontAwesomeIcon
            onClick={nextSong}
            className="icop"
            icon="fa-solid fa-forward"
            size="2xl"
            style={{ fontSize: "80px" }}
          />
          <FontAwesomeIcon
            style={{
              cursor: "pointer",
              paddingTop: "2rem",
              paddingLeft:"1rem",
              fontSize: "60px",
            }}
            onClick={handleshuffle}
            icon="fa-solid fa-shuffle"
            size="2xl"
          />
        </div>
      </div>
      <audio
        style={{ visibility: "hidden" }}
        controls
        id="audio-player"
        ref={audioRef}
        src={Mock.data[currentSongIndex]?.srco}
      ></audio>
    </div>
  );
}

export default Player;
