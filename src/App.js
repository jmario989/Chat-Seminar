import React from "react";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";
import { GoogleUser } from "./firebaseClient";

import "./App.css";

function App() {
  const user = GoogleUser();

  return (
    <div className="App">
      <header>
        <h1>Mario Chat Algebra💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
