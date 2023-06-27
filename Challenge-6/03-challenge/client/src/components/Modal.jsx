import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Modal({ toggle, onModalOff, onAddPlayer, onUpdatePlayer, form, player }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("");
  const [lvl, setLvl] = useState("");

  useEffect(() => {
    if (form) {
      setUsername(form.username);
      setEmail(form.email);
      setExp(form.exp);
      setLvl(form.lvl);
    }
  }, [form]);

  const usernameOnChangeHandle = (event) => {
    setUsername(event.target.value);
  };

  const emailOnChangeHandle = (event) => {
    setEmail(event.target.value);
  };

  const expOnChangeHandle = (event) => {
    setExp(event.target.value);
  };

  const lvlOnChangeHandle = (event) => {
    setLvl(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Membuat fungsi submit tidak ter-reload

    if (form.id) {
      const data = {
        id: form.id,
        username: username,
        email: email,
        exp: exp,
        lvl: lvl,
      };

      onUpdatePlayer(data);
    } else {
      const data = {
        id: player.length + 1,
        username: username,
        email: email,
        exp: exp,
        lvl: lvl,
      };

      onAddPlayer(data);
      // console.log(data.id);
    }

    setUsername("");
    setEmail("");
    setExp("");
    setLvl("");
  };

  const turnOffModal = () => {
    setUsername("");
    setEmail("");
    setExp("");
    setLvl("");
    onModalOff();
  };

  return (
    <>
      {/* <!-- The Modal --> */}
      <div id="myModal" style={{ display: toggle }} className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <span className="close" onClick={turnOffModal}>
            &times;
          </span>
          <form style={{ margin: "auto", width: "200px" }} onSubmit={onSubmit}>
            <h3>Add New Player</h3>
            <label htmlFor="name">Username:</label>
            <br />
            <input type="text" id="name" name="name" onChange={usernameOnChangeHandle} value={username} />
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" onChange={emailOnChangeHandle} value={email} />
            <br />
            <br />
            <label htmlFor="exp">Experience:</label>
            <br />
            <input type="number" id="exp" name="exp" onChange={expOnChangeHandle} value={exp} />
            <br />
            <br />
            <label htmlFor="lvl">Level:</label>
            <br />
            <input type="number" id="lvl" name="lvl" onChange={lvlOnChangeHandle} value={lvl} />
            <br />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  toggle: PropTypes.string,
  onModalOff: PropTypes.func,
  onAddPlayer: PropTypes.func,
  onUpdatePlayer: PropTypes.func,
  form: PropTypes.object,
  player: PropTypes.array,
};

export default Modal;
