import { Component } from "react";
import firebase from "../services/firebase";

export default class Register extends Component {
  state = {};
  set = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleRegister = (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    if (!email || !password) return alert("Email atau password salah!");
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log(cred);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <input type="email" onChange={this.set("email")} />
        <input type="password" onChange={this.set("password")} />
        <input type="submit" />
      </form>
    );
  }
}
