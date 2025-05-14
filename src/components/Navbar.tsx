import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex space-x-6">
                <Link to="/" className="font-bold hover:text-blue-500">Acasă</Link>
                <Link to="/despre-noi" className="hover:text-blue-500">Despre noi</Link>
                <Link to="/shop" className="hover:text-blue-500">Shop</Link>
                <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </div>
            <div>
                <Link to="/signin" className="mr-4 hover:text-gray-300">Sign In</Link>
                <Link to="/login" className="hover:text-emerald-500">Log In</Link>
            </div>
        </nav>
    );
}

export default Navbar;