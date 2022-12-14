import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "๐": "Happy",
  "๐": "Laughing",
  "๐": "Slightly happy",
  "๐น": "Laughing Cat",
  "๐ฅฐ": "In love",
  "๐": "Angel",
  "๐คฉ": "Excited",
  "๐ค": " Zip It",
  "๐ค": "Thinker",
  "๐พ": "Pouting Cat Face",
  "๐คจ": "The Rock",
  "๐ฎโ๐จ": "Sigh",
  "๐": "Flirting",
  "๐": "Eye Roll",
  "๐ท": "Mask Face",
  "๐ค": "Clumsy",
  "๐": "Domestic Cat",
  "๐ฅถ": "Freezing",
  "๐ตโ๐ซ": "Dizzy Face",
  "๐ป": "Loving Cat",
  "๐ฅ": "Bang",
  "๐ฐ": "Nervous Face",
  "๐": "Devil",
  "๐": "Skull",
  "๐ป": "Ghost",
  "๐": "Waving Hand Sign",
  "๐": "Kiss Mark",
  "๐ค": "Call Me Hand Sign"
};

const emoji = Object.keys(emojiDictionary);
const list = ["a", "b", "c", "d", "e", "f"];
export default function App() {
  const [state, setState] = useState("");

  const changeHandler = (event) => {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Emoji not found in our dictionary";
    }
    setState(meaning);
  };

  const emojiHandler = (item) => {
    setState(item);
    let meaning = emojiDictionary[item];
    setState(meaning);
  };

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input placeholder="Paste Your Emoji Here" onChange={changeHandler} />
      <h1>{state}</h1>
      <ul>
        {emoji.map((value) => (
          <span
            style={{ cursor: "pointer", fontSize: "2rem" }}
            onClick={() => emojiHandler(value)}
          >
            {value}
          </span>
        ))}
      </ul>
    </div>
  );
}