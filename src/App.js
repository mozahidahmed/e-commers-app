import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home/Home";
import Footer from "./component/shared/Footer";
import Navbar from "./component/shared/Navbar";
import Login from "./component/pages/Authentication/Login";
import Register from "./component/pages/Authentication/Register";
import KidsDailyActivity from "./component/pages/Home/KidsDailyActivity";
import DashboardNavbar from "./component/pages/Dashboard/DashboardNavbar";
import Welcome from "./component/pages/Dashboard/Welcome";
import UserProfile from "./component/pages/Dashboard/UserProfile";
import CreateAccount from "./component/pages/Dashboard/CreateAccount";
import AddReviews from "./component/pages/Dashboard/AddReviews";




function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/gallery" element={<KidsDailyActivity />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="dashboard" element={<DashboardNavbar></DashboardNavbar>}>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path="userprofile" element={<UserProfile></UserProfile>}></Route>
          <Route path="create-account" element={<CreateAccount></CreateAccount>}></Route>
          <Route path="add-review" element={<AddReviews></AddReviews>}></Route>
         
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
