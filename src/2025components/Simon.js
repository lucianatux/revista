import arrow from "../assets/img/arrow.png";
import { Link } from "react-router-dom";

export const Simon = () => {
  return (
    <div
      className="game-div"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Link to="/">
        <button className="button-arrow">
          <img src={arrow} alt="" className="back-arrow" />
        </button>
      </Link>
      <div style={{ width: "500px", height: "500px", border: "none" }}>
        <iframe
          src="https://lucianatux.github.io/SimonDice/"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "15px",
          }}
          title="Simon"
        />
      </div>
    </div>
  );
};
