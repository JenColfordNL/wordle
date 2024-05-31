import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
    correctDef,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Guessed the Newfoundlandle!"
          : "You Didn't Guess the Newfoundlandle"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <h2> {correctDef}</h2>
    </div>
  );
}

export default GameOver;
