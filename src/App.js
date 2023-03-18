import "./App.css";
import Home from "./component/pages/Home/Home";
import Footer from "./component/shared/Footer";
import Navbar from "./component/shared/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
