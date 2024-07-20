import imgOne from "../assets/img/tema1.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const One = () => {
  return (
      <div id="one" className="article-div">
                <Link to="/oldeditions"><button className="button-arrow"><img src={arrow} alt="" className="back-arrow"/></button></Link>
        <h1>El cuerpo es nuestra mayor herramienta</h1>
        <p className="article-p">
          <img src={imgOne} alt="" className="article-img" />
          En nuestra vida diaria, rara vez reflexionamos sobre el papel que 
          nuestro cuerpo desempeña en la formación de nuestra identidad y 
          en el desarrollo de nuestro ser. ¿Qué tal si adoptásemos 
          permanentemente la afirmación: "El cuerpo es mi mayor herramienta"? 
          Incluso podríamos ir más lejos al considerarlo nuestra herramienta 
          "maestra". Esta idea nos lleva rápidamente a buscar nuestra 
          identidad: "si no soy solo mi cuerpo, al menos soy quien lo habita". 
          Y esta nueva percepción nos impulsa a conocerlo y estudiarlo. 
          Esta simple declaración podría transformar radicalmente nuestra
           percepción de nosotros mismos y del mundo que nos rodea.
        </p>
        <hr />
        <h4>La Profundidad del Cuerpo Humano</h4>
        <p className="article-p">
        El cuerpo humano no es simplemente una máquina biológica; es un 
        compendio de dimensiones físicas, emocionales y espirituales. 
        Explorar estas dimensiones implica más que un simple estudio; 
        requiere una inmersión profunda en la complejidad de nuestro ser. 
        Desde la biofísica hasta la energética emocional y la intelectual 
        espiritual, cada aspecto de nuestro cuerpo merece atención y 
        comprensión. Debemos adoptar comportamientos que estén alineados 
        con nuestras emociones y nuestros pensamientos más elevados. 
        De esta manera, la energía que fluye a través de nuestro cuerpo, 
        nuestra herramienta primordial, se mueve de centro a centro sin
         obstrucciones energéticas ni mal uso de esta herramienta "maestra".
        </p>
        <hr />
        <h4>La Influencia de la Tecnología en Nuestra Percepción del Cuerpo</h4>
        <p className="article-p">
        En la era actual, estamos inmersos en una cultura tecnológica que ha 
        transformado nuestra forma de interactuar con el mundo, incluso con
         nuestro propio cuerpo. Términos como "dispositivo",
         "batería", "carga y descarga", "configuración",
          "ajuste", etc., han permeado
          nuestra vida cotidiana, desviando nuestra atención de la asombrosa
           complejidad de nuestro ser físico. Sin embargo, esta misma cultura
            tecnológica nos ofrece una nueva perspectiva: la de ver nuestro 
            cuerpo como una sofisticada herramienta, un "super dispositivo" 
            que merece ser explorado y comprendido.
        </p>
        <hr />
        <h4>El Cuerpo como Reflejo de Nuestra Existencia</h4>
        <p className="article-p">
        Estamos en nuestro cuerpo, él es además, nuestro pedazo de mundo 
          más fiel. Es aquel al que llegan los latidos que mi corazón 
          expresa del recorrido que hago por la existencia. 
          Reconocer esta conexión profunda con nuestro cuerpo nos invita a
          honrarlo, a cuidarlo como el tesoro que es.
        </p>
      </div>
  );
};
