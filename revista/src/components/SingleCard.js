import back from "../assets/img/game/texture.jpg";


export const SingleCard = ({card, handleChoice, flipped, disabled}) => {

const handleClick = () => {
    if(!disabled){
        handleChoice(card);
    }
};

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img 
            className="back" 
            onClick={handleClick} 
            src={back} 
            alt="card back" 
        />
      </div>
    </div>
  );
};
