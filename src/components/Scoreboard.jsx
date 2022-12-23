const Scoreboard = ({ score, bestScore }) => {
    return (
      <div className="scoreboard">
        <h3>Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>
    );
  };
  
  export default Scoreboard;