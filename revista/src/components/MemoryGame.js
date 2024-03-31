import memory1 from '../assets/img/mem1.png';
import memory2 from '../assets/img/mem2.png';
import memory3 from '../assets/img/mem3.png';
import memory4 from '../assets/img/mem4.png';
import memory5 from '../assets/img/mem5.png';
import memory6 from '../assets/img/mem6.png';
import memory7 from '../assets/img/mem7.png';
import memory8 from '../assets/img/mem8.png';
import memory9 from '../assets/img/mem9.png';
import memory10 from '../assets/img/mem10.png';
import memory11 from '../assets/img/mem11.png';
import memory12 from '../assets/img/mem12.png';
/*import backCard from '../assets/img/fondo1.jpg';*/

export const MemoryGame = () => {
   // Array con las rutas de las imágenes
   const images = [
    memory1, memory2, memory3, memory4,
    memory5, memory6, memory7, memory8,
    memory9, memory10, memory11, memory12
  ];

  const movements= 0;
  const hits = 0;

  // Función para duplicar los elementos del array y repetirlos una vez
  const doubleImages = (arr) => {
    return arr.flatMap(image => [image, image]);
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

const doubledArray = doubleImages(images);
const shuffledArray = shuffleArray(doubledArray);
console.log(shuffledArray);

// Si shuffledArray tiene 24 elementos, llenar la tabla con cada elemento
let content = null;
if (shuffledArray.length === 24) {
  content = shuffledArray.map((image, index) => (
    <div key={index} className="memory-cell">
      <img src={image} alt={`Memory Card ${index}`} />
    </div>
  ));
} else {
  content = <p>El array no tiene 24 elementos.</p>;
}
  
  return (
    <div>
    <div className="memory-game">
             <div className="memory-grid">{content}</div>
    </div>
    <div className="d-flex justify-content-center">
    <h4>Movements:</h4>
     <h4>Hits:</h4>
    </div>
     
     </div>
  );
  


};
