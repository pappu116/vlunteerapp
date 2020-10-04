import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button } from "react-bootstrap";
import Logo from "../../logos/Group 1329.png";
import "./login.css";
import Google from "../../logos/google.png";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //redirect path code private route
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  //redirect path code end

  //google auth code is
  const provider = new firebase.auth.GoogleAuthProvider();

  const googleloggedin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <img style={{ height: "80px" }} src={Logo} alt="" />
      <div className="login-area">
        <h2>Login With</h2>
        <Button
          style={{ borderRadius: "50px" }}
          onClick={googleloggedin}
          variant="secondary"
          size="lg"
          block
        >
          <img height="40px" src={Google} alt="" />
          <span>Continew with Google</span>
        </Button>
        <p>
          Don't have an account? <a href="#">Create an account</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
