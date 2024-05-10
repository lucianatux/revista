import writing from "../assets/img/computadora-portatil.gif";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-div p-5 m-5" >
        <div className="text-center">
          <h4 className="title-form">
            Contáctanos y deja aquí tus comentarios e ideas
            <img src={writing} alt="" className="contact-icon" />
          </h4>
        </div>
        <form
          id="formulario-contacto"
          action="https://formspree.io/f/mbjnbdqg"
          method="post"
        >
          <div className="p-3">
            <label htmlFor="email">
              Email (opcional)
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="p-3">
            <label htmlFor="name">Nombre</label>
            <input
              type="input"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nombre Apellido"
              required
            />
          </div>

          <div className="p-3">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="549 351"
              required
            />
          </div>

          <div className="p-3">
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="4"
              placeholder="Escribe aquí tus comentarios e ideas..."
            ></textarea>
          </div>

          <div className="p-3">
            <button type="submit" className="btn w-100 btn-send">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
