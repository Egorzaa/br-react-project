import { Avatar } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import CounterWithLogger, { Counter } from "../../Component/Counter/Counter";
import MessageList from "../../MessageList";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../..";

export const App = () => {
  const [text, setText] = useState("");
  const [messageList] = useState(["1", "2"]);

  const { color } = useContext(MyContext);

  const ref = useRef(undefined);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleTextChange = (e) => setText(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <Avatar src="/static/1.jpg" alt="Remy Sharp" />

        <Counter />
        <br />
        <br />
        <TextField
          inputRef={ref}
          value={text}
          variant="outlined"
          onChange={handleTextChange}
        />
        <br />
        <br />
        <button>Send Message</button>
        <br />
        <Counter />
        <br />
        <MessageList messageList={messageList}></MessageList>

        <div style={{ color }}>some text</div>
        <CounterWithLogger name={"Vasja"} />
      </header>
    </div>
  );
};
