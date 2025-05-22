

import { useParams, Link } from "react-router-dom"
import { FiShoppingCart, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useState } from "react"

interface Product {
    id: number
    name: string
    price: number
    rating: number
    image: string
    isNew?: boolean
    category?: string
}

interface ProductDetailProps {
    products: Product[]
}

const ProductDetail = ({ products }: ProductDetailProps) => {
    const { id } = useParams<{ id: string }>()
    const product = products.find((p) => p.id === Number(id))

    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState("M")
    const [activeImage, setActiveImage] = useState(0)

    // Simulăm mai multe imagini pentru produs
    const productImages = [
        product?.image,
        "/placeholder.svg?height=600&width=600",
        "/placeholder1.svg?height=600&width=600",
        "/placeholder2.svg?height=600&width=600",
    ]

    // Găsim produse similare pentru secțiunea "Related Products"
    const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4)

    if (!product) {
        return <div className="text-center py-20">Produsul nu a fost găsit</div>
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    return (
        <div className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                        <Link to="/shop" className="hover:text-emerald-600">
                            Catalog produse
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700">{product.name}</span>
                    </div>
                </div>

                {/* Product Detail */}
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Product Images - Left Side */}
                        <div className="md:w-1/2 space-y-4">
                            <div className="relative overflow-hidden rounded-lg border">
                                <img
                                    src={productImages[activeImage] || "/placeholder.svg?height=600&width=600"}
                                    alt={product.name}
                                    className="w-full h-[500px] object-cover"
                                />

                                {/* Navigation arrows */}
                                <button
                                    onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : productImages.length - 1))}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                                >
                                    <FiChevronLeft className="text-gray-800" />
                                </button>
                                <button
                                    onClick={() => setActiveImage((prev) => (prev < productImages.length - 1 ? prev + 1 : 0))}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                                >
                                    <FiChevronRight className="text-gray-800" />
                                </button>
                            </div>

                            {/* Thumbnails */}
                            <div className="flex space-x-2 overflow-x-auto">
                                {productImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`border rounded-md overflow-hidden flex-shrink-0 ${activeImage === index ? "border-emerald-500" : "border-gray-200"
                                            }`}
                                    >
                                        <img
                                            src={img || "/placeholder.svg?height=100&width=100"}
                                            alt={`${product.name} thumbnail ${index + 1}`}
                                            className="w-20 h-20 object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info - Right Side */}
                        <div className="md:w-1/2 space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                                <div className="mt-2 flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"
                                                }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-gray-600">Rating {product.rating.toFixed(1)} | 36 Comentarii</span>
                                </div>
                                <div className="mt-4 text-3xl font-bold text-emerald-700">{product.price.toFixed(2)} Mdl</div>
                            </div>

                            <div className="border-t border-b py-4">
                                <div className="flex items-center mb-4">
                                    <span className="font-medium w-32">Brand:</span>
                                    <span className="text-gray-600">Easy Wear</span>
                                </div>

                                <div className="mb-4">
                                    <span className="font-medium">Descriere:</span>
                                    <p className="mt-2 text-gray-600">
                                        Produs de înaltă calitate, perfect pentru activități sportive și fitness. Material respirabil și
                                        confortabil, design modern.
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <h2 className="text-left px-4 py-4 "> Culori disponibile: </h2>
                                    <br></br>
                                    <button className="w-16  bg-gray-100 hover:bg-gray-200 text-black rounded-md  transition-colors">
                                        Black
                                    </button>
                                    <button className="w-16 bg-gray-100 hover:bg-gray-200 text-black rounded-md  transition-colors">
                                        White
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Specificații</h3>
                                    <div className="flex items-center">
                                        <span className="mr-4">Size:</span>
                                        <div className="flex space-x-2">
                                            {["S", "M", "L", "XL"].map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`w-10 h-10 flex items-center justify-center rounded-md ${selectedSize === size
                                                        ? "bg-emerald-600 text-white"
                                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <span className="mr-4">Cantitate:</span>
                                    <div className="flex items-center">
                                        <button
                                            onClick={decreaseQuantity}
                                            className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-200"
                                        >
                                            -
                                        </button>
                                        <span className="w-10 text-center">{quantity}</span>
                                        <button
                                            onClick={increaseQuantity}
                                            className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-200"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center">
                                        <FiShoppingCart className="mr-2" />
                                        Adaugă în coș
                                    </button>
                                    <button className="w-full bg-emerald-600 text-white py-1 px-6 rounded-md hover:bg-emerald-700 transition-colors">
                                        Cumpără acum
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Produse similare</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <Link
                                to={`/product/${relatedProduct.id}`}
                                key={relatedProduct.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="relative">
                                    <img
                                        src={relatedProduct.image || "/placeholder.svg?height=300&width=300"}
                                        alt={relatedProduct.name}
                                        className="w-full h-60 object-cover"
                                    />
                                    {relatedProduct.isNew && (
                                        <span className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
                                            NOU
                                        </span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-medium text-gray-900">{relatedProduct.name}</h3>
                                        <div className="flex items-center">
                                            <svg
                                                className="w-4 h-4 text-yellow-400 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <span className="ml-1 text-sm text-gray-600">{relatedProduct.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-lg font-bold text-emerald-800 mt-2">{relatedProduct.price.toFixed(2)} Mdl</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
