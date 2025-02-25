import img1 from "../assets/feb2025/invitacion.jpg";
import { Link } from "react-router-dom";
import arrow from "../assets/img/arrow.png";
import { useState } from "react";

export const Invitation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    areas: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "areas") {
      setFormData((prevData) => ({
        ...prevData,
        areas: checked
          ? [...prevData.areas, value]
          : prevData.areas.filter((area) => area !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nÁreas de interés: ${formData.areas.join(
      ", "
    )}`;
    const whatsappLink = `https://wa.me/3512309375?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
     // Limpiar formulario después de enviarlo
  setFormData({ name: "", email: "", areas: [] });
  };

  return (
    <div>
      <div className="article-div">
        <Link to="/">
          <button className="button-arrow">
            <img src={arrow} alt="" className="back-arrow" />
          </button>
        </Link>
        <h4>Columna: Creadores de mundos</h4>
        <h1>Invitación especial</h1>
        <p className="article-p">
          "...El ser humano del futuro no va a querer ganar y poseer cosas; va a
          querer sentir, crear, construir, aprender sin límite. No va a querer
          poseer, tener, controlar: ese ser humano comprenderá que hay millones
          de formas de desarrollar la emoción y el pensamiento, que hay una
          diversidad inimaginable de formas de sentir y pensar..."
          <br />
          –Silo
        </p>
        <img src={img1} alt="" className="article-img3" />
        <p className="article-p">
          Por eso, te invitamos a formar parte del equipo Pretasía. Aquí vas a
          aprender a CREAR juegos y videojuegos. No es necesario que tengas
          conocimientos ni experiencia. Te enseñamos desde cero y de manera
          gratuita. Aprenderás en equipo mientras creas un juego.
          <br />
          <br />
          El equipo Pretasía nació para crear juegos que inspiren y nos abran la
          mente hacia múltiples perspectivas. Aquí podés encontrarte creando,
          junto a otros, un videojuego que recorra el interior de la mente
          humana o, quizás, un juego que aborde el multiverso, la mecánica
          cuántica o las paradojas temporales; o tal vez, un juego que nos haga
          cuestionar nuestras creencias acerca de la realidad.
          <br />
          <br />
          Creemos que los juegos, además de divertir, pueden ser herramientas
          esenciales para el aprendizaje, la exploración y la ampliación de las
          potencialidades humanas.
          <br />
          <br />
          Si querés formar parte de esta misión, entonces...
        </p>
        <h3 className="mt-5">
          ...Elegí tu área (podés
          seleccionar más de una)
        </h3>
        <br/><br/>
        <form
          className="mt-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="row">
            {/* Videojuegos */}
            <div className="col-md-4">
              <h3>🎮 Videojuegos</h3>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="arte-digital"
                  name="areas"
                  value="Arte Digital"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="arte-digital">
                  🎨 Arte Digital
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="diseno-videojuegos"
                  name="areas"
                  value="Diseño de Videojuegos"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="diseno-videojuegos"
                >
                  🎮 Diseño de Videojuegos
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="programacion"
                  name="areas"
                  value="Programación"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="programacion">
                  💻 Programación
                </label>
              </div>
              <br/><br/>
            </div>
            {/* Juegos de Mesa */}
            <div className="col-md-4">
              <h3>🎲 Juegos de Mesa</h3>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="arte-mesa"
                  name="areas"
                  value="Arte"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="arte-mesa">
                  🎨 Arte
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="diseno-mesa"
                  name="areas"
                  value="Diseño de Juegos de Mesa"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="diseno-mesa">
                ✏️ Diseño de Juegos
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="prototipado"
                  name="areas"
                  value="Prototipado"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="prototipado">
                🃏 Prototipado
                </label>
              </div>
              <br/><br/>
            </div>
            {/* Juegos en Vivo */}
            <div className="col-md-4">
              <h3>🎭 Juegos en Vivo</h3>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="teatro"
                  name="areas"
                  value="Teatro"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="teatro">
                  🎭 Teatro
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="escenografia"
                  name="areas"
                  value="Escenografía"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="escenografia">
                🏛️ Escenografía
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="guion"
                  name="areas"
                  value="Guión"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="guion">
                  📝 Guión
                </label>
              </div>
              <br/><br/>
            </div>
          </div>

          {/* Datos de contacto */}
          <div className="mt-4">
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:(opcional)</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Botón para enviar por WhatsApp */}
            <button type="submit" className="btn btn-success w-100">
              Enviar por WhatsApp 📲
            </button>
          </div>
        </form>
        <p className="article-p">
          
        </p>
      </div>
    </div>
  );
};
