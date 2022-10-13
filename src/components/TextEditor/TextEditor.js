import { useEffect, useRef, useState } from "react";
import styles from "./TextEditor.module.css";
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
      <div
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        className={styles.title}
        suppressContentEditableWarning="true"
        contentEditable="true"
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      ></div>
      <span
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        className={styles.document}
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
