import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="max-w-screen bg-gradient-to-r from-emerald-100 via-red-100 to-blue-100">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h3 className="text-3xl text-left font-bold mb-6">Fit cu Stil</h3>
                <hr className="border-gray-300 my-6" />


                <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-16">

                    <div className="text-center md:w-1/4">
                        <h4 className="font-semibold text-lg mb-4">Contact</h4>
                        <div className="space-y-3 flex flex-col justify-baseline">

                            <div className="flex items-start justify-baseline gap-3">
                                <FaMapMarkerAlt className="mt-1 text-gray-600 flex-shrink-0" />
                                <p className="text-left">str. Nicolae Dimo 21/1, sect. Ciocana, Chișinău</p>
                            </div>


                            <div className="flex items-center justify-baseline gap-3">
                                <FaPhone className="text-gray-600 flex-shrink-0" />
                                <p>060945543</p>
                            </div>


                            <div className="flex items-center justify-baseline gap-3">
                                <FaEnvelope className="text-gray-600 flex-shrink-0" />
                                <p>infosportshop@company.md</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left md:w-1/4">
                        <h4 className="font-semibold text-lg mb-4 text-center">Produse</h4>
                        <ul className="space-y-3 pl-9">
                            <li>Lux</li>
                            <li>Îmbrăcăminte sport</li>
                            <li>Încălțăminte bărbați</li>
                            <li>Încălțăminte femei</li>
                            <li>Ținute populare</li>
                            <li>Accesorii pentru sală</li>
                            <li>Încălțăminte sport</li>
                        </ul>
                    </div>

                    <div className="text-left md:w-1/3">
                        <h4 className="font-semibold text-lg mb-4 text-center">Informații</h4>
                        <ul className="space-y-3 pl-9">
                            <li>Acasă</li>
                            <li>Despre noi</li>
                            <li>Locații magazine</li>
                            <li>Întrebări frecvente</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-300 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-6">
                        <FaFacebookF className="text-xl" />
                        <FaInstagram className="text-xl" />
                        <FaTwitter className="text-xl" />
                        <FaLinkedin className="text-xl" />
                    </div>

                    <div className="flex w-full md:w-96">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 px-4 py-2 rounded-l text-gray-900 border border-gray-300"
                        />
                        <button className="bg-gray-200 hover:bg-blue-50 text-black px-4 py-2 rounded-r">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="mt-8 pt-4 text-center">
                    <p>Copyright © 2025 Company Name | Designed by Sport Company</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;