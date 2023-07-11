import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

export default function DataTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUser();
  }, [users]);

  const fetchUser = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          setUsers(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h3>Table Data</h3>
      <table>
        <tr>
          <th>Nama</th>
          <th>Email</th>
          <th>Tinggal</th>
        </tr>
        {users.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.live}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
