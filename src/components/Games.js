import { Link } from "react-router-dom";
import memoryGame from "../assets/img/memo4.jpg";
import wordleGame from "../assets/img/wordle.jpg";
import jumping from "../assets/img/jumping3.jpg";
import crossword from "../assets/img/crossword2.jpg";
import simon from "../assets/feb2025/simon.jpg";

export const Games = () => {
  return (
    <div className="old-editions-div text-dark">
      <h3>JUEGOS</h3>
      <div className="game-old-editions">
        <div className="games-edition">
          <div className="old-articles">
            <Link to="/simon">
              <div className="elem-article-div ">
                <img src={simon} alt="" className="small-img" />
                <p>Simón dice</p>
              </div>
            </Link>
            <Link to="/crossword">
              <div className="elem-article-div ">
                <img src={crossword} alt="" className="small-img" />
                <p>Crucigrama</p>
              </div>
            </Link>
            <Link to="/jump">
              <div className="elem-article-div">
                <img src={jumping} alt="" className="small-img" />
                <p>El Juego de Saltar</p>
              </div>
            </Link>
            <Link to="/wordle">
              <div className="elem-article-div">
                <img src={wordleGame} alt="" className="small-img" />
                <p>Nuestro Wordle</p>
              </div>
            </Link>
            <Link to="/memory-game">
              <div className="elem-article-div ">
                <img src={memoryGame} alt="" className="small-img" />
                <p>El Juego de la Memoria</p>
              </div>
            </Link>
          </div>
        </div>
      
      </div>
    </div>
  );
};
