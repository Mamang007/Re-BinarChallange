function Table(props) {
  const data = props.player;
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
        {data.map((player, index) => (
          <tr key={index}>
            <td> {player.username} </td>
            <td> {player.email} </td>
            <td> {player.exp} </td>
            <td> {player.lvl} </td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Mamat</td>
          <td>ManjaManjaManja</td>
          <td>banget</td>
          <td>abiez</td>
          <td>
            <button>Edit</button>
          </td>
        </tr>
        <tr>
          <td>Mamat</td>
          <td>Manja</td>
          <td>banget</td>
          <td>abiez</td>
          <td>
            <button>Edit</button>
          </td>
        </tr>
        <tr>
          <td>Mamat</td>
          <td>Manja</td>
          <td>banget</td>
          <td>abiez</td>
          <td>
            <button>Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
