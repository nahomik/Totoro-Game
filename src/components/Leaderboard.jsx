import { useState, useEffect } from "react";

const Leaderboard = ({ score, bestScore }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("totoro-leaderboard") || "[]");
    setScores(saved);
  }, []);

  useEffect(() => {
    if (score > 0) {
      const updated = [...scores, { score, bestScore, date: new Date().toLocaleString() }];
      localStorage.setItem("totoro-leaderboard", JSON.stringify(updated));
      setScores(updated);
    }
  }, [score]);

  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <ul>
        {scores.slice(-5).reverse().map((entry, idx) => (
          <li key={idx}>
            Score: {entry.score}, Best: {entry.bestScore}, Date: {entry.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
