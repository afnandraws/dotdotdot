import styles from "./TextEditor.module.css";
import { useRef } from "react";
import TextEditorModule from "./TextEditorModule";

const RichTextEditor = () => {
  return (
    <div>
      <TextEditorModule></TextEditorModule>
    </div>
  );
};

export default RichTextEditor;
