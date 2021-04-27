function ChatMessage(props) {
    const {Text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    
    return (
    <div className={'message ${messageClass}'}>
      <img src={photoURL} />
      <p>{text}</p>
  
    </div>
    )
  }