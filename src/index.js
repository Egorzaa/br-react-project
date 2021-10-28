import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./Routing/Router";
import { store } from "./Store";

export const MyContext = createContext({ color: "red" });
export const MyAnotherContext = createContext({ color: "red" });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyContext.Provider value={{ color: "blue" }}>
        <MyAnotherContext.Provider value={{ color: "blue" }}>
          <Router />
        </MyAnotherContext.Provider>
      </MyContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
