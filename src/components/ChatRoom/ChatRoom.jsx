import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef } from "react";
import ChatMessage from "../ChatMessage";
import firebase, { firestore, auth } from "../../firebaseClient";

const ChatRoom = () => {
  const inView = useRef(null);
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const scrollIntoView = () => {
    if (inView?.current) {
      inView.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendMessage = async (e) => {
    if (!formValue) {
      return;
    }

    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    setFormValue("");
    scrollIntoView();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase?.firestore?.FieldValue?.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return (
    <>
      <main>
        {messages?.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        <div ref={inView} />
      </main>

      <form onSubmit={(e) => sendMessage(e)}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />

        <button type="submit" disabled={!formValue}>
          📨
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
