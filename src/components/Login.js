import React from "react";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import "firebase/auth";
import { auth } from "./firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome MyChat</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br></br>
        <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())
          }
        >
          <GithubOutlined />
          Sign in with GitHub
        </div>
      </div>
    </div>
  );
};

export default Login;
