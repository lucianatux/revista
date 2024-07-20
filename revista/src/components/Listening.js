import imgListen from "../assets/img/listening4.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Listening = () => {
  return (
    <div>
      <div id="listening" className="article-div">
        <Link to="/">
          <button className="button-arrow">
            <img src={arrow} alt="" className="back-arrow" />
          </button>
        </Link>
        <h1>Escuchar de verdad</h1>
        <p className="article-p">
          <img src={imgListen} alt="" className="article-img3" />
          "...Existe un arte de escuchar. Para escuchar de verdad, habría que
          abandonar o hacer a un lado todos los prejuicios, formulaciones
          previas y diarias actividades. Cuando os halláis en un estado mental
          receptivo, las cosas pueden comprenderse con facilidad; cuando vuestra
          verdadera atención está puesta en algo, escucháis. Desgraciadamente,
          empero, la mayoría de nosotros escucha a través de un tamiz de
          resistencia. Nos escudamos en prejuicios religiosos o espirituales,
          psicológicos o científicos; o en nuestros diarios deseos,
          preocupaciones y temores. Escuchamos con todo eso por tamiz. De ahí
          que en realidad escuchemos nuestro propio ruido, nuestro propio
          sonido, no lo que se dice. Es en extremo difícil hacer a un lado
          nuestra educación, nuestros prejuicios, nuestras inclinaciones,
          nuestra resistencia, y, llegando más allá de la expresión verbal,
          escuchar de modo tal que comprendamos al instante...
        </p>
        <p className="article-p">
          ...Se necesita una mente en extremo astuta, un corazón
          extraordinariamente flexible, para darse cuenta de lo que es y
          seguirlo; porque lo que es está en movimiento constante, sufre
          incesante transformación; y si la mente está amarrada a la creencia,
          al saber, deja de seguir el veloz movimiento de lo que es. Lo que es
          no es estático, por cierto; se mueve constantemente, como veréis si lo
          observáis bien de cerca. Y para seguirlo necesitáis una mente activa y
          un corazón flexible, cosa imposible cuando la mente es estática,
          cuando ella está fija en una creencia, en un prejuicio, en una
          identificación; y una mente y corazón secos no pueden seguir
          fácilmente, velozmente, aquello que es"
          <br />
          <br />
          Extraído de 'La libertad primera y última' de Krishnamurti.
        </p>
        <hr />
      </div>
      <div className="exp-int">
        <h4 className="exp-title">Profundiza lo leído con esta experiencia interactiva</h4>
        <br />
        <div style={{ width: "100%", height: "80vh", border: "none" }}>
          <iframe
            src="https://lucianatux.github.io/escuchar/"
            style={{ width: "100%", height: "100%", border: "none" }}
            title="experiencia interactiva"
          />
        </div>
      </div>
    </div>
  );
};
