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
import EditUser from "./Components/Welcome/EditUser";
import EditHospital from "./Components/Welcome/EditHospital";
import AddRole from "./Components/Welcome/AddRole";
<<<<<<< HEAD
import EditRole from "./Components/Welcome/EditRole";
import RolePage from "./Components/Welcome/RolePage";
=======
import HospitalPage from "./Components/Welcome/HospitalPage";
import EditHospital from "./Components/Welcome/EditHospital";
>>>>>>> 35f570d0493a74dec0a534dbe0497bc26d0aa1af

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
        <Route path="/edithospital" element={<EditHospital />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="/addrole" element={<AddRole />} />
<<<<<<< HEAD
        <Route path="/editrole" element={<EditRole />} />
        <Route path="/role" element={<RolePage />} />
=======
        <Route path="/edithospital" element={<EditHospital />} />
>>>>>>> 35f570d0493a74dec0a534dbe0497bc26d0aa1af
        
      </Routes>
    {/* <AdminPage /> */}
    </BrowserRouter>
    {/* // <Welcome /> */}
    </>
  )
}

export default App