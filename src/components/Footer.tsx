import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="max-w-screen bg-gradient-to-r from-emerald-100 via-red-100 to-blue-100">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

                {/* coloana 1 */}

                <div>
                    <h3 className="text-2xl font-bold mb-4">Fit cu Stil</h3>
                    <p className="mb-2">str. Nicolae Dimo 21/1, sect. Ciocana, Chișinău</p>
                    <p className="mb-2">060945543</p>
                    <p>infosportshop@company.md</p>
                </div>

                {/* coloana 2*/}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Produse</h4>
                    <ul className="space-y-2">
                        <li>Lux</li>
                        <li>Îmbrăcăminte sport</li>
                        <li>Încălțăminte bărbați</li>
                        <li>Încălțăminte femei</li>
                        <li>Accesorii pentru sală</li>
                        <li>Încălțăminte sport</li>
                    </ul>
                </div>

                {/* coloana 3 */}
                <div>
                    <h4 className="font-semibold text-lg mb-4">Informații suplimentare</h4>
                    <ul className="space-y-2">
                        <li>Acasă</li>
                        <li>Despre noi</li>
                        <li>Locații magazine</li>
                        <li>Întrebări frecvente</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* coloana 4 */}
                <div>
                    <div className="flex gap-4 mb-6">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-2 rounded text-gray-900"
                        />
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="mt-6 pt-4 border-gray-700">
                <p>Copyright © 2025 Company Name | Designed by Sport Company</p>
            </div>
        </footer>
    );
};

export default Footer;