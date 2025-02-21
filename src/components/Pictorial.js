import imgPictorial from "../assets/img/pictorico.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Pictorial = () => {
  return (
    <div id="poetic" className="article-div">
      <Link to="/oldeditions">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>Columna "El lenguaje de las artes" por Mariano Gentile</h4>
      <p className="article-p">
        Queridos lectores del Ojo Cuántico, hoy vamos a inmiscuirnos en la
        expresión de quién, sin lugar a dudas, establece el giro más absoluto
        por lo menos en occidente, de la Pintura: Vasili Kandinsky.
        <br/><br/> Quien
        escucha su nombre habiendo conocido algunos de sus cuadros, rápidamente
        establece un vínculo con lo Abstracto. Aquello inmanente de la imagen
        que resiste a toda reducción de lo superfluo, el movimiento interior que
        con la fuerza de su necesidad “acontece”. A través de su pensamiento nos
        adentraremos en el Color y el Plano, el Punto y la Línea, los bastiones
        de su paleta que danzan para el ojo, que sin apuro, sobrevuela sus
        construcciones eternas y perpetuas de movimiento.
      </p>
      <br />
      <h1>El Fenómeno Pictórico</h1>
      <br />
      <img src={imgPictorial} alt="" className="article-img2" />

      <p className="article-p">
        Kandinsky advierte magistralmente al arte moverse en el espíritu. En su
        libro “Sobre lo espiritual en el arte” establece un movimiento de
        estructura y lo grafica de este modo: 
        
        <br/><br/>“...la vida espiritual sería
        como un triángulo agudo dividido en tres partes desiguales. La menor y
        más aguda señala hacia arriba; a medida que se desciende, cada parte se
        va agrandando y ensanchándose. Este triángulo tiene un movimiento lento,
        casi imperceptible, hacia adelante y hacia arriba: el lugar donde hoy se
        halla el vértice superior, mañana estará la parte siguiente. De tal
        manera que, lo que hoy es advertido para el vértice superior y, en
        cambio, parece una perogrullada al resto del triángulo, estará mañana
        cargado también de sentido y razón para otra parte de la figura. En la
        cima del vértice hay, muchas veces, sólo un hombre (o mujer). El gozo de
        su contemplación es igualable a su desmedida tristeza interior. Los que
        se encuentran cerca de él no lo entienden, y con indignación, lo acusan
        de loco o impostor. De esta manera vivió Beethoven, injuriado y solo en
        la cima. ¿Cuánto tiempo fue necesario para que una sección mayor del
        triángulo llegara a donde él estuvo solo? En cualquier parte del
        triángulo hay artistas. Todo aquel que puede ver más allá de los lindes
        de su sección es un profeta para los que lo rodean y contribuye al lento
        movimiento del carro.” 

        <br/><br/>Así, Kandinsky, nos ubica como espectadores
        tanto como cuerpo de un escenario donde se desarrolla el espíritu; y por
        ende, en el espíritu del artista. En otra parte del mismo libro dice:
        “... El artista debe estar ciego ante las formas aceptadas o rechazadas,
        sordo ante las lecciones y fines de su tiempo. Atentamente, los ojos del
        artista deben volcarse hacia la vida interior y sus oídos deben estar
        prestos a la necesidad interna”, agrega: “... Todos los medios son
        sacro, si son necesarios interiormente, y todos profanos, si no surgen
        de la fuente de la necesidad interior”, “... la medida y equilibrio no
        deben buscarse fuera, sino dentro del artista”, “... es la intuición la
        que gesta la creación ”, “... la medida y equilibrio dentro del
        artista, forman lo que puede denominarse: su percepción de límites, su
        tacto artístico, atributos innatos en el artista que se alimenta hasta
        llegar a una revelación extraordinaria gracias a su entusiasmo”, “...
        Vemos como en el trasfondo de cada problema menor y en el de cada
        problema mayor de la pintura se encuentra una y otra vez el factor
        interior” y afirma: “ La senda que transitamos actualmente y que es la
        mayor dicha de nuestro tiempo, es la renuncia a lo externo, para asumir
        su opuesto, la necesidad interior” 
        
        <br/><br/>En otro libro suyo, “Punto y línea
        sobre el plano” establece su lenguaje para la pintura. Desarrolla una
        teoría integral sobre los elementos fundamentales de la pintura,
        estableciendo una relación estrecha entre el punto, la línea, el plano y
        el color. “El punto es la unidad básica de la composición. Es el
        comienzo y el fin de toda creación artística. Representa la
        concentración de la energía y la expresión de un sentimiento... La
        línea, por su parte, es el movimiento del punto en el espacio, es
        tensión creada por la relación entre dos puntos... El plano es el
        espacio donde se desarrolla la composición. En él se dan las
        interacciones entre los elementos que lo componen, como líneas y
        formas... El color es la expresión emocional y espiritual del arte. Es
        la vibración y la resonancia, destacando armonías y contrastes... La
        pintura es la unión de punto, línea y plano en un todo armónico, donde
        cada elemento tiene su propio valor y significado.” 
        
        <br/><br/>La visión de este
        genio de la pintura nos adentra en el lenguaje del arte, investigación a
        la que ingenuamente nos hemos lanzado, pero no aparece como algo externo
        común a todas las artes sino que se hunde en la subjetividad de los
        individuos que pueden acceder a escuchar y contestar el llamado que
        brota de la interioridad humana, creadora y transformadora. 
        <br/><br/>
        Aquí los
        despido dejando paso a sus propios caprichos, quizá preguntándome si
        ¿Alguno/a giró por un segundo el foco de su atención a su interior y
        recibió el pulso eléctrico al dar con su necesidad interna? Nos vemos en
        el próximo encuentro tras la búsqueda del lenguaje del arte en: El
        Fenómeno Escénico.
      </p>

      <hr />
    </div>
  );
};
