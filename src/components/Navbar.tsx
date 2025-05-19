import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline';



function Navbar() {

    return (
        <>

            <nav className="flex justify-between items-center p-4  bg-white shadow-md">
                <div className="flex items-start space-x-2 pl-28">
                    <img
                        src="/img/logo.png"
                        alt="Pantofi sport T-Mork"
                        className="w-16 h-14 rounded-lg pl-1" />

                    <span className="font-bold text-5xl text-emerald-700 mr-4"> Fit cu Stil</span>
                </div>



                <div className="flex justify-between space-x-10">
                    <Link to="/" className="font-bold hover:text-emerald-500">Acasă</Link>
                    <Link to="/despre-noi" className="hover:text-emerald-500">Despre noi</Link>
                    <Link to="/shop" className="hover:text-emerald-500">Shop</Link>
                    <Link to="/contact" className="hover:text-emerald-500">Contact</Link>
                </div>

                <div className="flex space-x-4 mr-8">
                    <span className="h-8 w-px bg-gray-300 ml-22"></span>
                    <Link to="/dashboard" className="flex items-center space-x-1 hover:text-blue-500">
                        <UserIcon className="w-5 h-5" />
                    </Link>

                    <Link to="/signin" className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300  ">Sign In</Link>
                    <Link to="/login" className="px-3 py-1 border border-emerald-600 text-black rounded-lg hover:bg-green-50 transition-colors duration-300  ">Log In</Link>

                </div>





            </nav>


        </>
    );
}

export default Navbar;