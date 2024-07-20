import { useState, useEffect } from "react";
import { SingleCard } from "./SingleCard";
import memory1 from "../assets/img/game/celticknot.jpg";
import memory2 from "../assets/img/game/cuboctaedro.jpg";
import memory3 from "../assets/img/game/dode.jpg";
import memory4 from "../assets/img/game/enea.jpg";
import memory5 from "../assets/img/game/flowerlife.jpg";
import memory6 from "../assets/img/game/infinity.jpg";
import memory7 from "../assets/img/game/torus.jpg";
import memory8 from "../assets/img/game/seedlife.jpg";
import memory9 from "../assets/img/game/stone.jpg";
import memory10 from "../assets/img/game/treelife.jpg";
import memory11 from "../assets/img/game/triskel.jpg";
import memory12 from "../assets/img/game/yantra.jpg";
import { Link } from "react-router-dom";
import arrow from "../assets/img/arrow.png";


const cardImages = [
  { src: memory1},
  { src: memory2 },
  { src: memory3 },
  { src: memory4 },
  { src: memory5 },
  { src: memory6 },
  { src: memory7 },
  { src: memory8 },
  { src: memory9 },
  { src: memory10 },
  { src: memory11 },
  { src: memory12 },
];

export const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else{
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(()=>{
          resetTurn();
        }, 2000);
      }
    }
  }, [choiceOne, choiceTwo]);


  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start a new game automatically 
  useEffect(() =>{
    shuffleCards();
  },[]);

  return (
    <div id="game" className="memory-game p-3">
                      <Link to="/oldeditions"><button className="button-arrow"><img src={arrow} alt="" className="back-arrow"/></button></Link>
      <h1 className="game-title">El Juego de la Memoria</h1>
      <button onClick={shuffleCards} className="new-game">
        Nuevo Juego
      </button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice} 
            flipped = {card === choiceOne || card === choiceTwo || card.matched}
            disabled = {disabled}
          />
        ))}
      </div>
      <p>Turnos: {turns}</p>
    </div>
  );
};
