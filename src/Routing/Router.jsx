import React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { App } from "../Screens/App";
import { Chats } from "../Screens/Chats";
import Profile from "../Screens/Profile";
import { ROUTES } from "./constants";

export const Router = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ROUTES.MAIN}>Main</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
        <li>
          <Link to={ROUTES.CHAT}>Chats</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={ROUTES.PROFILE}>
          <Profile />
        </Route>
        <Route path={ROUTES.CHATS}>
          <Chats />
        </Route>
        <Route exact path={ROUTES.MAIN}>
          <App />
        </Route>

        <Route exact path={ROUTES.NOCHAT}>
          No chat
        </Route>
        <Route path={ROUTES.NOT_FOUND}>Page not found</Route>
        <Route>
          <Redirect exact to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
