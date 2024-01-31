import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import List from "./pages/list/List.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import Signin from "./pages/signin/Signin.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
