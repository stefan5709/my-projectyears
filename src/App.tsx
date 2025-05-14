import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Acasa from "./components/pagesNavbar/Acasa";
import Desprenoi from "./components/pagesNavbar/Desprenoi";
import Shop from "./components/pagesNavbar/Shop";
import Contact from "./components/pagesNavbar/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar /> {/* Navbar-ul va rămâne vizibil pe toate paginile */}

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
              <Featured />
            </>
          } />

          <Route path="/acasa" element={<Acasa />} />
          <Route path="/despre-noi" element={<Desprenoi />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;