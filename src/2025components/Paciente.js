import img1 from "../assets/feb2025/fibro.jpg";
import img2 from "../assets/feb2025/paciente.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Paciente = () => {
  return (
    <div id="pictorial" className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Columna "Tu cuerpo es tu mejor amigo"</h4>
      <img src={img1} alt="" className="article-img5" />

      <p className="article-p">
        En este cuadro vemos sólo algunos síntomas de la fibromialgia.
        <br />
        <br />
        <br />
        <br />Y hoy publicaré un relato sobre cómo lo vive una paciente...
      </p>

      <br />
      <h2>Relato de una paciente con fibromialgia</h2>
      <br />
      <div className="d-flex flex-column justify-content-center align-items-center ">
      <img src={img2} alt="" className="article-img2" />
      <p>El truco está en la aceptación.</p>
      </div>
      

      <p className="article-p">
      «Años... sufriendo dolores y una cantidad de cambios sin razón o motivo
        aparente... hasta que llega el momento en que te dicen que tienes
        fibromialgia... En ese instante, surgen dos sentimientos: el alivio de
        saber por fin qué tienes y la incertidumbre de preguntarte: "¿Y ahora,
        cómo lo enfrento?"
        <br />
        <br />
        Pero cada día es una batalla ganada.
        <br />
        <br />
        La falta de ánimo, el deseo de estar acostada, la toma frecuente de
        medicamentos… En fin, una farmacia entera sobre la mesita de noche. A
        eso se suman los miles de comentarios:
        <br />
        —"¿Por qué has engordado así?"
        <br />
        —"¡Ese pelo lo tienes horrible y se te está cayendo! ¡Tanto cabello que
        tenías!"
        <br />
        —"¿Y esas manchas? ¡Tan bien que se veía tu cara! ¿Qué te pasó?"
        <br />
        ... Todo eso es cierto, y por eso lo comparto. ¡Las enfermedades
        silenciosas e invisibles sí existen!
        <br />
        <br />
        <br />
        Cuando tienes una enfermedad invisible, es difícil luchar con la gente
        ignorante. No lo entienden. Cansad@ de que me digan: "¿Fuiste al
        médico?", "¿Probaste esto?", "¿Probaste aquello?". ¡Sí! ¡Ya probé y sigo
        probando de todo!
        <br />
        <br />
        Los médicos dicen que esta enfermedad es para siempre, que no voy a
        sanar. Sin embargo, no me voy a dar por vencid@, pero quiero hacer que
        los demás se den cuenta.
        <br />
        <br />
        Una siesta no me curará, pero sí me ayudará, y mucho. Sin embargo, a
        muchos no les gusta que los enfermos durmamos tanto. No soy perezos@,
        estoy tomando medicamentos, y eso me provoca mucho sueño todo el día.
        Lucho con el dolor, los problemas de movilidad, la fatiga, el cansancio
        extremo y, aparte, las críticas de mi entorno a diario. La parte más
        frustrante es que la gente me mira y dice: "No puede ser tan malo; te
        ves bien", a pesar del hecho de que mi cuerpo está experimentando un
        dolor insoportable por todas partes. Claro que se me ve bien siempre, es
        una enfermedad "#Invisible".
        <br />
        <br />
        <br />
        Me disculpo si no voy a eventos a los que me encantaría asistir. Un día
        entenderás mis luchas diarias. Esta enfermedad me afecta físicamente,
        mentalmente y emocionalmente.
        <br />
        <br />
        Necesito tu apoyo, no tu juicio.
        <br />
        <br />
        Si caigo, no necesito que me levantes; necesito que te tires al suelo
        conmigo hasta que yo tenga fuerzas, ganas y ánimo para seguir adelante.
        <br />
        <br />
        Porque las enfermedades raras autoinmunes no se ven... se sienten.
        <br />
        <br />Y están ahí... atacando silenciosa, pero extra dolorosamente.»
      </p>
      <p className="article-p">
        Es la voz de una entre tantos relatos sobre vivir con fibromialgia.
      </p>
      <hr />
    </div>
  );
};
