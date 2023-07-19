import "./cards.css";

export default function Cards({
  title,
  description,
  cover,
  id,
  url,
  artist,
  setColetorClicks,
}) {
  function handleClick(urlLocal, idLocal, coverLocal, artistLocal, titleLocal) {
    setColetorClicks({
      idLocal,
      urlLocal,
      coverLocal,
      artistLocal,
      titleLocal,
    });
  }
  return (
    <div>
      <div
        className="Card"
        key={id}
        onClick={() => handleClick(url, id, cover, artist, title)}
      >
        <img src={cover} alt="" />
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
