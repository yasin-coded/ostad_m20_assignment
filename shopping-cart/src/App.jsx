import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCartClick={() => console.log("open cart")} />
    </div>
  );
}

export default App;