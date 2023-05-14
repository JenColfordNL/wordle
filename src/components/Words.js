//import wordBank from "./wordle-bank.txt";
// import regWords from "./regular-wordle-bank.txt";
import wordBank from "./combined.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  let nlWordleCount = 174;
  // let nlWordleCount = 1;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * nlWordleCount)];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
