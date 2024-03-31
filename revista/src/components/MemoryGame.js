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
import backCard from '../assets/img/fondo1.jpg';

export const MemoryGame = () => {
   // Array con las rutas de las imágenes
   const images = [
    memory1, memory2, memory3, memory4,
    memory5, memory6, memory7, memory8,
    memory9, memory10, memory11, memory12
  ];

  // Función para obtener una matriz aleatoria de índices para las imágenes
  const shuffleImages = () => {
    const shuffledIndexes = [...Array(12).keys()].sort(() => Math.random() - 0.5);
    return [...shuffledIndexes, ...shuffledIndexes]; // Duplicamos los índices para emparejar cada imagen
  };

  // Renderizar las celdas de la tabla
  const renderCells = () => {
    const shuffledIndexes = shuffleImages();
    return shuffledIndexes.map((index, key) => (
      <div key={key} className="memory-cell">
        <img src={images[index]} alt={`Memory Card ${index}`} />
      </div>
    ));
  };

  
  return (
    <div className="memory-game">
       <div className="memory-grid">{renderCells()}</div>S
       
    </div>
  );
  


};
