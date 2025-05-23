import type React from "react"
import { FiShoppingCart, FiHeart, FiSearch, FiStar } from "react-icons/fi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import type { Product as Product2, ProductImage } from "../../models/product.model";
import type { PagedResult } from "../../models/paged-result.model";

interface Product {
    id: number
    name: string
    price: number
    rating: number
    image: string
    isNew?: boolean
    category?: string
}

interface CartItem extends Product {
    quantity: number
}

interface ShopProps {
    products: Product[]
    addToCart?: (product: Product) => void
}

const Shop = ({ addToCart }: ShopProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [cart, setCart] = useState<CartItem[]>([])
    const [products, setProducts] = useState<Product2[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handleAddToCart = (product: Product2, e: React.MouseEvent) => {
        e.preventDefault()

        console.log(product);
        /*if (addToCart) {
            //addToCart(product)
            return
        }

        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id)

            if (existingItem) {
                return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })*/
    }

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

    useEffect(() => {
        async function fetchProducts(page: number, pageSize: number): Promise<PagedResult<Product2>> {
            const response = await fetch(`http://localhost:8000/api/v1/products?page=${page}&pageSize=${pageSize}`);
            var data = await response.json();

            return ({
                page: data.page,
                pageSize: data.pageSize,
                pageCount: data.pageCount,
                rowCount: data.rowCount,
                results: data.results.map((product: any) => ({
                    id: product.id,
                    name: product.name,
                    rating: product.rating,
                    price: product.variants[0].price,
                    image: product.images.find((image: ProductImage) => image.isMain),
                    createdAt: new Date(product.createdAt)
                } as Product2))
            } as PagedResult<Product2>)
        }

        async function getProducts(page: number, pageSize: number): Promise<void> {
            const result = await fetchProducts(page, pageSize);

            setProducts(result.results);
            setTotalPages(result.pageCount);
        }

        getProducts(currentPage, 10);
        //TODO: scroll to top
    }, [currentPage]);

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
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
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
                    {products.map((product) => (
                        <Link
                            to={`/product/${product.id}`}
                            key={product.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="relative">
                                <img
                                    src={product.image.url || "/placeholder.svg"}
                                    alt={product.image.description}
                                    className="w-full h-60 object-cover"
                                />
                                {true && (
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
                                <button
                                    className="w-full mt-4 bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center"
                                    onClick={(e) => handleAddToCart(product, e)}
                                >
                                    <FiShoppingCart className="mr-2" />
                                    Adaugă în coș
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center">
                <nav className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
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
