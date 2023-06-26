function Navbar(props) {
  return (
    <div className="flex-container">
      <div>
        <button onClick={props.onToggleModal}>Add Player</button>
      </div>
      <div>
        <form action="/action_page.php">
          <select name="cars" id="cars">
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="exp">Experience</option>
            <option value="lvl">Level</option>
          </select>
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
