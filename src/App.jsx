// App.jsx - Main application component for AuthenChain
// Handles game logic, state management, and UI composition

import { useState, useEffect } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";
import Scoreboard from "./components/Scoreboard";
import Leaderboard from "./components/Leaderboard";
import Modal from "./components/Modal";
import customImages from "./components/CustomImages";
import shuffleArray from "./utils/shuffleArray";
import formatTime from "./utils/formatTime";
import useGameTimer from "./hooks/useGameTimer";
import useModal from "./hooks/useModal";
import { GHIBLI_API_URL } from "./constants/api";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [difficulty, setDifficulty] = useState(12);
  const modal = useModal();
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [gameTime, setGameTime] = useGameTimer(!loading && score > 0);

  useEffect(() => {
    setLoading(true);
    fetch(GHIBLI_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const selectedFilmIDs = Object.keys(customImages);
        const filteredFilms = data
          .filter((film) => selectedFilmIDs.includes(film.id))
          .map((film) => ({
            id: film.id,
            title: film.title,
            image: customImages[film.id],
          }));
        setCards(shuffleArray(filteredFilms).slice(0, difficulty));
        setLoading(false);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setError("Failed to load films. Please try again later.");
      });
  }, [difficulty]);

  function handleCardClick(id) {
    if (selectedCards.includes(id)) {
      setModalMessage("Game Over! Try Again.");
      modal.openModal();
      setScore(0);
      setSelectedCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setBestScore(Math.max(newScore, bestScore));
      setSelectedCards([...selectedCards, id]);
      if (newScore === cards.length) {
        setModalMessage("Congratulations! You matched all the Ghibli films!");
        modal.openModal();
      }
    }
    setCards(shuffleArray(cards));
  }

  function handleModalClose() {
    setModalMessage("");
    modal.closeModal();
    setScore(0);
    setSelectedCards([]);
    setGameTime(0); // Reset game time
  }

  return (
    <div className="app-container">
      <Header />
      <NavBar />
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div>
          <div className="spinner"></div>
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." className="loading-image" />
        </div>
      ) : (
        <>
          <Scoreboard score={score} bestScore={bestScore} />
          <Leaderboard score={score} bestScore={bestScore} />
          <CardGrid cards={cards} handleCardClick={handleCardClick} />
          {!loading && (
            <div className="cards-remaining">
              Cards remaining: {cards.length - score}
            </div>
          )}
          {modal.isOpen && (
            <Modal message={modalMessage} onClose={handleModalClose} gameTime={formatTime(gameTime)} />
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
