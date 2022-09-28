import { useState } from "react";
import Login from "./components/Login/Login";
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
      {loggedIn && <TextEditor />}
      {!loggedIn && <Login onLogin={setLoggedIn} />}
    </div>
  );
}

export default App;
