import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Modal from "./components/Modal";

const DUMMY_PLAYERS = [
  {
    id: 1,
    username: "Hello World",
    email: "hello.world@mail.com",
    exp: 666,
    lvl: 9999,
  },
  {
    id: 2,
    username: "Mamat Manja",
    email: "mamat@mail.com",
    exp: 0,
    lvl: 0,
  },
  {
    id: 3,
    username: "Megachan",
    email: "mega@mail.com",
    exp: 69,
    lvl: 6969,
  },
  {
    id: 4,
    username: "Miofino",
    email: "mio@mail.com",
    exp: 999,
    lvl: 9,
  },
  {
    id: 5,
    username: "CandyCup",
    email: "candy@mail.com",
    exp: 999,
    lvl: 8,
  },
  {
    id: 6,
    username: "Mamang",
    email: "mamang@mail.com",
    exp: 999,
    lvl: 7,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [playerData, setPlayersData] = useState(DUMMY_PLAYERS);
  const [modalButton, setModalButton] = useState("none");
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    exp: "",
    lvl: "",
  });

  const addPlayer = (data) => {
    setPlayersData([...playerData, data]);
  };

  const getStudentData = (data) => {
    setModalButton("block");
    setFormData(data);
  };

  const updatePlayer = (data) => {
    setPlayersData((prevState) => {
      const newPlayerData = prevState.filter((player) => player.id !== formData.id);
      setFormData({});
      return [...newPlayerData, data];
    });
  };

  const modalOn = () => {
    // if (modalButton == "none") {
    //   setModalButton("block");
    // } else {
    //   setModalButton("none");
    // }
    setModalButton("block");
  };

  const modalOff = () => {
    setModalButton("none");
  };

  const filterData = (data) => {
    console.log(data);
  };

  return (
    <>
      <Modal toggle={modalButton} player={playerData} onModalOff={modalOff} onAddPlayer={addPlayer} onUpdatePlayer={updatePlayer} form={formData} />
      <Navbar onModalOn={modalOn} player={playerData} onFilterData={filterData} />
      <Table player={playerData} onEditPlayer={getStudentData} onModalOn={modalOn} />

      <h1>Hello World!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
