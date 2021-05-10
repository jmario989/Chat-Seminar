import { auth } from "../../firebaseClient";

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  const { currentUser: user } = auth;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  console.log(user);

  return (
    <div className={`message ${messageClass}`}>
      <div className="message__user">
        <img src={photoURL} alt="Avatar" />
      </div>
      <p style={{ textAlign: "left" }}>
        <span>{auth?.currentUser?.displayName}</span>
        <br />
        {text}
      </p>
    </div>
  );
};

export default ChatMessage;
