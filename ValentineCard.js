import React, { useState } from 'react';

const ValentineCard = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '65%' });

  const moveNoButton = () => {
    // Generate random position within 80% of the screen to keep it visible
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    
    setNoButtonPos({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      position: 'fixed'
    });
  };

  if (hasAccepted) {
    return (
      <div className="container">
        <div className="card success-card">
          <div className="emoji-row">
            <span className="emoji">🤗</span>
            <span className="emoji">🌸</span>
            <span className="emoji">💞</span>
          </div>
          <h1>Yay! She said YES 💕</h1>
          <p className="congrats">Congratulations Richa!</p>
          <p>This moment just became a beautiful memory ✨</p>
          <div className="message">
            <p>You are my today, my tomorrow, and my forever.</p>
            <p>Thank you for being my wife, my love, my best friend.</p>
            <p className="endless">I love you endlessly ❤️ 💖</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div className="emoji-row">
          <span className="emoji">🐱</span>
          <span className="emoji">💓</span>
        </div>
        <h2>Will you be my Valentine?</h2>
        
        <div className="button-group">
          <button 
            className="btn-yes" 
            onClick={() => setHasAccepted(true)}
          >
            Yes 💞
          </button>
          
          <button 
            className="btn-no"
            style={{ 
              top: noButtonPos.top, 
              left: noButtonPos.left, 
              position: noButtonPos.position || 'relative' 
            }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton} // For mobile support
          >
            No
          </button>
        </div>
        <p className="hint">(No is a little shy 😈)</p>
      </div>
    </div>
  );
};

export default ValentineCard;