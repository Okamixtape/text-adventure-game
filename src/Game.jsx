import React, { useState } from 'react';
import StartPopup from './components/StartPopup';
import GameContent from './components/GameContent';
import './App.css'; // Assurez-vous que le CSS est correctement importé

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const restartGame = () => {
    setGameStarted(false); // Réinitialise le jeu pour montrer le popup de départ
  };

  return (
    <div className="container">
      {!gameStarted && <StartPopup onStart={() => setGameStarted(true)} />}
      {gameStarted && <GameContent onRestart={restartGame} />}
    </div>
  );
};

export default Game;