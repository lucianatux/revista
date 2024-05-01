import group from "../assets/img/proposito.jpg";

export const Aboutus = () => {
  return (
    <div id="aboutus" className="article-div">
      <h1 className="aboutus-title">Nuestro propósito</h1>
      <img className=" aboutus-img" src={group} alt="img group" />
      <p className="article-p aboutus-text">
        Bienvenido a la Revista Digital <span>El Ojo Cuántico</span>, donde
        exploramos los avances y descubrimientos que están moldeando nuestra
        comprensión del mundo y de nosotros mismos. Nos dedicamos a comunicar y
        compartir las nuevas perspectivas que surgen en el ámbito
        humano-espiritual, abriendo espacio para la reflexión y el crecimiento
        personal.  Nuestra misión es proporcionar un espacio donde
        puedas encontrar inspiración, información y nuevas formas de entender la
        realidad. Desde análisis profundos hasta reflexiones personales, nuestra
        revista ofrece una variedad de contenidos diseñados para estimular tu
        mente y alimentar tu espíritu. Únete a nosotros en este viaje de
        descubrimiento y exploración. Juntos, podemos abrirnos a nuevas
        posibilidades y encontrar un mayor significado en nuestra existencia.
        ¡Bienvenido a nuestra comunidad de pensadores y buscadores de la verdad!
      </p>{" "}
    </div>
  );
};
