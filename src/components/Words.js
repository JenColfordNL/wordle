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
  let wordArr;
  let todaysWord;
  let todaysDef;
  let nlWordleCount = 5;

  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      wordArr = result.split("\n");
      let tempArr = wordArr.map((r) => r.slice(0, 5));
      let idSelected = Math.floor(Math.random() * nlWordleCount);
      todaysWord = tempArr[idSelected];
      todaysDef = wordArr[idSelected];

      wordSet = new Set(tempArr);
    });
  console.log("word: ", todaysWord);

  return { wordSet, todaysWord, todaysDef };
};
