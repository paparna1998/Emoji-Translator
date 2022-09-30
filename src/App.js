import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😀": "Happy",
  "😂": "Laughing",
  "🙂": "Slightly happy",
  "😹": "Laughing Cat",
  "🥰": "In love",
  "😇": "Angel",
  "🤩": "Excited",
  "🤐": " Zip It",
  "🤔": "Thinker",
  "😾": "Pouting Cat Face",
  "🤨": "The Rock",
  "😮‍💨": "Sigh",
  "😏": "Flirting",
  "🙄": "Eye Roll",
  "😷": "Mask Face",
  "🤕": "Clumsy",
  "🐈": "Domestic Cat",
  "🥶": "Freezing",
  "😵‍💫": "Dizzy Face",
  "😻": "Loving Cat",
  "💥": "Bang",
  "😰": "Nervous Face",
  "😈": "Devil",
  "💀": "Skull",
  "👻": "Ghost",
  "👋": "Waving Hand Sign",
  "💋": "Kiss Mark",
  "🤙": "Call Me Hand Sign"
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