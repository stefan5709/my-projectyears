import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import './App.css';



function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Products />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;