import imgArticle from "../assets/img/magicnora.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";
import audioentrevista from "../assets/img/magicnora.wav";
import audioimg from "../assets/img/audio.png";

export const MagicWorld = () => {
  return (
    <div id="magicworld" className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h5>Columna "Espacio Integrador" por Glory</h5>
      <br />
      <h3>
        Sobre el Mundo Mágico, el Bosque, los Espíritus (Hadas ,Duendes, Seres
        Mitológicos, Ángeles...) y portales a Mundos Alternos coexistentes.
      </h3>
      <p className="article-p">
        "En el Umbral de lo desconocido, existe un Mundo Mágico que late con
        energía y misterio. El Bosque, con su vegetación , sus secretos
        escondidos, es el Portal a este reino encantado. Aquí, los espíritus y
        entidades de la naturaleza se manifiestan en formas y sonidos
        irreconocibles que desafían nuestra comprensión.
        <br />
        <br />
        Pero El Bosque, no es solo un lugar de encuentro, con lo desconocido.
        También es un Umbral y/o Altar a otros Mundos , donde las Leyes de la
        Física y la realidad , se doblan como el Tiempo. En este artículo,
        contamos una experiencia, algún secreto del bosque y portal que nos
        llevan a estos mundos mágicos.
        <br /><br/>
        Prepárate para un viaje,.... disponte a escuchar relajado y tener tu
        mente muy suelta ,así podrás irte , y te llevará más allá de lo que
        crees posible."
        <br />
        <br />
        Comencemos ...
      </p>
      <br />
      <div className="d-flex justify-content-center align-items-center text-align-center">
        <h1> El Cedazo de Nuestro Mundo Interno</h1>
      </div>

      <br />
      <div className="d-flex justify-content-center align-items-center text-align-center">
        <img src={imgArticle} alt="" className="article-img5" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center text-align-center">
        <p className="audio-title fs-5">
         <br/> Escuchar la entrevista
          <img className="audio-img" src={audioimg} alt="" />
        </p>
        <button className="audio-btn">
          <audio className="audiocontrols" controls>
            <source src={audioentrevista} type="audio/mpeg" />
          </audio>
        </button>
      </div>
<br/>
      <p className="article-p">
        <span>
          "...En todo verdadero sabio he visto un niño que corretea en el mundo
          de las ideas y las cosas, que crea generosas y brillantes burbujas a
          las que él mismo hace estallar. En los chispeantes ojos de todo
          verdadero sabio he visto “danzar hacia el futuro los pies ligeros de
          la alegría”. Y muy pocas veces he escuchado de su boca la palabra
          “amor”... porque un sabio verdadero nunca jura en vano."
        </span>
        <br/>
        (Silo. Humanizar la Tierra. El paisaje Interno. Capítulo Unidad y contradicción).

      </p>
      <p className="article-p">
      Si querés comentarme o susurrarme tu historia, te invito a hacerlo. 
      Gloria_Carrizo@outlook.es 
      </p>
      <hr />
    </div>
  );
};
