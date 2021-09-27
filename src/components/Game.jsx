import React, { useState } from "react";
import { Checkbox, Container, Button, Form } from "semantic-ui-react";

const Game = () => {
  const [weapon, setWeapon] = useState("");

  return (
    <Container id="game">
      <p>The value of Weapon is {weapon}</p>
      <Button id="new-game">New Game</Button>
      <p>Choose your weapon</p>
      <Form>
        <Form.Field onClick={() => setWeapon("Rock")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Rock"
            checked={weapon == "Rock"}
          />
        </Form.Field>
        <Form.Field onClick={() => setWeapon("Paper")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Paper"
            checked={weapon == "Paper"}
          />
        </Form.Field>
        <Form.Field onClick={() => setWeapon("Scissors")}>
          <Checkbox
            radio
            name="gameRadioGroup"
            label="Scissors"
            checked={weapon == "Scissors"}
           />
        </Form.Field>
      </Form>
    </Container>
  );
};

export default Game;
