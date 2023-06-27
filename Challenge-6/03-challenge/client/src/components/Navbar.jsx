import PropTypes from "prop-types";
import { useState } from "react";

function Navbar({ onModalOn, player, onFilterData }) {
  const [searchValue, setSearchValue] = useState("");

  const searchOnChangeHandle = (event) => {
    setSearchValue(event.target.value);
    // console.log(event.target.value);
  };

  function filterPlayer(users, key, value) {
    return users.filter(function (user) {
      return user[key] === value;
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const dropdown = document.getElementById("dropdown");
    const selectedValue = dropdown.value;
    console.log(player[selectedValue], searchValue);

    const data = filterPlayer(player, selectedValue, searchValue);
    onFilterData(data);
  };

  return (
    <div className="flex-container">
      <div>
        <button onClick={onModalOn}>Add Player</button>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <select name="dropdown" id="dropdown">
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="exp">Experience</option>
            <option value="lvl">Level</option>
          </select>
          <input type="text" placeholder="Search.." name="search" onChange={searchOnChangeHandle} value={searchValue} />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  onModalOn: PropTypes.func,
  player: PropTypes.array,
  onFilterData: PropTypes.func,
};

export default Navbar;
