import "./App.css";
// import { useState } from "react";
// import { Alert, Button, Container } from "reactstrap";

import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

// function App() {
//   const [count, setCount] = useState(0);
//   const [state, setState] = useState("");
//   const [color, setColor] = useState({ danger: false });

//   const handleLogout = () => {
//     alert("Anda Logout.");
//   };

//   const handleChange = (e) => {
//     setState({ value: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     alert("Nama yang dimasukkan: " + state.value);
//     e.preventDefault();
//   };

//   const handleOnClick = () => {
//     setColor({ danger: true });
//   };
//   const { danger } = color;

//   return (
//     <>
//       <Container className={StyleSheet.container}>
//         <Container className="text-center">
//           <Button className="mb-4" color="danger" onClick={handleOnClick}>
//             Hati-Hati!
//           </Button>
//           {danger && <Alert color="danger">Sudah dibilang hati-hati!</Alert>}
//         </Container>
//       </Container>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name: <input type="text" value={state.value} onChange={handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//       <div className="container">
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//       <div className="card">
//         <h1>Hello World!</h1>
//         <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
//       </div>
//     </>
//   );
// }

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/Login" element={<Login />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
      // <div>
      //   <h1>Hello Dek</h1>
      // </div>
    );
  }
}

export default App;
