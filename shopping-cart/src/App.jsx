import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartSidebar from "./components/CartSidebar";
import { useState } from "react";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer position="top-center" theme="colored" />
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen= {isCartOpen} onClose= {() => setIsCartOpen(false)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<h1 className="p-4 text-2xl">Cart</h1>}/>
      </Routes>
    </div>
  );
}

export default App;