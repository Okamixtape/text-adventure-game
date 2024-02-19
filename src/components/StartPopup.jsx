import React from "react";

const StartPopup = ({ onStart }) => (
  <div id="start-popup">
    <p className="start-text">This is where the game text will go.</p>
    <button id="start-button" onClick={onStart}>
      Start the game
    </button>
  </div>
);

export default StartPopup;
