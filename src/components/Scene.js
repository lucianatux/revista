import imgScene from "../assets/img/teatro.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Scene = () => {
  return (
    <div id="scene" className="article-div">
      <Link to="/oldeditions">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Columna "El lenguaje de las artes" por Mariano Gentile</h4>
      <p className="article-p">
        La realidad en el arte no parece ser una y absoluta. Una pintura, un
        poema guardan para sí mismos la realidad de sus imágenes y las arrojan a
        su visitante para extenderla fuera de sí. También el teatro (y como el
        fuego) alza en danzas y cantos sus llamaradas movientes y en su luz su
        potencia que abre inaugurando otra realidad: la escénica. La escena
        rompe la continuidad cotidiana y desde adentro brotan otros tiempos y
        espacios, otros seres con otros signos…, solo por un momento; el tiempo
        que dura su sustancia ardiendo.
        <br />
        <br />
        Hoy amigos míos, nos subiremos al escenario de la mano de Pompeyo
        Audivert, un maestro y artista, un profundo actor de lo metafísico y un
        pensador.
        <br />
        <br /> Con Pompeyo, el lenguaje es parte de una estrategia poética
        política de las fuerzas pulsantes del Ser a la que retornar como fuente
        de pertenencia original, como quién se sacude el polvo de viejos
        soportes y renueva su vitalidad.
      </p>
      <br />
      <h1>El Fenómeno Escénico</h1>
      <br />
      <img src={imgScene} alt="" className="article-img3" />

      <p className="article-p">
        <span>
          {" "}
          “El Teatro activa, en una asamblea metafísica, un nivel de percepción
          y de producción sagrado, lo des-oculta, y con ello plantea a la vez la
          existencia de otra naturaleza humana… Esa naturaleza primordial que en
          su momento estableció al hombre como tal… es la capacidad de creación
          poética, manifestación nostálgica de las facultades perdidas del ser
          en su encrucijada temporal; lenguaje universal creador capaz de
          desatar parentescos secretos del aire y la sangre, de abrir
          dimensiones dorsales de la identidad, de relacionar todo con todo en
          un punto radial de encaje.”
        </span>
      </p>
      <p className="article-p">
        Así, este artista, comienza el primer capítulo que lleva el mismo título
        de su libro “EL PIEDRAZO EN EL ESPEJO” . Este profundo pasaje inicial
        revela la esencia del lenguaje naciendo del ritual-artefacto que despoja
        lo superfluo que sería el yo, lo histórico y des-oculta el acto creador
        aconteciendo, abriendo paso a fuerzas que quedan en ausencia de ser
        manifestadas.
      </p>
      <p className="article-p">
        <span>
          “Se trata de un poder que se manifiesta en el hacer y el percibir, una
          capacidad de expresión de fuerzas originarias que, puestas a operar
          teatralmente, nos conectan a un sentimiento de otredad, de vacío, de
          plenitud; a una extraña y familiar sensación de ya haber sido, a otra
          percepción del tiempo, el espacio y la pertenencia.” “… Aquí cuando
          hablamos de poética, hablamos de la vacilación del sentido aparente y
          de la suspensión de su universo de referencia para el advenimiento de
          una “nueva valencia”...”
        </span>
      </p>
      <p className="article-p">
       Para este artista, la forma de encarar el acto creativo es ya
        decisivo de un lenguaje y, del que sin duda, las imágenes surgidas lo
        reflejarán. Dependerá de la conciencia de dirección que tenga el agente
        productor, dador del impulso a manifestar. Este lenguaje (anterior al
        lenguaje visible de las imágenes) se revela no con facilidad y no
        siempre que se hace una creación. Pompeyo nos orienta en este sentido
        cuando dice:
       
      </p>
      <p className="article-p">
        <span>
          “ Un teatro que da por cierta la realidad aparente y que sólo la imita
          es una teatro capturado políticamente, aunque su discurso se oponga al
          poder, ya que cede sus órganos a la maniobra representativa del plano
          histórico del que surge, traicionando su mandato sagrado de
          desenmascararlo. El extraordinario fenómeno poético y paranormal de
          actuar sería aún más perturbador y revelador de la naturaleza
          metafísica del teatro si la noción no estuviera coptada por la idea de
          “personaje”, parapeto referencial de fantasía histórica… En general,
          las dramaturgias sólo aportan calcos psíquicos y remedos de
          identidades convencionales que se deben al relato histórico que las
          parió para afirmarse. ¿Quiénes somos realmente los que actuamos y qué
          circunstancia del hombre representamos? ¿El realismo o naturalismo
          (lenguajes imitativos) no serían la prueba de que nos hemos perdido en
          nuestra propia ficción? Nos hemos creído el paisaje de convención que
          construimos como fachada para no avanzar en la conciencia de que
          venimos de la muerte y vamos a la muerte todo el tiempo; para no
          darnos cuenta de que somos parte de un sistema metafísico teatral que
          ha sido clausurado, abducido por una fuerza centrípeta y
          unidimensional de naturaleza histórica que lo redujo a parapeto. En
          vez de abismar al hombre a su dimensión radiante, lo reduce a su
          compulsión psíquica auto referencial, teatro living, coartada de
          clase. ¿El teatro no será entonces, por el contrario, la máquina que
          des-oculta al ser, al revelar como ficcionales y relativas las
          identidades con las que nos recubrimos? Por algo en la época de
          Shakespeare la iglesia no permitía que los actores fueran enterrados
          en el camposanto bajo la cruz: ¿qué tenía que hacer ese esqueleto
          subversivo bajo el escenario de Dios?”
        </span>
      </p>
      <p className="article-p">
        En nuestra aventura de hoy hemos visto cómo, anterior al lenguaje
        establecido, existe lo primordial que encuentra su movimiento en una
        realidad creacional poética muy alejada de los ornamentos que supimos
        conseguir. Sin mas distracciones los dejo aquí con alegría y la sospecha
        de que esta aventura en la que nos hemos embarcado está llegando a sus
        conclusiones finales que se concretarán luego de nuestro último atisbo
        del Arte: El Fenómeno Musical.
      </p>

      <hr />
    </div>
  );
};
