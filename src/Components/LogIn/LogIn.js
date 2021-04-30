import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { Button } from "react-bootstrap";
import { UserContext } from "./../../App";
import { useHistory, useLocation } from "react-router";

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  var provider = new firebase.auth.GoogleAuthProvider();
  const hangleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid red",
        backgroundColor: "green",
        height: "100vh",
      }}
    >
      <div style={{ margin: "50px 0px" }}>
        <h5>user: {loggedInUser.displayName}</h5>
        <b>user: {loggedInUser.email}</b>
      </div>
      <Button onClick={hangleGoogleSignIn}>SignInWithGoogle</Button>
    </div>
  );
};

export default LogIn;
