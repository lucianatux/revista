import ws1 from "../assets/img/workshops/teatro.png";
import ws2 from "../assets/img/workshops/circo.png";
import ws3 from "../assets/img/workshops/camara-de-video.png";
import ws4 from "../assets/img/workshops/programacion.png";
import ws5 from "../assets/img/workshops/computadora.png";
import ws6 from "../assets/img/workshops/dados.png";

export const Workshops = () => {
  return (
    <div id="workshops" className="workshops-container">
      <div className="workshop-item">
        <img src={ws1} alt="" />
        Taller de Teatro
        <p>
          Para jóvenes y adultos.
          <br />
          Martes y jueves 18 a 19:30 hs.
          <br />
          En El Ojo Cuántico: <br/>P.L.Monti 4428 (portón negro).
          <br/> Para mas info tel: 3512458193 Mariano
        </p>
      </div>
      <div className="workshop-item">
        <img src={ws2} alt="" />
        Taller de Circo
        <p>
          Para niños principiantes.
          <br />
          Miercoles y viernes de 17 a 18 hs.
          <br />
          Centro Vecinal Yofre Sur:<br/> Severo Vacaro 1302.
          <br/> Para mas info tel: 3512458193 Mariano
        </p>
      </div>
      <div className="workshop-item">
        <img src={ws3} alt="" />
        Taller de VideoRodaje
        <p>
          Para jóvenes y adultos.
          <br />
          Viernes 18 a 19:30 hs.
          <br />
          Centro Vecinal Yofre Sur:<br/>Severo Vacaro 1302.
          <br/> Para mas info tel: 3512458193 Mariano
        </p>
      </div>
      <div className="workshop-item">
        <img src={ws4} alt="" />
        Taller de Programación
        <p>
        Para jóvenes y adultos.
          <br />
          Elegí tu horario. Clases personalizadas.
          <br />Lunes a Viernes 8:30hs a 10:30hs
          <br />
          En El Ojo Cuántico: P.L.Monti 4428 (portón negro).
          <br/> Para mas info tel: 3512309375 Luciana
        </p>
      </div>
      <div className="workshop-item">
        <img src={ws5} alt="" />
        Taller de Computación
        <p>
        Para jóvenes y adultos.
          <br />
          Elegí tu horario. Clases personalizadas.
          <br />Lunes a Viernes 8:30 hs a 10:30hs
          <br />
          En El Ojo Cuántico: P.L.Monti 4428 (portón negro).
          <br/> Para mas info tel: 3512309375 Luciana
        </p>
      </div>
      <div className="workshop-item">
        <img src={ws6} alt="" />
        Taller de Creación de Juegos
        <p>
        Para jóvenes y adultos.
          <br />
          Elegí tu horario. Clases personalizadas.
          <br />Lunes o Jueves 16hs
          <br />
          En El Ojo Cuántico: P.L.Monti 4428 (portón negro).
          <br/> Para mas info tel: 3512309375 Luciana
        </p>
      </div>
    </div>
  );
};
