import React, { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return (
    <div>
      <Header />
      <Game
        userScore={userScore}
        setUserScore={setUserScore}
        computerScore={computerScore}
        setComputerScore={setComputerScore}
      />
      <Footer userScore={userScore} computerScore={computerScore} />
    </div>
  );
};
export default App;
