import React, { useState, useEffect } from 'react';
import memory1 from '../assets/img/kitchen.png';
import memory2 from '../assets/img/living.png';
import memory3 from '../assets/img/forest.png';
import memory4 from '../assets/img/park.png';

export const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Define tus tarjetas aquí, por ejemplo, una matriz de objetos con id y src de la imagen
  const cardArray = [
    { id: 1, src: memory1 },
    { id: 2, src: memory2 },
    { id: 3, src: memory3 },
    { id: 4, src: memory4 },
    // Agrega más tarjetas según sea necesario
  ];

  // Duplica las tarjetas para hacer los pares
  const initializeCards = () => {
    const duplicatedCards = [...cardArray, ...cardArray];
    // Mezcla las cartas
    duplicatedCards.sort(() => Math.random() - 0.5);
    setCards(duplicatedCards);
  };

  // Función para manejar el clic de una tarjeta
  const handleCardClick = (id) => {
    // Evita hacer clic en una tarjeta ya volteada o emparejada
    if (flippedCards.includes(id) || matchedCards.includes(id)) return;

    setFlippedCards([...flippedCards, id]);
  };

  useEffect(() => {
    // Si hay dos tarjetas volteadas
    if (flippedCards.length === 2) {
      // Comprueba si las dos tarjetas coinciden
      if (cards[flippedCards[0]].src === cards[flippedCards[1]].src) {
        setMatchedCards([...matchedCards, ...flippedCards]);
      }
      // Voltea las tarjetas después de un breve retraso
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  useEffect(() => {
    // Inicializa las tarjetas cuando el componente se monta
    initializeCards();
  }, []);

  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`memory-card ${flippedCards.includes(index) || matchedCards.includes(index) ? 'flip' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <img className="front-face" src={card.src} alt="Card" />
          <img className="back-face" src="img/back.jpg" alt="Back" />
        </div>
      ))}
    </div>
  );
};
