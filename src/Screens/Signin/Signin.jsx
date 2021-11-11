import { useState } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <div>
        <input type="email" value={email} onChange={handleEmailChange}></input>
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </div>
      <div>
        <button onClick={handleSignup}>Submit</button>
      </div>
      {error && <div>{error}</div>}
      <div>
        Not registered? <Link to={ROUTES.SIGNUP}>sign up</Link>
      </div>
    </div>
  );
};
