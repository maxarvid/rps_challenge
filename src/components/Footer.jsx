import React from 'react'

const Footer = ( {userScore, computerScore}) => {
  return (
    <footer>
      <p id="footer">Made with React {React.version}</p>
      <h2 id="score">Your score: {userScore} – Computer score: {computerScore}</h2>
    </footer>
  );
};

export default Footer;
