import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./Routing/Router";
import { persistor, store } from "./Store";
import "./index.css";
import "./Services/firebase";

export const MyContext = createContext({ color: "red" });
export const MyAnotherContext = createContext({ color: "red" });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MyContext.Provider value={{ color: "blue" }}>
          <MyAnotherContext.Provider value={{ color: "blue" }}>
            <Router />
          </MyAnotherContext.Provider>
        </MyContext.Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
