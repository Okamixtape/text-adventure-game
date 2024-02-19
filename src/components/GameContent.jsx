// GameContent.js
import React from "react";

const GameContent = ({ currentNode, onRestart, onSelectOption }) => {
  return (
    <div id="game-content">
      {currentNode && (
        <>
          <div id="text">{currentNode.text}</div>
          <div  id="option-buttons" className="btn-grid">
            {currentNode.options.map((option) => (
              <button
                key={option.text}
                className="btn"
                onClick={() => onSelectOption(option.nextText)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="cancel-container">
            <button className="btn" onClick={onRestart}>Wanna Start Again?</button>
          </div>
        </>
      )}
    </div>
  );
};

export default GameContent;