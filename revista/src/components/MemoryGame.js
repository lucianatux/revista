import { useState } from "react";
import memory1 from "../assets/img/mem1.png";
import memory2 from "../assets/img/mem2.png";
import memory3 from "../assets/img/mem3.png";
import memory4 from "../assets/img/mem4.png";
import memory5 from "../assets/img/mem5.png";
import memory6 from "../assets/img/mem6.png";
import memory7 from "../assets/img/mem7.png";
import memory8 from "../assets/img/mem8.png";
import memory9 from "../assets/img/mem9.png";
import memory10 from "../assets/img/mem10.png";
import memory11 from "../assets/img/mem11.png";
import memory12 from "../assets/img/mem12.png";

const images = [
  memory1,
  memory2,
  memory3,
  memory4,
  memory5,
  memory6,
  memory7,
  memory8,
  memory9,
  memory10,
  memory11,
  memory12,
];

// Función para duplicar los elementos del array y repetirlos una vez
const doubleImages = (arr) => {
  return arr.flatMap((image) => [image, image]);
};

// Función para desordenar un array utilizando el algoritmo de Fisher-Yates
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const shuffledArray = shuffleArray(doubleImages(images));

const MemoryCell = ({ image, handleCellClick }) => (
  <div className="memory-cell" onClick={() => handleCellClick(image)}>
    <img src={image} alt="Memory Card" />
  </div>
);

export const MemoryGame = () => {
  const [card01, setCard01] = useState(null);
  const [card02, setCard02] = useState(null);

  let movements = 0;
  let hits = 0;
  let uncoveredCards = 0;
  let firstResult = null;
  let secondResult = null;

  function buttonRestartAction() {
    window.location.reload(true);
  }

  // Si shuffledArray tiene 24 elementos, llenar la tabla con cada elemento
  let content = null;
  if (shuffledArray.length === 24) {
    content = shuffledArray.map((image, index) => (
      <div
        key={index}
        className="memory-cell"
        onClick={(e) => handleCellClick(image, e)}
      >
        <img src={image} alt={`Memory Card ${index}`} />
      </div>
    ));
  } else {
    content = <p>El array no tiene 24 elementos.</p>;
  }

  const handleCellClick = (imageSrc, event) => {
    const cell = event.currentTarget;
    const imgElement = cell.querySelector("img");

    if (imgElement.style.display === "block") {
      imgElement.style.display = "none";
      cell.classList.remove("active");
    } else {
      imgElement.style.display = "block";
      cell.classList.add("active");
    }
    if (card01 !== null) {
      setCard02(imageSrc);
    } else {
      setCard01(imageSrc);
    }
  };

  return (
    <div>
      <div className="memory-game">
        <div className="memory-grid">{content}</div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <p className="p-4">Movements: {movements}</p>
        <p className="p-4">Hits: {hits}</p>
        <button onClick={buttonRestartAction} className="text-light p-4">
          Restart
        </button>
      </div>
    </div>
  );
};
