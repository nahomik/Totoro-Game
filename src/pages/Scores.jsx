import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Scores() {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load scores from localStorage
    const loadScores = () => {
      try {
        const savedScores = JSON.parse(localStorage.getItem("totoro-leaderboard") || "[]");
        // Sort scores by date (newest first)
        const sortedScores = [...savedScores].sort((a, b) => 
          new Date(b.date) - new Date(a.date)
        );
        setScores(sortedScores);
      } catch (error) {
        console.error("Error loading scores:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadScores();
    
    // Set up storage event listener to sync scores across tabs
    const handleStorageChange = (e) => {
      if (e.key === "totoro-leaderboard") {
        loadScores();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const clearScores = () => {
    if (window.confirm("Are you sure you want to clear all scores? This cannot be undone.")) {
      localStorage.removeItem("totoro-leaderboard");
      setScores([]);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return (
      <div className="scores-container">
        <h2>Game History</h2>
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading your scores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scores-container">
      <h2>Game History</h2>
      
      {scores.length === 0 ? (
        <div className="no-scores">
          <div className="no-scores-icon">📊</div>
          <p>No game history yet.</p>
          <p>Play a game to see your scores here!</p>
          <Link to="/" className="play-now-btn">
            Play Now
          </Link>
        </div>
      ) : (
        <div className="scores-list">
          <div className="scores-header">
            <span>Date & Time</span>
            <span>Score</span>
            <span>Best Score</span>
          </div>
          
          {scores.map((entry, index) => (
            <div key={index} className="score-entry">
              <span className="date">{formatDate(entry.date)}</span>
              <span className="score">{entry.score}</span>
              <span className="best-score">{entry.bestScore}</span>
            </div>
          ))}
          
          <div className="clear-scores">
            <button 
              onClick={clearScores}
              className="clear-btn"
              aria-label="Clear all scores"
            >
              🗑️ Clear All Scores
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
