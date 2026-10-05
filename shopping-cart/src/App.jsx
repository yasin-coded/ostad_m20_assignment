import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCartClick={() => console.log("open cart")} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<h1 className="p-4 text-2xl">Cart</h1>}/>
      </Routes>
    </div>
  );
}

export default App;