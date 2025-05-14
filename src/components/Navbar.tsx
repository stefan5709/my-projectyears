import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="w-auto"></div>
            <span className="font-bold text-4xl text-emerald-700">Fit cu Stil</span>

            <div className="flex space-x-6">
                <Link to="/" className="font-bold hover:text-blue-500">Acasă</Link>
                <Link to="/despre-noi" className="hover:text-blue-500">Despre noi</Link>
                <Link to="/shop" className="hover:text-blue-500">Shop</Link>
                <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </div>
            <span className="h-8 w-px bg-gray-300 mx-2"></span>
            <div className="flex space-x-4">
                <Link to="/signin" className="text-sm font-medium hover:text-emerald-600 px-2 py-1">Sign In</Link>
                <Link to="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-3 py-1 rounded">Log In</Link>
            </div>

        </nav>
    );
}

export default Navbar;