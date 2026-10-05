import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCartClick={() => console.log("open cart")} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<h1 className="p-4 text-2xl">Cart</h1>}/>
      </Routes>
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}

export default App;