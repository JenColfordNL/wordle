import React from "react";

export default function HowToButton() {
  const handleClick = () => {
    alert(
      "You have six attempts to guess the Newfoundland word. Each guess must be a valid 5-letter word. If a sqaure turns pink, the letter is in the Newfoundland word but in the wrong position.  If the square turns green, you guessed the right letter in the right position. If the square turns grey, the letter you guessed is not in the Newfoundland word"
    );
  };

  return (
    <div className="howToButton">
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          align: "center",
        }}
        onClick={handleClick}
      >
        How to Play
      </button>
    </div>
  );
}
