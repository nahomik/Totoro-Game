const Scoreboard = ({ score, bestScore, gameTime }) => {
    return (
      <div className="scoreboard">
        <h3>Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
        {/* TODO: Update all usages to pass gameTime */}
        {gameTime && <h3>Time: {gameTime}</h3>}
      </div>
    );
  };
  
  export default Scoreboard;