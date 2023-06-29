import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css"
import LogIn from "./Components/LogIn/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App