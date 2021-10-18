import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import MessageList from "./MessageList";

const App = ({ name }) => {
  const [text, setText] = useState("");
  const [messageList] = useState(["1", "2"]);

  const handleTextChange = (e) => setText(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name}</h1>
        <Counter />
        <br />
        <br />
        <input value={text} onChange={handleTextChange} />
        <button>Send Message</button>
        <br />
        <br />
        <MessageList messageList={messageList} />
      </header>
    </div>
  );
};

export default App;
