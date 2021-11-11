import React from "react";
import firebase from "firebase";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { App } from "../Screens/App";
import { Chats } from "../Screens/Chats";
import { Dogs } from "../Screens/Dogs";
import Profile from "../Screens/Profile";
import { Signin } from "../Screens/Signin/Signin";
import { Signup } from "../Screens/Signup";
import { ROUTES } from "./constants";
import { useState } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Router = () => {
  const [authed, setAuthed] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleInitApp = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      setAuthed(user);
      setLoading(false);
    });
  };
  useEffect(() => {
    handleInitApp();
  }, []);

  if (loading) return <CircularProgress />;

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

        <li>
          <Link to={ROUTES.DOGS}>Dogs</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute exact path={ROUTES.PROFILE} authed={authed}>
          <Profile />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.CHATS} authed={authed}>
          <Chats />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.MAIN} authed={authed}>
          <App />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.DOGS} authed={authed}>
          <Dogs />
        </PrivateRoute>
        <PublicRoute exact path={ROUTES.SIGNUP} authed={authed}>
          <Signup />
        </PublicRoute>
        <PublicRoute exact path={ROUTES.SIGNIN} authed={authed}>
          <Signin />
        </PublicRoute>

        <PrivateRoute exact path={ROUTES.NOCHAT} authed={authed}>
          No chat
        </PrivateRoute>
        <Route path={ROUTES.NOT_FOUND}>Page not found</Route>
        <Route>
          <Redirect exact to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
