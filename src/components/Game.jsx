import React, { useState, useEffect } from "react";
import { Checkbox, Container, Button, Form } from "semantic-ui-react";

const Game = () => {
  const [weapon, setWeapon] = useState("");
  const [computerWeapon, setComputerWeapon] = useState("");

  const newComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    setComputerWeapon(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newComputerChoice();
  }, [])

  return (
    <Container id="game">
      <p>The value of Weapon is {weapon}</p>
      <p>The value of computerWeapon is {computerWeapon}</p>
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
      <Button id="play-game">Play Game</Button>
    </Container>
  );
};

export default Game;
