import React, { useState, useEffect, useCallback } from "react";
import { Checkbox, Container, Button, Form } from "semantic-ui-react";

const Game = ({ userScore, setUserScore, computerScore, setComputerScore }) => {
  const [weapon, setWeapon] = useState("");
  const [computerWeapon, setComputerWeapon] = useState("");
  const [result, setResult] = useState("");
  const [showPlayGame, setShowPlayGame] = useState(true);
  const [mount, setMount] = useState(false);

  const newComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    setComputerWeapon(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    setComputerWeapon();
  }, []);

  const playGame = () => (
    <Button
      onClick={() => {
        newComputerChoice();
        setShowPlayGame(false);
        setMount(false);
      }}
      id="play-game"
    >
      Play Game
    </Button>
  );

  const gameResult = useCallback(() => {
    if (weapon === "rock" && computerWeapon === "paper") {
      setResult("You lose");
      setComputerScore(computerScore + 1);
    } else if (weapon === "rock" && computerWeapon === "scissors") {
      setResult("You win");
      setUserScore(userScore + 1);
    } else if (weapon === "paper" && computerWeapon === "rock") {
      setResult("You win");
      setUserScore(userScore + 1);
    } else if (weapon === "paper" && computerWeapon === "scissors") {
      setResult("You lose");
      setComputerScore(computerScore + 1);
    } else if (weapon === "scissors" && computerWeapon === "rock") {
      setResult("You lose");
      setComputerScore(computerScore + 1);
    } else if (weapon === "scissors" && computerWeapon === "paper") {
      setResult("You win");
      setUserScore(userScore + 1);
    } else if (weapon === "" && weapon === computerWeapon) {
      setResult("");
    } else if (weapon === computerWeapon) {
      setResult("Draw");
    }
  }, [
    weapon,
    computerWeapon,
    computerScore,
    setComputerScore,
    userScore,
    setUserScore,
  ]);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      gameResult();
    }
  }, [computerWeapon, gameResult, mount]);

  return (
    <Container id="game">
      <p id="selected-weapon">You chose {weapon}</p>
      <p id="computer-weapon">
        The value of computerWeapon is {computerWeapon}
      </p>
      <Button
        id="new-game"
        onClick={() => {
          setResult("");
          setWeapon("");
          setComputerWeapon("");
          setShowPlayGame(true);
        }}
      >
        New Game
      </Button>
      <p>Choose your weapon</p>
      <Form>
        <Form.Field id="weapon-rock" onClick={() => setWeapon("rock")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Rock"
            checked={weapon === "rock"}
          />
        </Form.Field>
        <Form.Field id="weapon-paper" onClick={() => setWeapon("paper")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Paper"
            checked={weapon === "paper"}
          />
        </Form.Field>
        <Form.Field id="weapon-scissors" onClick={() => setWeapon("scissors")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Scissors"
            checked={weapon === "scissors"}
          />
        </Form.Field>
      </Form>
      {showPlayGame ? playGame() : null}
      <p id="game-result">{result}</p>
    </Container>
  );
};

export default Game;
