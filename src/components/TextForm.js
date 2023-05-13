import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handlespeak = () => {
    let newText = new SpeechSynthesisUtterance();

    newText.text = text;

    window.speechSynthesis.speak(newText);
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClearClick = () => {
    setText("");
  };
  // const handleEmails = () => {
  //   let newText = text.match(
  //     /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
  //   );
  //   setText(newText);
  // };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handlespeak}>
          Speak
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleSpaces}>
          Spaces
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
        {/* <button className="btn btn-primary mx-1 my-2" onClick={handleEmails}>
          Emails
        </button> */}
      </div>
      <div className="container my-3">
        <h3>Summary:</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview:</h3>
        <p>{text}</p>
        {/* <h3>Extracted Emails</h3>
        <p>{handleEmails}</p> */}
      </div>
    </>
  );
}
