const Card = ({ card, handleCardClick }) => {
    return (
      <div className="card" onClick={() => handleCardClick(card.id)}>
        <img src={card.image} alt={card.name} />
        <p>{card.name}</p>
      </div>
    );
  };
  
  export default Card;