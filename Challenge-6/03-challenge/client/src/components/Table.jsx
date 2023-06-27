import PropTypes from "prop-types";

function Table({ player, onEditPlayer }) {
  return (
    <table>
      {/* <h1>Hello, {props.nama}</h1> */}
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Username</th>
          <th style={{ width: "30%" }}>Email</th>
          <th style={{ width: "15%" }}>Experience</th>
          <th style={{ width: "15%" }}>Level</th>
          <th style={{ width: "5%" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {player.map((player) => (
          <tr key={player.id}>
            <td> {player.username} </td>
            <td> {player.email} </td>
            <td> {player.exp} </td>
            <td> {player.lvl} </td>
            <td>
              <button onClick={() => onEditPlayer(player)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  player: PropTypes.array,
  onEditPlayer: PropTypes.func,
};

export default Table;
