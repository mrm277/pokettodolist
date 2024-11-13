// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pocket from "./pages/Pocket";
import Ex2 from "./pages/Ex2";
import Multibanco from "./pages/Multibanco";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex1" element={<Pocket />} />
        <Route path="/ex2" element={<Ex2/>} />
        <Route path="/ex3" element={<Multibanco/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;