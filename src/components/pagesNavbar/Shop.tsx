

import { FiShoppingCart, FiHeart, FiSearch, FiStar } from "react-icons/fi"
import { useState } from "react"

const Shop = () => {
    // State for current page
    const [currentPage, setCurrentPage] = useState(1)

    // Products per page
    const productsPerPage = 12

    // Produse
    const products = [
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
    ]

    // numere totale de pagin
    const totalPages = Math.ceil(products.length / productsPerPage)


    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)


    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-green-900">Catalog produse</h2>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Caută produse..."
                                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        <button className="p-2 text-gray-600 hover:text-green-600">
                            <FiHeart className="text-xl" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-green-600 relative">
                            <FiShoppingCart className="text-xl" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold mb-4 md:mb-0">
                        Toate produsele{" "}
                        <span className="text-gray-500 text-sm ml-2">
                            (Pagina {currentPage} din {totalPages}, {products.length} produse)
                        </span>
                    </h2>
                    <div className="flex space-x-4">
                        <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                            <option>Sortează după</option>
                            <option>Preț crescător</option>
                            <option>Preț descrescător</option>
                            <option>Cele mai noi</option>
                            <option>Rating</option>
                        </select>
                        <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                            <option>Toate categoriile</option>
                            <option>Îmbrăcăminte</option>
                            <option>Încălțăminte</option>
                            <option>Accesorii</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="relative">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-60 object-cover"
                                />
                                {product.isNew && (
                                    <span className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
                                        NOU
                                    </span>
                                )}

                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                                    <div className="flex items-center">
                                        <FiStar className="text-yellow-400" />
                                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                                    </div>
                                </div>
                                <p className="text-lg font-bold text-emerald-800 mt-2">{product.price.toFixed(2)} Mdl</p>
                                <button className="w-full mt-4 bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center">
                                    <FiShoppingCart className="mr-2" />
                                    Adaugă în coș
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center">
                <nav className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`px-3 py-1 border rounded-md ${currentPage === i + 1 ? "text-white bg-emerald-600 border-emerald-600" : "hover:bg-gray-100"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
                            }`}
                    >
                        →
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Shop
