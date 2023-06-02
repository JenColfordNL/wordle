import React from "react";

export default function HowToButton() {
  const handleClick = () => {
    alert(
      "You have six attempts to guess the Newfoundlandle. If a sqaure turns pink, the letter is in the word but not in the right position.  If the square turns green, you guessed the right letter in the right position on the board. If the square turns grey, the letter you guessed is not in the Newfoundlandle"
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
