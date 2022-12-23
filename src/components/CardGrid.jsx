import Card from "./Card";

const CardGrid = ({ cards, handleCardClick }) => {
  return (
    <div className="grid">
      {cards.map(card => (
        <Card key={card.id} card={card} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default CardGrid;