import "./Table.module.css";

function Table(props) {
  const students = props.student;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>NIM</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td> {student.id} </td>
            <td> {student.nama} </td>
            <td> {student.nim} </td>
            <td> {student.email} </td>
            <td style={{ textAlign: "center" }}>
              <button onClick={() => props.onEditStudent(student)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
