import Info from "./components/Info";
import "./App.css";
import Player from "./components/Player.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloudUpload, fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import List from "./components/List";
import Mock from "./services/Mock.json";
library.add(fas);
function App() {
  const [active, setActive]  = useState(false)
  const [play, setPlay] = useState(false);
  const [currentSongIndex, setcurrentSongIndex] = useState(0);
  const [artist, setArtist] = useState(Mock.data[0].artist);
  const [name, setName] = useState(Mock.data[0].name);
  const [Photo, setPhoto] = useState(Mock.data[0].img_source);
  const [song, setSong] = useState(Mock.data[0].srco);
  return (
    <div className="App">
      <div>
        <List
          currentSongIndex = {currentSongIndex}
          setcurrentSongIndex={setcurrentSongIndex}
          setArtist={setArtist}
          setName={setName}
          setSong={setSong}
          setPhoto={setPhoto}
          setPlay={setPlay}
          play={play}
          song={song}
        />
      </div>
      <div style={{ width: "50%" }}>
        <Info artist={artist} name={name} Photo={Photo} />
        <Player
          setArtist={setArtist}
          setName={setName}
          setPhoto={setPhoto}
          setPlay={setPlay}
          setSong={setSong}
          song={song}
          play={play}
          setcurrentSongIndex={setcurrentSongIndex}
          currentSongIndex={currentSongIndex}
        />
      </div>
    </div>
  );
}

export default App;
