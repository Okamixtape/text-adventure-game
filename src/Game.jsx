// Game.js
import React, { useState, useEffect } from "react";
import textNodes from "../src/data/textNodes"; // Update the path as necessary
import StartPopup from "./components/StartPopup";
import GameContent from "./components/GameContent";
import TutorialModal from "./components/TutorialModal"; // Import the TutorialModal component
import "./App.css"; // Ensure the CSS is correctly imported

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentNode, setCurrentNode] = useState(null);
  const [isTutorialOpen, setIsTutorialOpen] = React.useState(false);

  useEffect(() => {
    setCurrentNode(textNodes.find((node) => node.id === 1));
  }, []);

  const restartGame = () => {
    setGameStarted(false);
    setCurrentNode(textNodes.find((node) => node.id === 1)); // Resets the game to the start node
  };

  const selectOption = (nextTextId) => {
    if (nextTextId === -1) {
      restartGame(); // Resets the game if the end is signaled
    } else {
      const nextNode = textNodes.find((node) => node.id === nextTextId);
      setCurrentNode(nextNode);
    }
  };

  function generateBackgroundImageUrl(id) {
    return `${process.env.PUBLIC_URL}/images/node_${id}.png`;
  }

  const backgroundStyle = {
    backgroundImage: currentNode
      ? `url(${generateBackgroundImageUrl(currentNode.id)})`
      : "none",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100vw",
    height: "50vh",
    position: "fixed", // Ensures the background covers the whole screen
    top: 0,
    left: 0,
    zIndex: -1, // Ensures the background is behind all other content
  };

  return (
    <>
      <div className="game-screen" style={backgroundStyle}></div>{" "}
      {/* Background container */}
      <div className="container">
        {!gameStarted && <StartPopup onStart={() => setGameStarted(true)} />}
        {gameStarted && (
          <GameContent
            currentNode={currentNode}
            onRestart={restartGame}
            onSelectOption={selectOption}
          />
        )}
      </div>
      <div className="tutorial-container">
        <TutorialModal
          isOpen={isTutorialOpen}
          onClose={() => setIsTutorialOpen(false)}
        />
      </div>
      <button className="tutorial-btn" onClick={() => setIsTutorialOpen(true)}>
        Show Tutorial
      </button>
    </>
  );
};

export default Game;
