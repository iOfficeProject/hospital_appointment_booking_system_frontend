import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css"
import LogIn from "./Components/LogIn/LoginForm";
import Welcome from "./Components/Welcome/Welcome";
import AdminPage from "./Components/Welcome/AdminPage";
import AddDoctor from "./Components/Welcome/AddDoctor";
import EditDoctor from "./Components/Welcome/EditDoctor";
import AddHospital from "./Components/Welcome/AddHospital";
import AddUser from "./Components/Welcome/AddUser";
import AddRole from "./Components/Welcome/AddRole";
import HospitalPage from "./Components/Welcome/HospitalPage";
import EditHospital from "./Components/Welcome/EditHospital";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>}/> */}
        <Route path="/" element={<AdminPage />} />
        <Route path="/create" element={<AddDoctor />} />
        <Route path="/edit" element={<EditDoctor />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/addhospital" element={<AddHospital />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addrole" element={<AddRole />} />
        <Route path="/edithospital" element={<EditHospital />} />
        
      </Routes>
    {/* <AdminPage /> */}
    </BrowserRouter>
    {/* // <Welcome /> */}
    </>
  )
}

export default App