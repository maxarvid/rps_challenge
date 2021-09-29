import React, { useState } from "react";

const GameResult = ({ userWeapon, computerWeapon }) => {
  const [result, setResult] = useState("");

  if (userWeapon === "rock" && computerWeapon === "paper") {
    setResult('You lose')
  } else if (userWeapon === "rock" && computerWeapon === "scissors") {
    setResult('You win')
  } else if (userWeapon === "paper" && computerWeapon === "rock") {
    setResult('You win')
  } else if (userWeapon === "paper" && computerWeapon === "scissors") {
    setResult('You lose')
  } else if (userWeapon === "scissors" && computerWeapon === "rock") {
    setResult('You lose')
  } else if (userWeapon === "scissors" && computerWeapon === "paper") {
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
