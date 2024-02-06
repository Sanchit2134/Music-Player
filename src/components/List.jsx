import React from "react";
import "./List.css";
import Mock from "../services/Mock.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function List({
  currentSongIndex,
  setcurrentSongIndex,
  setName,
  setArtist,
  setSong,
  setPhoto,
  setPlay,
  play,
}) {
  const handleSelect = (i) => {
    const selectedSong = Mock.data[i];
    setcurrentSongIndex(i);
    setArtist(selectedSong.artist);
    setName(selectedSong.name);
    setSong(selectedSong.srco);
    setPhoto(selectedSong.img_source);
    setPlay(true);
    console.log(play)
    const audio = document.getElementById("audio-player");
    audio.src = selectedSong.srco;
    setTimeout(() => {
      audio.play();
    }, 300);
  };
  return (
    <div className="parent--container">
      <h1>Songs</h1>
      <div className="songlist">
        {Mock.data.map((e, i) => {
          return (
            <div
              key={e.name}
              className={i == currentSongIndex ? `second--song` : `song`}
              onClick={() => handleSelect(i)}
            >
              <div className="first">
                <h2>{e.name} </h2>
                <span>{e.artist} </span>
                <FontAwesomeIcon
                  className="icop"
                  id="pause"
                  icon="fa-solid fa-circle-play"
                  size="2xl"
                  style={{ fontSize: "30px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
