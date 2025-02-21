import imgQuantum from "../assets/img/quan2.jpg";
import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Quantum = () => {
  return (
    <div id="poetic" className="article-div">
      <Link to="/oldeditions">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <h4>EL MUNDO CUÁNTICO: UNA REALIDAD QUE NOS ASOMBRA</h4>
      <p className="article-p">
        Queridos lectores de El Ojo Cuántico, en esta ocasión vamos a
        adentrarnos en uno de los campos más misteriosos y fascinantes de la
        ciencia moderna: la mecánica cuántica. Sabemos que el nombre suena un
        poco complicado, pero les aseguro que esta es una historia que puede
        cambiar la forma en que vemos el mundo. Porque, después de todo, ¿quién
        no ha sentido alguna vez la curiosidad de entender qué hay más allá de
        lo que nuestros ojos ven?
      </p>
      <br />
      <img src={imgQuantum} alt="" className="article-img2" />

      <p className="article-p">
        La mecánica cuántica es la rama de la física que estudia las partículas
        más pequeñas que componen nuestro universo: átomos, electrones, fotones,
        y otros “bichitos” subatómicos que están mucho más allá de nuestra
        vista. Lo curioso es que, cuando entramos en este mundo microscópico, la
        realidad comienza a comportarse de manera muy distinta a lo que
        esperaríamos. Las leyes del día a día ya no aplican: un gato podría
        estar vivo y muerto al mismo tiempo (como sugirió el famoso físico
        Schrödinger), y una partícula puede estar en dos lugares distintos a la
        vez. 
        <br/><br/>
        Para que se entienda mejor, imaginemos un escenario familiar.
        Supongamos que estamos lanzando una piedra al aire. En la física clásica
        —la que todos aprendemos en la escuela— sabemos que podemos predecir a
        dónde caerá la piedra dependiendo de la fuerza con que la lancemos y el
        ángulo del lanzamiento. Todo es lógico, claro, y sigue las leyes de
        Newton. 
        
        <br/><br/>Pero en el mundo cuántico, las cosas se ponen raras. Si esa
        piedra fuera del tamaño de un electrón, no podríamos saber con certeza
        dónde va a caer. Es más, podríamos decir que el electrón está en varios
        lugares posibles al mismo tiempo, hasta que alguien lo mire y, solo
        entonces, decida "dónde" está. Es un poco como si nuestras miradas
        fueran las que terminan de formar la realidad. 
        
        <br/><br/>Esto es lo que conocemos
        como el “principio de incertidumbre” de Heisenberg: nunca podemos
        conocer con exactitud la posición y la velocidad de una partícula al
        mismo tiempo. Y no es porque nuestras herramientas sean malas o no
        sepamos medir bien, es simplemente porque la naturaleza misma es
        incierta. 
        
        <br/><br/>¿Y qué tiene que ver todo esto con la vida de todos los días?
        Bueno, aunque parezca difícil de creer, sin la mecánica cuántica no
        tendríamos muchas de las tecnologías que usamos hoy. La electrónica que
        está detrás de los teléfonos móviles, las computadoras, los láseres e
        incluso las resonancias magnéticas de los hospitales, se basa en la
        comprensión del comportamiento cuántico de las partículas. Sin la
        mecánica cuántica, nuestro mundo moderno sería muy diferente. 
        
        <br/><br/>Otro
        concepto fascinante es el del "entrelazamiento cuántico", al que
        Einstein llamó "acción fantasmagórica a distancia". Imaginemos dos
        partículas cuánticas que, por algún motivo, están entrelazadas. Esto
        significa que, sin importar cuán lejos se encuentren una de la otra, si
        cambiamos algo en una, la otra responde de inmediato, como si tuvieran
        una conexión invisible. Es como si dos amigos que viven en extremos
        opuestos del mundo pudieran sentir lo que el otro siente al instante,
        sin importar la distancia. 
        
        <br/><br/>Todo esto nos muestra algo increíblemente
        profundo: el mundo que vemos no es toda la realidad. La mecánica
        cuántica nos enseña que hay más allá de lo que perciben nuestros
        sentidos, y que el universo es mucho más misterioso y conectado de lo
        que alguna vez imaginamos. Aunque no podamos ver estas partículas
        diminutas ni sus extrañas danzas, sus efectos están presentes en nuestra
        vida diaria, recordándonos que el universo está lleno de maravillas
        esperando ser descubiertas. 
        
        <br/><br/>Entonces, la próxima vez que vean un
        celular, o que escuchen la palabra "cuántico", recuerden que están
        tocando un poquito de esa magia invisible que la ciencia nos ayuda a
        entender, aunque solo sea un poco. Y quizás, al igual que nosotros desde
        El Ojo Cuántico, puedan imaginar que la curiosidad siempre nos lleva a
        lugares fascinantes, donde lo imposible y lo real se cruzan. 
        
        <br/><br/>Nos vemos
        en el próximo número, donde seguiremos explorando los misterios que este
        increíble universo tiene para ofrecernos.
      </p>

      <hr />
    </div>
  );
};
