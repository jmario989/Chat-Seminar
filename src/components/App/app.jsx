function App() {

  const [user] = [...useAuthState(auth)];
  
    return (
      <div className="App">
        <header>
         
        </header>
  
        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
    );
  }
  