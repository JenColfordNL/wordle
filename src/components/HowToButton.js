import React from "react";

export default function HowToButton() {
  const handleClick = () => {
    alert(
      "You have six attempts to guess the Newfoundland word. Each guess must be a valid 5-letter word. If a sqaure turns pink, the letter is in the Newfoundland word but in the wrong position.  If the square turns green, you guessed the right letter in the right position. If the square turns grey, the letter you guessed is not in the Newfoundland word"
    );
  };

  return (
    <div className="howToButton">
      <div className="nav-menu">
        <button type="button" className="help-button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="4 4 24 24"
            width="24"
            className="help-button-icon"
          >
            <path
              fill="#ffffff"
              d="M14.8333 23H17.1666V20.6667H14.8333V23ZM15.9999 4.33334C9.55992 4.33334 4.33325 9.56001 4.33325 16C4.33325 22.44 9.55992 27.6667 15.9999 27.6667C22.4399 27.6667 27.6666 22.44 27.6666 16C27.6666 9.56001 22.4399 4.33334 15.9999 4.33334ZM15.9999 25.3333C10.8549 25.3333 6.66659 21.145 6.66659 16C6.66659 10.855 10.8549 6.66668 15.9999 6.66668C21.1449 6.66668 25.3333 10.855 25.3333 16C25.3333 21.145 21.1449 25.3333 15.9999 25.3333ZM15.9999 9.00001C13.4216 9.00001 11.3333 11.0883 11.3333 13.6667H13.6666C13.6666 12.3833 14.7166 11.3333 15.9999 11.3333C17.2833 11.3333 18.3333 12.3833 18.3333 13.6667C18.3333 16 14.8333 15.7083 14.8333 19.5H17.1666C17.1666 16.875 20.6666 16.5833 20.6666 13.6667C20.6666 11.0883 18.5783 9.00001 15.9999 9.00001Z"
            ></path>
          </svg>
        </button>
      </div>
      
    </div>
  );
}
