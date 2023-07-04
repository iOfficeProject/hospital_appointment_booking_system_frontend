import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css"
import LogIn from "./Components/LogIn/LoginForm";
import Welcome from "./Components/Welcome/Welcome";
import AdminPage from "./Components/Welcome/AdminPage";
import AddDoctor from "./Components/Welcome/AddDoctor";
import EditDoctor from "./Components/Welcome/EditDoctor";

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
        
      </Routes>
    {/* <AdminPage /> */}
    </BrowserRouter>
    {/* // <Welcome /> */}
    </>
  )
}

export default App