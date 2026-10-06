import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartSidebar from "./components/CartSidebar";
import { useState } from "react";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer position="top-center" theme="colored" />
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen= {isCartOpen} onClose= {() => setIsCartOpen(false)} />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mycart" element={<CartPage/>} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;