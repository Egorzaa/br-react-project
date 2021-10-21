import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import { Counter } from "../../Component/Counter";
import MessageList from "../../MessageList";
import { useRef } from "react";
import { useEffect } from "react";

export const App = ({ name, qwerty }) => {
  const [text, setText] = useState("");
  const [messageList] = useState(["1", "2"]);

  const ref = useRef(undefined);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleTextChange = (e) => setText(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name}</h1>
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
        <MessageList messageList={messageList} />
      </header>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  qwerty: PropTypes.number,
};

App.defaultProps = {
  qwerty: 3124132,
};
