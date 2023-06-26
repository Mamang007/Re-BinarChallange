import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Modal from "./components/Modal";

const DUMMY_PLAYERS = [
  {
    username: "Hello World",
    email: "hello.world@mail.com",
    exp: 666,
    lvl: 9999,
  },
  {
    username: "Mamat Manja",
    email: "mamat@mail.com",
    exp: 0,
    lvl: 0,
  },
  {
    username: "Megachan",
    email: "mega@mail.com",
    exp: 69,
    lvl: 6969,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [playerData, setPlayersData] = useState(DUMMY_PLAYERS);
  const [modalButton, setModalButton] = useState("none");

  const addPlayer = () => {
    setPlayersData;
  };

  const toggleModal = () => {
    if (modalButton == "none") {
      setModalButton("block");
    } else {
      setModalButton("none");
    }
  };

  //Fungsi search menggunakan req.query aja

  return (
    <>
      <Modal toggle={modalButton} onToggleModal={toggleModal} onAddPlayer={addPlayer} />
      <Navbar onToggleModal={toggleModal} />
      <Table player={playerData} />
      <h1>Hello World!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
