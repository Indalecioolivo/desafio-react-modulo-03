import { useRef, useState } from "react";
import { musics } from "../../musics";
import "./player.css";
import ButtonStop from "../../assets/stop.svg";
import ButtonPrev from "../../assets/previous.svg";
import ButtonPlay from "../../assets/play.svg";
import ButtonPause from "../../assets/pause.svg";
import ButtonNext from "../../assets/next.svg";

export default function Player({ url, id, cover, title, artist }) {
  const playerRef = useRef(null);

  const [musicDuration, setMusicDuration] = useState(0);
  const [toCurrentTime, setToCurrentTime] = useState(0);
  const [imgPlay, setImgPlay] = useState(ButtonPlay);
  const [toImgMusicInfo, setToImgMusicInfo] = useState(true);
  const musicInfoImgRef = useRef(null);
  const musicicInfoTitleRef = useRef(null);
  const musicInfoArtistRef = useRef(null);

  function handleStop() {
    playerRef.current.pause();
    playerRef.current.currentTime = 0;
    setImgPlay(ButtonPlay);
  }
  function handlePrev() {
    if (playerRef.current.id > 1) {
      playerRef.current.src = musics[playerRef.current.id - 2].url;
      playerRef.current.id--;
    } else if ((playerRef.current.id = 1)) {
      playerRef.current.src = musics[musics.length - 1].url;
      playerRef.current.id = musics[musics.length - 1].id;
    }
  }
  function handlePlay() {
    if (playerRef.current.src === "") {
    } else {
      if (playerRef.current.paused) {
        playerRef.current.play();
        setImgPlay(ButtonPause);
      } else {
        playerRef.current.pause();
        setImgPlay(ButtonPlay);
      }
    }
  }
  function handleNext() {
    if (playerRef.current.id < musics.length) {
      playerRef.current.src = musics[playerRef.current.id].url;
      playerRef.current.id++;
    } else if ((playerRef.current.id = musics.length)) {
      playerRef.current.src = musics[0].url;
      playerRef.current.id = musics[0].id;
    }
  }
  function handleMusicStart() {
    setImgPlay(ButtonPause);
    setToImgMusicInfo(false);
    setMusicDuration(playerRef.current.duration);
  }
  function handleTimeUpdate() {
    setToCurrentTime(playerRef.current.currentTime);
  }

  function defaultTime(time) {
    let minutos = 0;
    let segundos = 0;

    minutos = Math.floor((time % 3600) / 60);
    segundos = Math.floor((time % 3600) % 60);

    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="player-div">
      <div className="music-info">
        <img ref={musicInfoImgRef} src={cover} alt="" hidden={toImgMusicInfo} />
        <div>
          <h3 ref={musicicInfoTitleRef}>{title}</h3>
          <p ref={musicInfoArtistRef}>{artist}</p>
        </div>
      </div>
      <div className="player">
        <div className="player-buttons">
          <audio
            ref={playerRef}
            src={url}
            id={id}
            autoPlay
            onPlay={handleMusicStart}
            onTimeUpdate={handleTimeUpdate}
          ></audio>
          <button className="b-stop" onClick={handleStop}>
            <img src={ButtonStop} alt="" />
          </button>
          <button className="b-prev" onClick={handlePrev}>
            <img src={ButtonPrev} alt="" />
          </button>
          <button className="b-play" onClick={handlePlay}>
            <img src={imgPlay} alt="" />
          </button>
          <button className="b-next" onClick={handleNext}>
            <img src={ButtonNext} alt="" />
          </button>
        </div>
        <div className="prog-bar">
          <p>{defaultTime(toCurrentTime)}</p>
          <input
            id="progress"
            type="range"
            min={0}
            max={musicDuration}
            value={toCurrentTime}
          />
          <p>{defaultTime(musicDuration)}</p>
        </div>
      </div>
      <div className="vol-div">
        <input type="range" id="vol-bar" min={0} max={10} value={0} />
      </div>
    </div>
  );
}
