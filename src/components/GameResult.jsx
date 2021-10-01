import React, { useState } from "react";

const GameResult = ({ weapon, computerWeapon }) => {
  const [result, setResult] = useState("");

  if (weapon === "rock" && computerWeapon === "paper") {
    setResult('You lose')
  } else if (weapon === "rock" && computerWeapon === "scissors") {
    setResult('You win')
  } else if (weapon === "paper" && computerWeapon === "rock") {
    setResult('You win')
  } else if (weapon === "paper" && computerWeapon === "scissors") {
    setResult('You lose')
  } else if (weapon === "scissors" && computerWeapon === "rock") {
    setResult('You lose')
  } else if (weapon === "scissors" && computerWeapon === "paper") {
    setResult('You win')
  } else {
    setResult('Draw')
  }

  return (
  <div>
    {result}
  </div>
  )
};

export default GameResult;
