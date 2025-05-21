

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FiHeart, FiEye, FiShoppingCart } from "react-icons/fi"

const productData = [
    {
        id: 1,
        name: "Active Wear",
        price: 25.0,
        rating: 4.8,
        comments: 36,
        brand: "Easy Wear",
        colors: ["White", "Black"],
        sizes: ["S", "M", "L", "XL"],
        image: "/img/shop_08.jpg",
        isNew: true,
    },

]

const relatedProducts = [
    {
        id: 101,
        name: "Red Clothing",
        price: 20.0,
        rating: 4,
        sizes: ["M", "L", "X", "XL"],
        image: "/img/women.jpg",
    },
    {
        id: 102,
        name: "White Shirt",
        price: 25.0,
        rating: 3,
        sizes: ["M", "L", "X", "XL"],
        image: "/img/women-top.png",
    },
    {
        id: 103,
        name: "Qupidatat non",
        price: 45.0,
        rating: 5,
        sizes: ["M", "L", "X", "XL"],
        image: "/img/legins-yoga.jpg",
    },
    {
        id: 104,
        name: "Black Fashion",
        price: 60.0,
        rating: 3,
        sizes: ["M", "L", "X", "XL"],
        image: "/img/woman-clothes.jpg",
    },



]

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<any>(null)
    const [selectedSize, setSelectedSize] = useState("M")
    const [quantity, setQuantity] = useState(1)
    const [activeSlide, setActiveSlide] = useState(0)



    const productImages = ["/img/shop_08.jpg", "/img/women.jpg", "/img/Tricou-cropt.jpg", "/img/Set-trening femei.jpg"]

    useEffect(() => {

        const foundProduct = productData.find((p) => p.id === Number.parseInt(id || "0"))
        setProduct(foundProduct || productData[0])
    }, [id])

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Se încarcă produsul...</h2>
                </div>
            </div>
        )
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const renderStars = (rating: number) => {
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={star <= rating ? "text-yellow-400" : "text-gray-300"}>
                        ★
                    </span>
                ))}
            </div>
        )
    }

    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Product Section */}
                <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Left side - Product Images */}
                    <div className="md:w-1/2">
                        <div className="relative">
                            <img
                                src={productImages[activeSlide] || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-auto object-cover"
                            />
                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                                onClick={() => setActiveSlide((activeSlide - 1 + productImages.length) % productImages.length)}
                            >
                                &lt;
                            </button>
                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                                onClick={() => setActiveSlide((activeSlide + 1) % productImages.length)}
                            >
                                &gt;
                            </button>
                        </div>
                        <div className="flex justify-center mt-4 gap-2">
                            {productImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`w-16 h-16 border-2 cursor-pointer ${activeSlide === index ? "border-green-500" : "border-gray-200"}`}
                                    onClick={() => setActiveSlide(index)}
                                >
                                    <img
                                        src={img || "/placeholder.svg"}
                                        alt={`Thumbnail ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Product Info */}
                    <div className="md:w-1/2 p-6">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                            <p className="text-2xl font-bold text-gray-800 mt-2">${product.price.toFixed(2)}</p>

                            <div className="flex items-center mt-2">
                                {renderStars(product.rating)}
                                <span className="ml-2 text-gray-600">
                                    Rating {product.rating} | {product.comments || 36} Comments
                                </span>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center">
                                    <span className="font-semibold text-gray-700 w-32">Brand:</span>
                                    <span className="text-gray-600">{product.brand || "Easy Wear"}</span>
                                </div>

                                <div className="mt-4">
                                    <span className="font-semibold text-gray-700">Descriere</span>
                                </div>

                                <div className="flex items-center mt-4">
                                    <span className="font-semibold text-gray-700 w-32">Culori disponibile:</span>
                                    <span className="text-gray-600">{(product.colors || ["White", "Black"]).join(" / ")}</span>
                                </div>

                                <div className="mt-6">
                                    <span className="font-semibold text-gray-700">Specificații</span>
                                </div>

                                <div className="flex items-center mt-4">
                                    <span className="font-semibold text-gray-700 w-32">Size:</span>
                                    <div className="flex gap-2">
                                        {(product.sizes || ["S", "M", "L", "XL"]).map((size: string) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`w-10 h-10 flex items-center justify-center rounded-md ${selectedSize === size
                                                    ? "bg-green-500 text-white"
                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <span className="font-semibold text-gray-700 w-32">Cantitate:</span>
                                    <div className="flex">
                                        <button
                                            onClick={decreaseQuantity}
                                            className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-md"
                                        >
                                            -
                                        </button>
                                        <span className="w-10 h-10 flex items-center justify-center bg-white">{quantity}</span>
                                        <button
                                            onClick={increaseQuantity}
                                            className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-md"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button className="w-full mt-6 bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors">
                                    Cumpără acum
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                                        <button className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-md">
                                            <FiHeart />
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-md">
                                            <FiEye />
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-md">
                                            <FiShoppingCart />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                                    <p className="text-gray-600 text-sm">{product.sizes.join("/")}</p>
                                    <div className="flex mt-1">{renderStars(product.rating)}</div>
                                    <p className="text-lg font-bold text-gray-800 mt-2">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </div>
    )
}

export default ProductDetail
