import imgBody from "../assets/img/body3.jpg";
import imgBody2 from "../assets/img/body2.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Body = () => {
  return (
    <div id="body" className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Tu cuerpo es tu amigo más cercano</h4>
      <p className="article-p">
        En esta columna de la revista digital "El Ojo Cuántico" vamos a
        desarrollar a través de varias publicaciones el tema de enfermedades de
        dolor y fatiga crónica, como es la fibromialgia. La podremos abordar
        desde el punto de vista del paciente como de su entorno, sea familia y/o
        amig@s.
      </p>
      <br />
      <img src={imgBody2} alt="" className="article-img" />

      <p className="article-p">
        Para llegar a éste diagnóstico es muy probable que hayas pasado por todo tipo
        de estudios médicos, análisis y especialistas médicos, que por descarte
        llegan a decir, es fibromialgia. Lo que tienen en común todos los
        pacientes es que han pasado por momentos de mucho estrés o exigencia,al
        punto del desgaste del sistema nervioso que colapsa.
      </p>
      <p className="article-p">
        El dolor es 24/7. Tendrás días muy malos,de crisis. Tendrás días que el
        dolor es una molestia constante,pero con la fortuna que podrás
        levantarte de la cama o el sillón,y ése día lo agradecería con todo el
        corazón.
      </p>
      <p className="article-p">
        La fibromialgia no nos define, somos personas con muchas cualidades, y
        entre tantas características está la fibromialgia.
      </p>
      <p className="article-p">Cuando sientas que vas a colapsar recuerda:</p>
      <img src={imgBody} alt="" className="article-img4" />

      <p className="article-pp">Un pensamiento a la vez</p>
      <p className="article-pp">Una cosa a la vez</p>
      <p className="article-pp">Un día a la vez</p>
      <hr />
    </div>
  );
};
