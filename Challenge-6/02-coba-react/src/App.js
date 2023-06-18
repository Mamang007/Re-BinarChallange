import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const DUMMY_STUDENT = [
  { id: 1, nama: "Megachan", nim: 53498, email: "megachan@mail.com" },
  { id: 2, nama: "Mamat", nim: 67913, email: "mamat@mail.com" },
  { id: 3, nama: "Pinjol", nim: 76435, email: "pinjol@mail.com" },
];

function App() {
  const [studentData, setStudentData] = useState(DUMMY_STUDENT);

  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    email: "",
  }); //Boleh menggunakan objek kosong '{}' atau lebih baik null

  const [judul, setJudul] = useState("Tambah Siswa");

  const addStudent = (data) => {
    setStudentData([...studentData, data]);

    // atau untuk lebih aman
    // setStudentData((prevState) => {
    //   return [...prevState, data];
    // });
  };

  const getStudentData = (data) => {
    setFormData(data);
    setJudul("Edit Siswa");
  };

  const updateStudent = (data) => {
    setStudentData((prevState) => {
      const newStudentData = prevState.filter((student) => student.id !== formData.id);
      // Filter digunakan untuk menampilkan student.id yang tidak sama dengan formData.id
      return [...newStudentData, data]; // Menambahkan data yg diedit dengan id = formData.id
    });

    console.log("data student yang di edit", data);
    setJudul("Tambah Siwa");
  };

  return (
    <div className="app">
      <Form onAddStudent={addStudent} form={formData} title={judul} student={studentData} onUpdateStudent={updateStudent} />
      <Table student={studentData} onEditStudent={getStudentData} />
    </div>
  );
}

export default App;
