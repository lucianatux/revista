import imgPoetic1 from "../assets/img/poetic.jpeg";
import imgPoetic2 from "../assets/img/poetic2.jpeg";
import poeticPdf from "../assets/img/olgaorozco.pdf";
import downloadImg from "../assets/img/descargar.png";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Poetic = () => {
  return (
    <div id="poetic" className="article-div">
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Columna "El lenguaje de las artes" por Mariano Gentile</h4>
      <p className="article-p">
        <img src={imgPoetic1} alt="" className="article-img" />
        Queridos lectores no puedo empezar a escribir sin antes advertir que lo
        que estamos por acometer no es alimento ligero, sino un ritual literario
        con el fin de dar, tras su degustación, quizás con lo abstracto, de cara
        a lo que aún no ha surgido con cuerpo alguno y es solo accesible por la
        intuición que comienza su vuelo en la quietud de todas las cosas.
        Intentar escuchar el lenguaje de las artes es como excavar en los
        sedimentos de la historia buscando una veta eterna que nos lleve a la
        "pulsión hacedora" que deja la vida ardiente. Esta columna explora las
        diciplinas artísticas persiguiendo el átomo creativo, aquella partícula
        esencial a todas y de las que todas las diciplinas se componen. A través
        de diferentes artistas, a través de como ellos sienten y conciben lo que
        hacen haremos nuestro ritual para contactar y presenciar a la "esencia
        creadora".
      </p>
      <br />
      <h1>El fenómeno poético</h1>
      <br />
      <img src={imgPoetic2} alt="" className="article-img2" />
      <h3>
        <br />
        Alrededor de la creación poética
      </h3>
      <h5>Por Olga Orozco, poeta argentina (Fragmento)</h5>
      <p className="article-p">
        <br />
        Para Andrea, con un pájaro blanco para su hombro izquierdo y un puñado
        de luciérnagas contra cualquier oscuridad, con todo cariño.
        <br />
        <br /> “La poesía puede presentarse al lector bajo la apariencia de
        muchas encarnaciones diferentes, combinadas, antagónicas, simultáneas o
        totalmente aisladas, de acuerdo con la voz que convoca sus apariciones.
        Puede ser, por ejemplo: <br />
        Una dama oprimida por la armadura de rígidos preceptos, una bailarina de
        caja de música que repite su giro gracioso y restringido, una pitonisa
        que recibe el dictado del oráculo y descifra las señales del porvenir,
        una reina de las nieves con su regazo colmado de cristales casi
        algebraicos, una criatura alucinada con la cabeza sumergida en una nube
        de insectos zumbadores. una anciana que riega las plantas de un reducido
        jardín, una heroína que canta en medio de la hoguera, un pájaro que
        huye, una boca cerrada. <br />
        <br /> Las imágenes creadas por sus resonancias se fijan, se superponen,
        se suceden. ¿Cuál será la figura verdadera en este inagotable
        caleidoscopio? Todas y cada una. La más libre, la más trascendente sin
        retóricas, la no convencional, la que está entretejida con la sustancia
        misma de la vida llevada hasta sus últimas consecuencias. Es decir, la
        que no hace nacer fantasmas sonoros o conceptuales para encerrarlos en
        las palabras, sino que hace estallar incluso los fantasmas que las
        palabras encierran en sí mismas.
        <br />
        <br /> Pero estas conclusiones enuncian características y no
        significados de la poesía. Y es casi fatal que así sea, porque la poesía
        en su esencia, en su representación total, así como el universo, como
        esa esfera de la que hablaban Giordano Bruno y Pascal, cuyo centro está
        en todas partes y la circunferencia en ninguna, es inaprensible. No se
        la puede abarcar en ninguna definición. Cualquiera sea el centro
        cambiante desde el que se la considere —pepita de fuego, lugar de
        intersección de fuerzas desconocidas o prisma de cristal para la
        composición y descomposición de la luz—, su ámbito se traslada cuando se
        lo pretende cercar y el número de alcances que genera continuamente
        excede siempre el círculo de los posibles significados que se le
        atribuyen. Intentar reducirlos a una fórmula equivale a suspender el
        vuelo de una oropéndola, a paralizar a un ángel, a domesticar a un dios
        natural y salvaje y a someterlos a injertos, a operaciones artificiosas
        y a disecciones hasta lograr cadáveres amorfos.
        <br />
        <br /> Porque la poesía es un organismo vivo, rebelde, en permanente
        revolución, y aun la definición más feliz, la que parece aislar en una
        síntesis radiante sus resonancias espirituales y su mágica encarnación
        en la palabra, no deja de ser un relámpago en lo absoluto, un parpadeo,
        una imagen insuficiente y precaria. La poesía es siempre eso y algo más,
        mucho más. Tenemos que conformarnos con aludir a ella a través de los
        medios de que el poeta se vale para alcanzarla, confundiendo así de
        alguna manera el camino con el objetivo...”
      </p>
      <p className="text-right article-p">Olga Orozco.</p>
      <p className="article-p italic">
        {" "}
        <br />
        Poema: Yo, Olga Orozco <br />
        <br />
        Yo, Olga Orozco, desde tu corazón digo a todos que muero.
        <br /> Amé la soledad, la heroica perduración de toda fe,
        <br /> el ocio donde crecen animales extraños y plantas fabulosas,
        <br /> la sombra de un gran tiempo que pasó entre misterios y entre
        alucinaciones,
        <br /> y también el pequeño temblor de las bujías en el anochecer.
        <br /> Mi historia está en mis manos y en las manos con que otros las
        tatuaron.
        <br /> De mi estadía quedan las magias y los ritos,
        <br /> Unas fechas gastadas por el soplo de un despiadado amor,
        <br /> La humareda distante de la casa donde nunca estuvimos,
        <br />
        Y unos gestos dispersos entre los gestos de otros que no me conocieron.
        <br />
        Lo demás aún se cumple en el olvido,
        <br /> Aún labra la desdicha en el rostro de aquello
        <br /> que se buscaba en mí igual que en un espejo de sonrientes
        praderas,
        <br /> y a la que tú verás extrañamente ajena:
        <br /> mi propia aparecida condenada a mi forma de este mundo.
        <br /> Ella hubiera querido guardarme en el desdén o en el orgullo,
        <br /> en un último instante fulmíneo como un rayo,
        <br /> no en el tumulto incierto donde alzo todavía la voz ronca y
        llorada
        <br /> entre los remolinos de tu corazón.
        <br /> No. Esta muerte no tiene descanso ni grandeza.
        <br /> No puedo estar mirándola por primera vez durante tanto tiempo.
        <br />
        Pero debo seguir muriendo hasta tu muerte
        <br /> porque soy tu testigo ante una ley más honda y más oscura que los
        cambiantes sueños,
        <br /> allá, donde escribimos la sentencia:
        <br /> “Ellos han muerto ya.
        <br /> Se habían elegido por castigo y perdón, por cielo y por infierno.
        <br /> Son ahora una mancha de humedad en las paredes del primer
        aposento”.
        <br />
        <br />
      </p>
      <hr />
      <br />
      <h4>Conclusión</h4>
      <p className="article-p">
        El trazo de Olga salta y se hunde, creando imágenes de mundos
        innombrados, de fuerzas surgidas en otros reinos donde la palabra se
        mueve continuamente avanzando, penetrando profundidades para impulsar su
        nuevo salto. Bajo el sol del día, restalla en sonoridades cercanas al
        rezo, a la oración, a su dios o diosa a la que entrega la imantación de
        sus mutaciones gramaticales... <br />
        Con esto nos hace asistir a la encantación, a la magia o fuego primitivo
        del lenguaje. <br />
        Aquí, el fenómeno poético se instaura como un mandala de finas arenas de
        colores que se desvanecen por el amor de sus creadores. En este caso,
        creadora Orozco, revelando que el lenguaje brota y muere para volver a
        brotar o nacer en un dios, hoy aún extraño.
        <br />
        <br /> No se pierdan en la próxima edición de la revista digital “El ojo
        Cuántico” la segunda expedición al lenguaje de las artes: El fenómeno
        Pictórico.
      </p>
      <hr />
      <a href={poeticPdf} target="_blank" rel="noreferrer">
        <button className="download">
          Descargar pdf
          <img className="download-img invert" src={downloadImg} alt="" />
        </button>
      </a>
    </div>
  );
};
