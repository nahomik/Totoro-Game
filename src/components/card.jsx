const Card = ({ card, handleCardClick }) => {
    return (
      <div 
        className="card" 
        onClick={() => handleCardClick(card.id)}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCardClick(card.id);
          }
        }}
      >
        <img src={card.image} alt={card.title} />
        <p>{card.title}</p>
      </div>
    );
  };
  
  export default Card;