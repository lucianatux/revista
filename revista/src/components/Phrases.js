import { useState } from "react";
import 'animate.css';

export const Phrases = () => {
  const phrasesarray = [
    "« frase1 » autor",
    "« frabgn nbgjnlkfbh fghjnklnmbh fhkjhk fhokjoij kjhoij hholihohse2 » autor",
    "« frase3 » autor",
    "« frase4 » autor",
    "« frase5 » autor",
    "« frase6 » autor",
    "« frase7 » autor",
    "« frase8 » autor",
  ];

  const [selectedPhrase, setSelectedPhrase] = useState("");
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state


  const selectRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrasesarray.length);
    const randomPhrase = phrasesarray[randomIndex];
    setSelectedPhrase(randomPhrase);
  };
 

  const hidePhrase = () => {
    setIsAnimating(true); // Set animation flag before hiding
    setTimeout(() => {
      setSelectedPhrase("");
      setIsAnimating(false); // Reset animation flag after hiding
    }, 1000); // Adjust timeout for animation duration
  };

  
  return (
    <div>
      <div className="phrase-button-div">
        <div className="text-button">
          Click aquí &#8594;
          <img
            src="https://i.gifer.com/XDZT.gif"
            alt="Example GIF"
            id="phrase-button"
            onClick={selectRandomPhrase}
          />
          <br /> para obtener tu frase al azar
        </div>
      </div>
      <div
        id="phrase-div"
        className={`animate__animated ${
          isAnimating ? "animate__fadeOutUpBig" : "animate__fadeInDownBig"
        }`}
        style={{ display: selectedPhrase ? "block" : "none" }}
      >
        <div className="textandbutton-div">
          <p id="phrase-text">{selectedPhrase}</p>
          <button id="goon-button" onClick={hidePhrase}>continuar</button>
        </div>
      </div>
    </div>
  );
};
