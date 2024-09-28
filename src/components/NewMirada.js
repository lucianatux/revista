import newmiradaImg from "../assets/img/newmirada2.jpg";
import { Link } from "react-router-dom";
import arrow from "../assets/img/arrow.png";

export const NewMirada = () => {
  return (
    <div>
      <div id="three" className="article-div">
        <Link to="/">
          <button className="button-arrow">
            <img src={arrow} alt="" className="back-arrow" />
          </button>
        </Link>
        <h1>Una nueva mirada</h1>
        <h3>La crisis personal un reflejo de lo social</h3>
        <p className="article-p">
          <img src={newmiradaImg} alt="" className="article-img" />
          «El fracaso personal, o la sensación de estar haciendo algo mal, se
          experimenta como sufrimiento. En esta situación actual, cada uno lo
          vive como si fuera un problema individual: problemas económicos, la
          incertidumbre de encontrar o no trabajo, o crisis en las relaciones de
          pareja y familia. Es ahí donde crece el sentimiento de frustración y
          la sensación de que las ilusiones se desmoronan. Si pudiéramos
          observar a nuestro alrededor, veríamos que los demás también fracasan,
          están en crisis y no saben qué hacer. Se mueven desesperados, tratando
          de evitar que la crisis los hunda, pero esta oscuridad parece
          arrastrarlos aún más. Esta crisis tiene un culpable: el sistema. Es la
          sociedad misma la que está en crisis. Lo político ya no ofrece
          respuestas, los ídolos no resuelven nuestra crisis, y las
          instituciones de antaño ya no son referentes de solución. Sin embargo,
          algo nuevo está surgiendo. Un cambio social se avecina, una nueva
          organización que pone al ser humano como valor central. Esta
          transformación está golpeando a cada uno, pero no es posible salir de
          la crisis solo; es necesario unirse a los demás. La salida está en
          permitir que tu corazón y tu razón te acerquen a tu vecino, a tu
          amigo, a tu familia, a tu fe, a tu escuela. Juntos encontrarán la
          salida. Es vital que participes en tu barrio, en tu club, en todo
          lugar donde puedas contribuir a un cambio social y personal. Debes
          esclarecer esta realidad donde la crisis se experimenta como algo
          propio, y señalar que este sistema ya está vencido. Hay que fomentar
          una nueva organización social, verdaderamente humana, donde sintamos
          que tú y yo estamos vivos. Solo dando a otros, el futuro se abre, la
          alegría crece y la noche se aleja.»
          <br />
          <br />
          Realizado y Escrito por Glory - Oscar
        </p>
      </div>
    </div>
  );
};
