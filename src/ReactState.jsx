import { useState } from "react";
import { sculptureList } from "./data";

function ReactState() {
  const [index, setIndex] = useState(0); //index başlangı. olarak 0 a eşitlenir    setındex:index değerini güncellemek için indexi tek setindex ile güncelleyebiliriz

  const [showMore, setShowMore] = useState(true);

  let sculpture = sculptureList[index];

  function handlePreviousClick() {
    //console.log("Geri tıklandı");
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);
    }
  }

  function handleNextClick() {
    //console.log("İleri Tıklandı");
    //index=index+1;
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <>
      <button onClick={handlePreviousClick}>Geri</button>
      <button onClick={handleNextClick}>İleri</button>

      <h2>
        <i>
          {sculpture.name} by {sculpture.artist}
        </i>
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />

      <p>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Hide" : "Show"} Details
        </button>
      </p>

      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}

export default ReactState;
