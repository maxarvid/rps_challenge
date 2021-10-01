import React, { useState, useEffect } from "react";
import { Checkbox, Container, Button, Form } from "semantic-ui-react";

const Game = () => {
  const [weapon, setWeapon] = useState("");
  const [computerWeapon, setComputerWeapon] = useState("");
  const [result, setResult] = useState("");

  const newComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    setComputerWeapon(choices[Math.floor(Math.random() * 3)]);
  };

  const gameResult = () => {
    if (weapon === "rock" && computerWeapon === "paper") {
      setResult("You lose");
    } else if (weapon === "rock" && computerWeapon === "scissors") {
      setResult("You win");
    } else if (weapon === "paper" && computerWeapon === "rock") {
      setResult("You win");
    } else if (weapon === "paper" && computerWeapon === "scissors") {
      setResult("You lose");
    } else if (weapon === "scissors" && computerWeapon === "rock") {
      setResult("You lose");
    } else if (weapon === "scissors" && computerWeapon === "paper") {
      setResult("You win");
    } else {
      setResult("Draw");
    }
  };

  useEffect(() => {
    newComputerChoice();
    gameResult();
  }, [weapon, computerWeapon])

  return (
    <Container id="game">
      <p id="selected-weapon">You chose {weapon}</p>
      <p id="computer-weapon">
        The value of computerWeapon is {computerWeapon}
      </p>
      <Button id="new-game">New Game</Button>
      <p>Choose your weapon</p>
      <Form>
        <Form.Field id="weapon-rock" onClick={() => setWeapon("rock")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Rock"
            checked={weapon == "rock"}
          />
        </Form.Field>
        <Form.Field id="weapon-paper" onClick={() => setWeapon("paper")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Paper"
            checked={weapon == "paper"}
          />
        </Form.Field>
        <Form.Field id="weapon-scissors" onClick={() => setWeapon("scissors")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Scissors"
            checked={weapon == "scissors"}
          />
        </Form.Field>
      </Form>
      <Button onClick={() => newComputerChoice()} id="play-game">
        Play Game
      </Button>
      <p id="game-result">
        {result}
      </p>
    </Container>
  );
};

export default Game;
