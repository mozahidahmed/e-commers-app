import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/pages/Home/Home";
import Footer from "./component/shared/Footer";
import Navbar from "./component/shared/Navbar";
import Login from "./component/pages/Authentication/Login";
import Register from "./component/pages/Authentication/Register";

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
