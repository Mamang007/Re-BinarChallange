import "./App.css";
import firebase from "./services/firebase";

// Component
import Register from "./pages/Register";
import Login from "./pages/Login";
import Uploader from "./pages/Uploader";
import DataTable from "./pages/DataTable";

function App() {
  return (
    <>
      <h1>Coba Firebase</h1>
      <Register />
      <Login />
      <Uploader />
      <DataTable />
    </>
  );
}

export default App;
