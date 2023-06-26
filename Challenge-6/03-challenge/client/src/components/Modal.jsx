import { useState } from "react";

function Modal(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("");
  const [lvl, setLvl] = useState("");

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

    if (props.form.id) {
      const data = {
        id: props.form.id,
        username: username,
        email: email,
        exp: exp,
        lvl: lvl,
      };

      props.onUpdatePlayer(data);
    } else {
      const data = {
        id: props.student.length + 1,
        username: username,
        email: email,
        exp: exp,
        lvl: lvl,
      };

      props.onAddPlayer(data);
    }

    setUsername("");
    setEmail("");
    setExp("");
    setLvl("");
  };

  return (
    <>
      {/* <!-- Trigger/Open The Modal --> */}
      <button onClick={props.onToggleModal}>Open Modal</button>

      {/* <!-- The Modal --> */}
      <div id="myModal" style={{ display: props.toggle }} className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <span className="close" onClick={props.onToggleModal}>
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

export default Modal;
