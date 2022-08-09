import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/register/register";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/deleteuser" element={<h1>PAGINA DELETE USER</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
