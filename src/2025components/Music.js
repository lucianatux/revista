import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/feb2025/Las valquirias.png";
import img2 from "../assets/feb2025/Parsifal.png";
import arrow from "../assets/img/arrow.png";
import audioFile from "../assets/sound/lacabalgatadelasvalkirias.mp3"; 



export const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Iniciar en reproducción

  useEffect(() => {
    // Inicializar audio solo una vez
    audioRef.current = new Audio(audioFile);
    audioRef.current.loop = true; // Para que se repita si es necesario
    audioRef.current.play().catch((error) => console.error("Error al reproducir:", error));

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reiniciar al salir
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.error("Error al reproducir:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev); // Alterna entre reproducir y pausar
  };

  
  return (
    <div className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <button onClick={togglePlayPause} className="wagner-btn">
        {isPlaying ? "Pausar música" : "Reproducir música"}
      </button>
      <h4>Columna "El lenguaje de las artes" por Mariano Gentile</h4>
      <h1>El Fenómeno Musical</h1>

      <p className="article-p">
        La historia de la música occidental llega a su mayor desarrollo en la
        composición orquestal donde se entrelazan, armonizan y juegan la
        mayor cantidad de instrumentos musicales. Este tiempo es conocido como
        la edad de oro de la música sinfónica y por supuesto tiene a sus genios
        que aún hoy nos deslumbran con sus grandes creaciones: Mozart, Bach,
        Vivaldi, Bethoven, entre otros. Hoy nos apoyamos en uno de estos genios
        que, aunque polémico por sus comentarios y escritos antisemitas, es sin
        duda alguna un renovador y un revolucionario en lo que a su arte
        concierne; siendo catalogado como el iniciador de la música moderna.
        Estamos hablando de Richard Wagner.
        <br />
        <br /> Amigos lectores de la revista “El ojo cuántico”, nos preparamos
        para entrar una vez mas en esta caprichosa búsqueda del lenguaje de las
        artes, tomando esta vez como punta de lanza para nuestro ámbito en el
        fenómeno musical a Wagner quién se encargó de llevarlo a un nuevo nivel
        de expresión.
      </p>
      <br />
      <h4>La orquesta Wagneriana: una expansión sin precedentes</h4>
      <br />
      <img src={img1} alt="" className="article-img2" />

      <p className="article-p">
        Uno de los aspectos más revolucionarios de Wagner fue la expansión del
        papel de la orquesta que dejó de ser un mero acompañamiento para
        convertirse en un protagonista del drama. En su libro “Opera y Drama”
        (1851) describe su idea del “arte total” (Gesamtkunstwerk), la
        integración total de las artes.
        <br />
        <br />
        <br />
        <br />
        “...Cada una de las artes parciales ha de perder su independencia y
        disolverse en una obra común, en la que ninguna de ellas reclame
        primacía, sino que todas contribuyan de igual manera a la expresión del
        drama. ”
        <br />
        <br />
        <br />
        Con esto, Wagner propone una fusión entre música, teatro, poesía,
        escenografía y vestuario, donde la ópera deja de ser una simple
        exhibición vocal para convertirse en un drama total.
        <br />
        <br />
        <img src={img2} alt="" className="article-img2" />
        <br />
        En la instrumentación ampliada, Wagner aumentó el tamaño de la orquesta
        con nuevas combinaciones tímbricas. Introdujo instrumentos como la tuba
        wagneriana, diseñada específicamente para El anillo del nibelungo, y
        amplió la sección de metales para lograr sonoridades más profundas.
        <br />
        <br />
        El uso de la orquesta como narrador dejó de depender de los cantantes
        para explicar la trama. Wagner utilizó la orquesta para expresar
        emociones y dar cohesión dramática. A través del Leitmotiv (música como
        lenguaje emocional) podía recordar ideas o anticipar acontecimientos sin
        necesidad de palabras. Sobre el leitmotiv escribe:
        <br />
        <br />
        "El motivo musical debe ser el recuerdo mismo del sentimiento, una voz
        que regresa para guiarnos en el drama".
        <br />
        <br />
        Con esto, introduce la idea de que la música puede actuar como símbolo
        recurrente que no solo identifica personajes o situaciones, sino que
        también evoluciona emocionalmente a lo largo de la obra.
      </p>
      <hr />
      <br />
      <h4> La revolución armónica: el camino hacia la atonalidad</h4>
      <br />
      <p className="article-p">
        Con la disolución de la tonalidad, Wagner desafió la armonía tradicional
        al retrasar las resoluciones tonales. Un ejemplo clave es el acorde de
        Tristán , que abre su opera Tristán e Isolda (1865):
        <br />
        <br /> “Un acorde ambiguo que no se resuelve de inmediato, generando una
        tensión infinita.”
        <br />
        <br />
        Este enfoque de la armonía influyó directamente en compositores
        posteriores como Gustav Mahler, Richard Strauss y, sobre todo, Arnold
        Schoenberg, quien vio en Wagner el punto de partida hacia la atonalidad
        y el dodecafonismo.
        <br />
        <br />
        <br />
        La Modulación sin preparación, en sus obras tardías, Wagner introduce
        cambios de tonalidad abruptos sin una preparación convencional. Esto
        anticipa el cromatismo extremo y la disolución de la tonalidad para
        futuros compositores. Ejemplo: En Parsifal (1882), usa armonías que
        parecen moverse libremente, sin un centro tonal fijo, creando una
        sensación de "suspensión" que anticipa el impresionismo. Wagner
        revolucionó la música sinfónica al expandir la orquesta, romper con las
        estructuras tonales convencionales e introducir una nueva relación entre
        música y narrativa. Su impacto se siente en la sinfonía tardía del siglo
        XIX, en la música programatica, en la atonalidad y hasta en el cine.
        <br />
      </p>
      <hr />
      <br />
      <h4> Wagner y el sinfonismo más allá de la sala de conciertos</h4>
      <br />
      <p className="article-p">
        El impacto de Wagner llegó incluso al cine, donde su técnica del
        Leitmotiv fue adoptada por compositores como Max Steiner ( Lo que el
        viento se llevó ), Erich Korngold ( Robin Hood ), y más tarde John
        Williams ( Star Wars ). Ejemplo: En Star Wars , cada personaje tiene un
        tema musical asociado, un concepto directamente tomado de Wagner.
        <br />
      </p>
      <hr />
      <br />
      <h4>  Wagner y su influencia en la literatura</h4>
      <br />
      <p className="article-p">Thomas Mann y James Joyce entren otros, se inspiraron en su concepto de la obra de arte total . El 
mito y lo arquetípico para Wagner, permitía ir mas allá de la opereta. Al basar muchas de sus óperas 
en mitos nórdicos y medievales ( El anillo del nibelungo , Parsifal , Tristán e Isolda ), compartía 
con los simbolistas el interés por lo poético , lo onírico y lo trascendente. Esto resonaba con el 
deseo simbolista de explorar realidades ocultas detrás de la apariencia cotidiana. Charles Baudelaire 
fue uno de los primeros en reconocer a Wagner como un genio visionario. En su ensayo Richard 
Wagner y Tannhäuser en París (1861), escribió:
        <br />
        <br /> "La música de Wagner es un poema sin palabras, una pintura sin formas; es el arte que 
        se acerca más al sueño y al infinito."
        <br />
        <br /> Uno de los conceptos clave en la relación entre Wagner y el simbolismo es la sinestesia , la 
interconexión entre los sentidos (ver sonidos, oler colores, etc.). Baudelaire desarrollará esta idea en 
su poema Correspondencias :
        <br />
        <br /> "Los perfumes, los colores y los sonidos se responden."
        <br />
        <br /> Este concepto es paralelo a la forma en que Wagner construye sus óperas: los Leitmotivs actúan 
        como "colores sonoros", evocando ideas y emociones de manera no verbal.
        <br />
        <br />
        <br /> Su impacto y visión de futuro llega incluso a la cultura pop: su Cabalgata de las valquirias ha sido 
utilizada en películas como Apocalypse Now y en muchos anuncios publicitarios.

        <br />
        <br />
        <br />Richard Wagner no solo transformó la ópera, sino que dejó un legado teórico y filosófico que 
influyó en toda la música y el arte posterior. Sus conceptos como la obra de arte total 
(Gesamtkunstwerk ), el Leitmotiv y su idea del drama musical marcaron un antes y un después en la 
historia de la música.
        <br />
        </p>
      <hr />
      <br />
      <br />
      <p className="article-p"> Es así, amigos lectores, como el lenguaje es cuerpo y es forma que encuentra la sensibilidad para 
manifestarse plenamente luego de haberse perdido en los modismos epocales que guardan de ella 
solo superficiales trazos de su sentido de ser. Toda decadencia es proclamada en su tiempo como 
“éxito”, allí donde se ha detenido el acto creador. Es en este tiempo donde nace la revolución que 
busca liberarse del oscurecimiento del alma.
        <br />
        <br />
        <br /> Con el Fenómeno Musical y Richard Wagner terminamos nuestra exploración del lenguaje del arte 
y será en el próximo número de la revista “El ojo cuántico” que nos animaremos a la conclusión y 
síntesis de nuestro extenso viaje. Con la esperanza de haber tocado alguna fibra en ustedes me 
despido feliz y sonriente.
       
      </p>

      <hr />
    </div>
  );
};
