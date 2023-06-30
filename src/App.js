import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css"
import LogIn from "./Components/LogIn/LoginForm";
import Welcome from "./Components/Welcom/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App