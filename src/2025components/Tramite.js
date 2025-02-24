import img1 from "../assets/feb2025/tramite.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Tramite = () => {
  return (
    <div id="pictorial" className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Columna "Espacio Integrador"</h4>
      <p className="article-p">
        En este relato transcripto de una experiencia vivida por alguien he
        involucrado alguna maravillosa experiencia propia. Espero lo disfruten.
        Graciela, es la protagonista principal.
        <br />
        <br />
      </p>
      <br />
      <h1>El Trámite</h1>
      <h4>(Acción válida y algo más...)</h4>
      <br />
      <img src={img1} alt="" className="article-img2" />

      <p className="article-p">
        El otro día, sin pensarlo demasiado, hice un acto unitivo. Ayer tuve que
        hacer un trámite. No sé si ustedes han tenido un problema con la obra
        social, cuando vas y la secretaria te dice: "No", y porque tiene ganas
        de contestar que no, aunque sea sí. Y cuando me fui, en verdad salí con
        la cabeza caliente, como una pava al fuego. Sabía que debía encontrar
        una solución, y aunque no tenía certezas, repetía para mis adentros
        mientras bajaba las escaleras: "Algo va a salir", repetía como un
        mantra...
        <br />
        <br />
        Y al salir de aquel edificio, me sentía atrapada en una rutina sin
        sentido. Pero en medio de mi confusión, recordé que siempre llevo mi
        esfera interior, siempre está cerca mío y me recuerda que, pase lo que
        pase, hay una salida. Así que tomé aire y me obligué a seguir adelante.
        <br />
        <br />
        Después del trámite, aún molesta, fui a comprar tintura para el cabello.
        La vendedora, ya conocida por mí, que me atendía, me miró con el ceño
        fruncido. Evidentemente, mi expresión reflejaba todo el enojo que
        llevaba dentro. Al preguntarme qué me pasaba, sentí que debía
        explicarle. Y así fue como, sin esperarlo, aquella conversación se
        convirtió en un intercambio genuino. Ella también estaba lidiando con
        sus propios problemas; de algún modo, mi relato la hizo sentirse
        comprendida.
        <br />
        <br />
        Aún con mi mente en la obra social y los trámites pendientes, salí del
        negocio. Fue entonces cuando vi a una señora esperando el colectivo. Al
        acercarme, noté en su mirada algo familiar, una mezcla de resignación y
        esperanza. Nos pusimos a hablar y, en medio de la charla, me contó que
        trabajaba cuidando a una anciana de 98 años. Su preocupación era que los
        hijos decidieron internarla en un geriátrico, sabía que eso significaría
        su fin. La anciana no quería ir, y no quería dejarla de cuidar.
        <br />
        <br />
        Me conmovió su dilema. Pensé en la anciana y en cómo me sentiría en su
        lugar. Sentí la necesidad de ayudar. Entonces, le conté a la señora que
        tenía una hija que trabajaba en un geriátrico y, tal vez, podía ofrecer
        una solución alternativa. Sin dudarlo, le pedí su contacto. Horas más
        tarde, llamé a mi hija, quien me confirmó que en aquel geriátrico
        siempre estaban necesitando personal nocturno. Le pasé la información a
        la señora y, de repente, su angustia se transformó en alivio.
        <br />
        <br />
        Ahí entendí. A veces nos quedamos atrapados en nuestros propios
        problemas, dándoles una importancia que nos ahoga. Pero cuando salimos
        de nosotros mismos y buscamos ayudar a otros, la carga se vuelve ligera.
        Ese día, lo que parecía un cúmulo de frustraciones se convirtió en una
        oportunidad para hacer algo bueno. Esos actos que te gustaría repetir un
        millón de veces...
        <br />
        <br />
        Me di cuenta de que la clave no era solo resolver mis propios asuntos,
        sino encontrar un propósito más grande. Y así, entre casualidades y
        encuentros fortuitos, entendí que cada pequeño acto de ayuda, por
        insignificante que parezca, tiene el poder de transformar no solo el día
        de alguien, sino también el propio. Al alejarme y dejarla atrás a la
        señora, subí al colectivo. Ya estaba anocheciendo, iba sentada junto a
        la ventanilla, me dormité, y en ese juego de luces del alumbrado
        público, medio amarillento, en un abrir y cerrar de ojos, descendí del
        ómnibus en la parada de siempre. Desconocí el paisaje. Atiné a caminar
        por el lugar... Me era desconocido, como si el barrio por donde caminaba
        no fuera el que conocía. Había casas que faltaban, o quizás cosas que no
        pertenecían a la imagen actual; donde hubo casas, había campos vacíos.
        Crucé la calle extasiada por lo incomprensible. Un crujido de rama me
        volvió al lugar original y me sacó de ese lugar desconocido o de otro
        tiempo.
      </p>

      <hr />
    </div>
  );
};
