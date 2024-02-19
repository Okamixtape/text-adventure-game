// GameContent.js
import React, { useState, useEffect } from 'react';
import textNodes from '../data/textNodes';

const GameContent = ({ onRestart }) => {
  const [currentNode, setCurrentNode] = useState(null);

  useEffect(() => {
    setCurrentNode(textNodes.find(node => node.id === 1));
  }, []);

  function generateBackgroundImageUrl(id) {
    const imageUrl = `${process.env.PUBLIC_URL}/images/node_${id}.png`;
    return imageUrl;
  }

  const backgroundStyle = {
    backgroundImage: currentNode ? `url(${generateBackgroundImageUrl(currentNode.id)})` : 'none'
  };

  const selectOption = (nextTextId) => {
    if (nextTextId === -1) {
      onRestart(); // Appelle la fonction de réinitialisation pour recommencer le jeu
    } else {
      const nextNode = textNodes.find(node => node.id === nextTextId);
      setCurrentNode(nextNode);
    }
  };

  return (
    <div id="game-content" style={backgroundStyle}>
      {currentNode && (
        <>
          <div id="text">{currentNode.text}</div>
          <div id="option-buttons" className="btn-grid">
            {currentNode.options.map(option => (
              <button key={option.text} className="btn" onClick={() => selectOption(option.nextText)}>
                {option.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GameContent;