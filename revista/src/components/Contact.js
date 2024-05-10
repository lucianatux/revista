import writing from "../assets/img/computadora-portatil.gif";


export const Contact = () => {
    return (
      <div className="contact-div m-5" id="contact">
        <div className="text-center mb-4">
          <h2 className="title-form">
            Contáctanos
            <img
              src={writing}
              alt=""
              className="contact-icon"
            />
          </h2>
          <p>ghgjhg</p>
        </div>
  <form
        id="formulario-contacto"
        action="https://formspree.io/f/mbjnbdqg"
        method="post"
      >
        <div className="mb-3">
          <label htmlFor="email">Email (opcional)</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div className="mb-3">
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

        <div className="mb-3">
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

        <div className="mb-3">
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="4"
            placeholder="Escribe aquí tus comentarios e ideas..."
          ></textarea>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn special-color w-100 fs-5">
            Enviar Mensaje
          </button>
        </div>
      </form>

    
      
      </div>
    );
  };
  