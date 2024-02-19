// TutorialModal.js
import React from 'react';

const TutorialModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Game Tutorial</h2>
        <p>Welcome to the Text Adventure Game! This game takes you through a series of scenarios where your choices determine the outcome. To play, simply read the scenario and click on the choice you wish to make. Enjoy your adventure!</p>
        <button onClick={onClose}>Close Tutorial</button>
      </div>
    </div>
  );
};

export default TutorialModal;