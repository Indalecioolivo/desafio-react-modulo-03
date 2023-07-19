import "./App.css";
import { musics } from "./musics";
import Logo from "./assets/logo.svg";
import Avatar from "./assets/avatar.png";
import Card from "./components/Card/Cards";
import { useState } from "react";
import Player from "./components/Player/Player";

function App() {
  const [coletorClicks, setColetorClicks] = useState({});

  return (
    <div className="app">
      <header>
        <div className="header-left">
          <img src={Logo} alt="" />
        </div>
        <div className="header-right">
          <img src={Avatar} alt="" />
          <p>Bem Vindo </p>
        </div>
      </header>

      <main>
        <h4>The best play list</h4>
        <hr />
        <div className="to-cards">
          {musics.map(
            ({ id, cover, title, description, url, onClick, artist }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  cover={cover}
                  title={title}
                  description={description}
                  url={url}
                  artist={artist}
                  setColetorClicks={setColetorClicks}
                />
              );
            }
          )}
        </div>
      </main>
      <Player
        url={coletorClicks.urlLocal}
        id={coletorClicks.idLocal}
        cover={coletorClicks.coverLocal}
        artist={coletorClicks.artistLocal}
        title={coletorClicks.titleLocal}
      />
    </div>
  );
}

export default App;
