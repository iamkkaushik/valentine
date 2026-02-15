import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '60%' });
  const [isMobile, setIsMobile] = useState(false);

  // Check if user is on mobile for better "No" button behavior
  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const moveNoButton = () => {
    // Generate random coordinates within 80% of the screen
    const randomTop = Math.floor(Math.random() * 70) + 15;
    const randomLeft = Math.floor(Math.random() * 70) + 15;
    
    setNoButtonPos({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  if (hasAccepted) {
    return (
      <div className="main-container">
        <div className="card success-view">
          <div className="emoji-header">
            <span>🤗</span><span>🌸</span><span>💞</span>
          </div>
          <h1 className="yay-text">Yay! She said YES 💕</h1>
          <div className="congrats-text">Congratulations !</div>
          <p className="sub-text">This moment just became a beautiful memory ✨</p>
          
          <div className="love-letter">
            <p>You are my today, my tomorrow, and my forever.</p>
            <p>Thank you for being my wife,<br/>my love, my best friend.</p>
            <p className="endless">I love you endlessly ❤️ 💖</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      {/* Background Hearts Decor */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}>❤️</div>
        ))}
      </div>

      <div className="card">
        <div className="emoji-header">
          <span>🐱</span><span>💓</span>
        </div>
        <h2 className="question">Will you be my Valentine?</h2>
        
        <div className="btn-container">
          <button 
            className="btn-yes" 
            onClick={() => setHasAccepted(true)}
          >
            Yes 💞
          </button>
          
          <button 
            className="btn-no"
            style={{ 
              position: 'fixed',
              top: noButtonPos.top, 
              left: noButtonPos.left,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={!isMobile ? moveNoButton : null}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
          >
            No
          </button>
        </div>
        
        <p className="shy-text">(No is a little shy 😈)</p>
      </div>
    </div>
  );
}

export default App;