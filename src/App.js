import React, { useState } from "react";
import "./styles.css";

const flagDb = {
  "🇦🇨": "Ascension Island",
  "🇦🇪": "United Arab Emirates",
  "🇦🇷": "Argentina",
  "🇮🇳": "India"
};

const flags = Object.keys(flagDb);

export default function App() {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState("Country name will appear here");

  function handleChange(event) {
    console.log("changed", event.target.value);
    const inputFlag = event.target.value;
    setInput(inputFlag);

    if (inputFlag in flagDb) {
      setCountry(flagDb[inputFlag]);
    } else {
      setCountry("failure to recognise this flag");
    }
  }

  function flagClickHandler(inputFlag) {
    setCountry(flagDb[inputFlag]);
  }

  return (
    <div className="App">
      <h1>Find flag coutry</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Emoji of flag"
      />
      <h2>{input}</h2>
      <h2>{country}</h2>

      {flags.map((flag, index) => (
        <span key={index} onClick={() => flagClickHandler(flag)}>
          {flag}
        </span>
      ))}
    </div>
  );
}
