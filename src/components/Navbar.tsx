
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-md top-0 z-50">
            <div className="flex items-center gap-2">
                <span className="font-bold text-5xl text-emerald-700">Fit cu Stil</span>
            </div>
            <ul className="hidden md:flex gap-8 text-black-800 px-2 py-2 font-medium">
                <li><a href="#">Acasă</a></li>
                <li><a href="#">Despre noi</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="flex flex-row gap-4">
                <button className="bg-gray-100 hover:bg-gray-300 text-black px-8 py-2 rounded">Sign In</button>
                <button className="bg-emerald-600 hover:bg-emerald-800 text-white px-8 py-2 rounded ">Log In</button>
            </div>


        </nav>
    );
};


export default Navbar;