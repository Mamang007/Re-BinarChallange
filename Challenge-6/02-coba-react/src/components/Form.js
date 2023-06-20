import { useEffect, useState } from "react";
import "./Form.module.css";

function Form(props) {
  // console.log(props.student.length);

  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (props.form) {
      // console.log("Ada props.form"); // Jika sudah diklik edit maka akan muncul

      setNama(props.form.nama);
      setNim(props.form.nim);
      setEmail(props.form.email);
    }

    // console.log("Tidak ada props.form"); //Jika props.form masih 'null'
  }, [props.form]);

  const namaOnChangeHandle = (event) => {
    setNama(event.target.value);
  };

  const nimOnChangeHandle = (event) => {
    setNim(event.target.value);
  };

  const emailOnChangeHandle = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Membuat fungsi submit tidak ter-reload

    if (props.form.id) {
      const data = {
        id: props.form.id,
        nama: nama,
        nim: nim,
        email: email,
      };

      props.onUpdateStudent(data);
    } else {
      const data = {
        id: props.student.length + 1,
        nama: nama,
        nim: nim,
        email: email,
      };

      props.onAddStudent(data);
    }

    setNama("");
    setNim("");
    setEmail("");
  };

  return (
    <form style={{ margin: "30px 110px", width: "200px" }} onSubmit={onSubmit}>
      <h3>{props.title}</h3>
      <label for="name">Nama:</label>
      <br />
      <input type="text" id="name" name="name" onChange={namaOnChangeHandle} value={nama} />
      <br />
      <br />
      <label for="nim">NIM:</label>
      <br />
      <input type="text" id="nim" name="nim" onChange={nimOnChangeHandle} value={nim} />
      <br />
      <br />
      <label for="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" onChange={emailOnChangeHandle} value={email} />
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}

export default Form;
