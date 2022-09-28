import { useEffect, useRef, useState } from "react";
import classes from "./TextEditor.module.css";
import Toolkit from "./Toolkit/Toolkit";

const TextEditor = () => {
  const textRef = useRef();
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setText(textRef.current.innerText);
      console.log(textRef.current.innerText);
    }, 10000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div>
      <Toolkit />
      <h1
        data-gramm="false"
        className={classes.title}
        suppressContentEditableWarning="true"
        contentEditable="true"
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        Enter Title here..
      </h1>
      <span
        className={classes.document}
        data-text="Enter text here"
        type="textarea"
        value={text}
        ref={textRef}
        suppressContentEditableWarning="true"
        contentEditable="true"
      />
    </div>
  );
};

export default TextEditor;
