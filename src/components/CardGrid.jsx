import Card from "./card";

const CardGrid = ({ cards = [], handleCardClick }) => {
  return (
    <div className="grid">
      {Array.isArray(cards) && cards.map(card => (
        <Card key={card.id} card={card} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default CardGrid;