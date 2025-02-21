/*import img1 from "../assets/img/newmirada2.jpg";*/
import { Link } from "react-router-dom";
import arrow from "../assets/img/arrow.png";

export const Music = () => {
  return (
    <div>
      <div className="article-div">
        <Link to="/">
          <button className="button-arrow">
            <img src={arrow} alt="" className="back-arrow" />
          </button>
        </Link>
        <h1>titulo</h1>
        <h3>subtitulo</h3>
        <p className="article-p">
          <img src={img1} alt="" className="article-img" />
          texto
          <br />
          <br />
          texto
          <br />
          <br /> 
          texto
          <br />
          <br />
         texto
          <br />
         texto
          <br />
          <br />
         cierre
        </p>
      </div>
    </div>
  );
};
