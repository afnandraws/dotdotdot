import { useState } from "react";

const TextEditorModule = () => {
  const [Paragraphs, setParagraphs] = useState([]);

  const deleteParagraph = (e) => {
    if (e.key === "Enter" || "Backspace") {
      alert("You pressed 'enter'.");
    }
  };

  return <input onKeyDown={deleteParagraph}></input>;
};

export default TextEditorModule;
