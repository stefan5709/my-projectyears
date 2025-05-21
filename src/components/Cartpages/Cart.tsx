import { FaStar, FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

type CardProps = {
    id: number;
    image: string;
    title: string;
    size: string;
    price: string;
};

function Card(props: CardProps) {
    return (
        <div className="bg-white shadow-md overflow-hidden w-full max-w-xs border border-gray-200 group">
            <div className="relative w-full h-fit overflow-hidden group">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-full h-full object-cover group-hover:opacity-50"
                />

                {/* Overlay icons */}
                <div className="absolute inset-0  group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex flex-col gap-2">
                        <button className="bg-[#59ab6e] p-2 rounded">
                            <FaHeart className="text-white" />
                        </button>
                        <button className="bg-[#59ab6e] p-2 rounded">
                            <Link to="/shopsingle">
                                <FaEye className="text-white" />
                            </Link>
                        </button>
                        <button className="bg-[#59ab6e] p-2 rounded">
                            <FaShoppingCart className="text-white" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-md text-gray-800 ">{props.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{props.size}</p>

                <div className="flex justify-center items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            className={`h-4 w-4 mr-1 ${star <= 3 ? "text-yellow-400" : "text-gray-300"}`}
                        />
                    ))}
                </div>

                <p className="text-lg text-gray-800 text-center">{props.price}</p>
            </div>
        </div>
    );
}

export default Card;