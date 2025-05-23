import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./components/pagesNavbar/Contact"
import Products from "./components/Products"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Acasa from "./components/pagesNavbar/Acasa";
import Desprenoi from "./components/pagesNavbar/Desprenoi";
import Shop from "./components/pagesNavbar/Shop";
import Footer from "./components/Footer";
import LogIn from './components/button/LogIn';
import SignIn from './components/button/SignIn';
import DashBoard from "./components/button/Dashboard";
import ProductDetail from './components/pagesNavbar/ProductDetail';
import './App.css';

const productData = [
  {
    id: 1,
    name: "Tricou de antrenament",
    price: 489.99,
    rating: 4.5,
    image: "/img/shop_08.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Pantaloni sport",
    price: 549.99,
    rating: 4.2,
    image: "/img/women.jpg",
    isNew: false,
  },
  {
    id: 3,
    name: "Adidași running",
    price: 949.99,
    rating: 4.8,
    image: "/img/adidasi-runing.jpg",
    isNew: true,
  },
  {
    id: 4,
    name: "Geacă fitness",
    price: 679.99,
    rating: 4.3,
    image: "/img/woman-clothes.jpg",
    isNew: false,
  },
  {
    id: 5,
    name: "Top sportiv cu suport ridicat",
    price: 159.99,
    rating: 4.8,
    image: "/img/women-top.png",
    isNew: true,
    category: "Îmbrăcăminte",
  },
  {
    id: 6,
    name: "Leggings yoga cu talie înaltă",
    price: 249.99,
    rating: 4.9,
    image: "/img/legins-yoga.jpg",
    isNew: false,
    category: "Îmbrăcăminte",
  },
  {
    id: 7,
    name: "Tricou cropt antrenament",
    price: 139.99,
    rating: 4.4,
    image: "/img/Tricou-cropt.jpg",
    isNew: true,
    category: "Îmbrăcăminte",
  },
  {
    id: 8,
    name: "Set trening femei",
    price: 349.99,
    rating: 4.7,
    image: "/img/Set-trening femei.jpg",
    isNew: false,
    category: "Îmbrăcăminte",
  },

  // Încălțăminte bărbați
  {
    id: 9,
    name: "Adidași running UltraBoost",
    price: 799.99,
    rating: 4.9,
    image: "/img/runningultra.jpg",
    isNew: true,
    category: "Încălțăminte",
  },
  {
    id: 10,
    name: "Pantofi cross-training",
    price: 649.99,
    rating: 4.6,
    image: "/img/pantoficross.jpg",
    isNew: false,
    category: "Încălțăminte",
  },

  // Încălțăminte femei
  {
    id: 11,
    name: "Pantofi running pentru femei",
    price: 729.99,
    rating: 4.8,
    image: "/img/pantofiruningfemei.jpg",
    isNew: true,
    category: "Încălțăminte",
  },
  {
    id: 12,
    name: "Adidași studio dans",
    price: 589.99,
    rating: 4.5,
    image: "/img/adidasistudiodance.jpg",
    isNew: false,
    category: "Încălțăminte",
  },

  // Accesorii
  {
    id: 13,
    name: "Bandă de antrenament elastică",
    price: 89.99,
    rating: 4.2,
    image: "/img/bandaelastica.jpg",
    isNew: true,
    category: "Accesorii",
  },
  {
    id: 14,
    name: "Set greutăți pentru mâini",
    price: 199.99,
    rating: 4.6,
    image: "/img/Setmaini.jpg",
    isNew: false,
    category: "Accesorii",
  },
  {
    id: 15,
    name: "Yoga mat premium",
    price: 159.99,
    rating: 4.7,
    image: "/img/Yogamatpremium.jpg",
    isNew: true,
    category: "Accesorii",
  },
  {
    id: 16,
    name: "Smartwatch fitness tracker",
    price: 899.99,
    rating: 4.8,
    image: "/img/Smartwatchfitnesstracker.jpg",
    isNew: false,
    category: "Accesorii",
  },
  {
    id: 17,
    name: "Rucsac hidratare antrenament",
    price: 249.99,
    rating: 4.4,
    image: "/img/Rucsac.jpg",
    isNew: true,
    category: "Accesorii",
  },
  {
    id: 18,
    name: "Curele de tractiune",
    price: 129.99,
    rating: 4.3,
    image: "/img/Cureadetractiune.jpeg",
    isNew: false,
    category: "Accesorii",
  },

  // Suplimente
  {
    id: 19,
    name: "Proteine whey isolate",
    price: 299.99,
    rating: 4.9,
    image: "/img/Proteineisolate.jpeg",
    isNew: true,
    category: "Suplimente",
  },
  {
    id: 20,
    name: "BCAA aminoacizi esențiali",
    price: 179.99,
    rating: 4.7,
    image: "/img/BCAA.jpg",
    isNew: false,
    category: "Suplimente",
  },

  // Echipament
  {
    id: 21,
    name: "Bară pentru tracțiuni",
    price: 349.99,
    rating: 4.5,
    image: "/img/Barapentrutractiuni.jpg",
    isNew: true,
    category: "Echipament",
  },
  {
    id: 22,
    name: "Set benzi de rezistență",
    price: 229.99,
    rating: 4.6,
    image: "/img/resistance-bands.jpg",
    isNew: false,
    category: "Echipament",
  },
  {
    id: 23,
    name: "Kettlebell ajustabil",
    price: 499.99,
    rating: 4.8,
    image: "/img/Kettlebellajustabil.jpg",
    isNew: true,
    category: "Echipament",
  },
  {
    id: 24,
    name: "Rolă pentru masaj",
    price: 159.99,
    rating: 4.4,
    image: "/img/foam-roller.jpg",
    isNew: false,
    category: "Echipament",
  },

  // Accesorii fitness
  {
    id: 25,
    name: "Cântar inteligent",
    price: 399.99,
    rating: 4.7,
    image: "/img/smart-scale.jpg",
    isNew: true,
    category: "Accesorii",
  },
  {
    id: 26,
    name: "Curele de antrenament",
    price: 119.99,
    rating: 4.3,
    image: "/img/workout-straps.jpg",
    isNew: false,
    category: "Accesorii",
  },
  {
    id: 27,
    name: "Manșete greutate",
    price: 179.99,
    rating: 4.5,
    image: "/img/weight-cuffs.jpg",
    isNew: true,
    category: "Accesorii",
  },
  {
    id: 28,
    name: "Set bandaje antrenament",
    price: 89.99,
    rating: 4.2,
    image: "/img/wrist-wraps.jpg",
    isNew: false,
    category: "Accesorii",
  },
  {
    id: 29,
    name: "Curea de ridicat greutăți",
    price: 249.99,
    rating: 4.6,
    image: "/img/weight-belt.jpg",
    isNew: true,
    category: "Accesorii",
  },
  {
    id: 30,
    name: "Set discuri pentru haltere",
    price: 599.99,
    rating: 4.7,
    image: "/img/weight-plates.jpg",
    isNew: false,
    category: "Echipament",
  },
  {
    id: 31,
    name: "Tricou de antrenament respirant",
    price: 189.99,
    rating: 4.7,
    image: "/img/men-shirt12.jpg",
    isNew: true,
    category: "Îmbrăcăminte",
  },
  {
    id: 32,
    name: "Pantaloni sport cu compresie",
    price: 279.99,
    rating: 4.5,
    image: "/img/men-pants.jpg",
    isNew: false,
    category: "Îmbrăcăminte",
  },
  {
    id: 33,
    name: "Geacă antrenament cu glugă",
    price: 449.99,
    rating: 4.3,
    image: "/img/men-jacket.jpg",
    isNew: true,
    category: "Îmbrăcăminte",
  },
  {
    id: 34,
    name: "Set trening scurt",
    price: 329.99,
    rating: 4.6,
    image: "/img/men-set.jpg",
    isNew: false,
    category: "Îmbrăcăminte",
  },

];

function App() {
  return (

    <Router>
      <div className="font-sans">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <Featured />
              </>
            }
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/acasa" element={<Acasa />} />
          <Route path="/despre-noi" element={<Desprenoi />} />
          <Route path="/shop" element={<Shop products={productData} />} />
          <Route path="/product/:id" element={<ProductDetail products={productData} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>

  )
}

export default App