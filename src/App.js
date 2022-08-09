import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/register/register";
import Home from "./pages/home/home";
import DeleteUser from "./pages/deleteuser/deleteuser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/deleteuser" element={<DeleteUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
