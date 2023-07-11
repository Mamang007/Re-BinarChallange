import { useEffect, useState } from "react";
import firebase from "../services/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((u) => {
      console.log(u);
    });
    console.log("ini useEffect");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return alert("Please insert missing credentials!");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        // console.log(cred);
        // console.log(cred.user.email);
        setUser(cred.user.email);
        console.log("Login Success", cred.user.email);

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User Sign Out!");
        setUser("");
      });
  };

  return (
    <div>
      <form>
        <h3>Login</h3>
        {!!user && <h4>Hello, {user}</h4>}
        <label>Email:</label>
        <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
        <input type="submit" onClick={handleLogin} />
        <input type="submit" onClick={handleLogout} value="Log Out" />
      </form>
    </div>
  );
}
