import { useState } from "react";
import firebase from "../services/firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) return alert("Please insert missing credentials!");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(console.log("Register Success"))
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h3>Register</h3>
        <label>Email:</label>
        <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
