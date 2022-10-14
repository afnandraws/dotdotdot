import { useState } from "react";
import Login from "./components/Login/Login";
import RichTextEditor from "./components/TextEditor/RichTextEditor";
import TextEditor from "./components/TextEditor/TextEditor";

function App() {
  if (navigator.onLine) {
    console.log("online");
  } else {
    console.log("offline");
  }
  const [loggedIn, setLoggedIn] = useState(false); //will be changed to appwide redux state
  return (
    <div>
      {loggedIn && <RichTextEditor />}
      {!loggedIn && <Login onLogin={setLoggedIn} />}
    </div>
  );
}

export default App;
