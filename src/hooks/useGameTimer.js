// useGameTimer.js - Custom hook for game timer
import { useState, useEffect } from "react";

export default function useGameTimer(active) {
  const [gameTime, setGameTime] = useState(0);

  useEffect(() => {
    if (active) {
      const timer = setInterval(() => {
        setGameTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setGameTime(0);
    }
  }, [active]);

  return [gameTime, setGameTime];
}
