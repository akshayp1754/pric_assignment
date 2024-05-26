import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import User from "./User";
import Table from "./components/Table";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add-user" element={<User />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
