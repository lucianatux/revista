import imgThree from '../assets/img/tema3.jpg';
import { Link } from "react-router-dom";
import arrow from "../assets/img/arrow.png";

export const Three = () => {
  return (
    <div>
      <div id="three" className="article-div">
      <Link to="/oldeditions"><button className="button-arrow"><img src={arrow} alt="" className="back-arrow"/></button></Link>
        <h1>Una nueva sensibilidad está naciendo</h1>
        <p className="article-p">
        <img src={imgThree} alt="" className="article-img"/>
«... está naciendo una sensibilidad que se
corresponde con los nuevos tiempos. Es una sensibilidad que capta al mundo como una globalidad y
que advierte que las dificultades de las personas en cualquier lugar terminan implicando a otras aunque
se encuentren a mucha distancia. Las comunicaciones, el intercambio de bienes y el veloz
desplazamiento de grandes contingentes humanos de un punto a otro, muestran ese proceso de
mundialización creciente. También están surgiendo nuevos criterios de acción al comprenderse la
globalidad de muchos problemas, advirtiéndose que la tarea de aquellos que quieren un mundo mejor
será efectiva si se la hace crecer desde el medio en el que se tiene alguna influencia.
<br/><br/> A diferencia de
otras épocas llenas de frases huecas con las que se buscaba reconocimiento externo, hoy se empieza a
valorar el trabajo humilde y sentido mediante el cual no se pretende agrandar la propia figura sino
cambiar uno mismo y ayudar a hacerlo al medio inmediato familiar, laboral y de relación. 
<br/><br/>Los que
quieren realmente a la gente no desprecian esa tarea sin estridencias, incomprensible en cambio para
cualquier oportunista formado en el antiguo paisaje de los líderes y la masa, paisaje en el que él
aprendió a usar a otros para ser catapultado hacia la cúspide social. 
<br/><br/>Cuando alguien comprueba que el
individualismo esquizofrénico ya no tiene salida y comunica abiertamente a todos sus conocidos qué es
lo que piensa y qué es lo que hace sin el ridículo temor a no ser comprendido; cuando se acerca a otros;
cuando se interesa por cada uno y no por una masa anónima; cuando promueve el intercambio de ideas
y la realización de trabajos en conjunto; cuando claramente expone la necesidad de multiplicar esa
tarea de reconexión en un tejido social destruido por otros; cuando siente que aún la persona más
«insignificante» es de superior calidad humana que cualquier desalmado puesto en la cumbre de la
coyuntura epocal... cuando sucede todo esto, es porque en el interior de ese alguien comienza a hablar
nuevamente el Destino que ha movido a los pueblos en su mejor dirección evolutiva, ese Destino tantas
veces torcido y tantas veces olvidado, pero re-encontrado siempre en los recodos de la historia. No
solamente se vislumbra una nueva sensibilidad, un nuevo modo de acción sino, además, una nueva
actitud moral y una nueva disposición táctica frente a la vida»
<br/><br/>
Extraído de 'Cartas a mis amigos' de Silo.
        </p>
      </div>
    </div>
  );
};