import imgTwo from "../assets/img/tema2.jpg";
import { Link } from "react-router-dom";
import arrow from "../assets/img/arrow.png";

export const Two = () => {
  return (
    <div>
      <div id="two" className="article-div">
      <Link to="/oldeditions"><button className="button-arrow"><img src={arrow} alt="" className="back-arrow"/></button></Link>
        <h1>
          La Forma de estar vinculados en las relaciones
        </h1>
        <p className="article-p">
          <img src={imgTwo} alt="" className="article-img" />
          El "cómo" y la
          "forma" en que se organiza la estructura de un objeto o sistema, desde
          el nivel atómico hasta el biológico, determinan su identidad y
          propiedades específicas. En el mundo atómico y subatómico, la
          organización de la estructura del átomo configura las propiedades
          químicas de los elementos. Asimismo, en el plano biológico, la
          complejidad de las conexiones y sistemas en los organismos permite la
          conservación de su estructura y el desarrollo de sus funciones
          vitales. <br/><br/>En la interacción con su entorno, los individuos se rigen por
          las condiciones del ámbito que les dio origen, manteniendo su
          desarrollo estructural. La naturaleza de las relaciones está marcada
          por la coexistencia y pertenencia, donde la forma en que se establecen
          estas relaciones influye de manera fundamental en su tipo y
          desarrollo. <br/><br/>“...Cuando diversas especies aparecen en un mismo espacio,
          surgen distintas relaciones entre ellas, aparte de las que existen
          dentro de la misma especie. Hay relaciones simbióticas, de asociación,
          parásitas, saprófitas, etcétera. Todas estas relaciones posibles
          pueden simplificarse en tres grandes tipos: relaciones de dominio,
          relaciones de intercambio y relaciones de destrucción. Los organismos
          mantienen entre sí estas relaciones, sobreviviendo unos y
          desapareciendo otros.” (*) <br/><br/>Relaciones “parasitarias o de destrucción”
          donde uno solo de los agentes, o una minoría en relación, merma la
          vitalidad de otro. <br/><br/> Relaciones “simbióticas o de intercambio” donde
          todos los agentes se benefician vitalmente. <br/><br/> Relaciones de “dominio”
          donde uno o una minoría subordina a otra, pero sobreviven
          desigualmente. Para todas las especies que generan proto-culturas o
          culturas como lo hace la especie humana, la trama relacional está tan
          implicada en la supervivencia que somos testigos de relaciones
          simbióticas en la naturaleza y su ecosistema, como observando a los
          hipopótamos que se benefician de las aves, ya que estas actúan como
          desparasitarias al comer bacterias de sus heridas como alimento
          sabroso, y muchas otras especies más que coexisten gracias a
          intercambios favorables entre sí.  <br/><br/>Está más que claro cuáles relaciones
          son de tipo destructivas en la naturaleza y cuáles, también, de
          dominio. Por eso es sano para la energía de uno conocer cómo es su
          propia estructura de relaciones. La vida es esa gran trama eterna que
          une todo a ella, creciendo sin límites. <br/><br/> Comprender y gestionar nuestra
          propia estructura de relaciones es esencial para nuestro bienestar y
          crecimiento personal. Al evaluar regularmente nuestras conexiones con
          los demás, podemos identificar relaciones que son beneficiosas y
          aquellas que pueden ser perjudiciales. Establecer límites saludables
          nos ayuda a proteger nuestro espacio emocional y físico,
          permitiéndonos mantener relaciones equilibradas y respetuosas. Además,
          cultivar relaciones positivas y de apoyo nos brinda un entorno más
          saludable para crecer y prosperar. Prestar atención a estos aspectos
          nos permite contribuir a una sociedad más armoniosa y en equilibrio.
          <br/><br/>* Cita: Silo. <span className="italic">Apuntes de Psicología</span>
        </p>
      </div>
    </div>
  );
};
