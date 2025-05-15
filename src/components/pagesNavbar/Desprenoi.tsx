import { FaHeartbeat, FaDumbbell, FaAppleAlt, FaShieldAlt, FaTruck, FaExchangeAlt, FaPercent, FaUser } from "react-icons/fa";
import { Check, Shirt, Zap, Award, HeartPulse, Shield } from "lucide-react";

const brandLogos = [
    { name: "Levi's", src: "/img/brand_01.png" },
    { name: "Adidas", src: "/img/brand_02.png" },
    { name: "Nike", src: "/img/brand_03.png" },
    { name: "H&M", src: "/img/brand_04.png" },
    { name: "gucci", src: "/img/gucci.png" },
    { name: "luisvuiton", src: "/img/luisvuiton.svg" },
    { name: "versace", src: "/img/versace-medusa.svg" },
    { name: "omega", src: "/img/Omega_Logo.svg.png" },
    { name: "cartier", src: "/img/cartier.png" },
    { name: "DIor", src: "/img/Dior_Logo.svg.png" },
    { name: "prada", src: "/img/prada.png" },
];




const DespreNoi = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            <section className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-2">
                    <HeartPulse className="text-pink-500" /> Introducere
                </h2>
                <p className="text-lg">
                    La Fit cu Stil, credem că sportul nu este doar o activitate fizică, ci un mod de viață.
                </p>
            </section>

            <section className="bg-blue-50 p-6 rounded-xl mb-10 border-l-4 border-blue-300">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="text-blue-500" /> Misiunea Noastră
                </h2>
                <blockquote className="text-lg">
                    "Oferim produse sportive care combină confortul, funcționalitatea și designul modern."
                </blockquote>
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="text-yellow-500" /> De ce să alegi Fit cu Stil?
                </h3>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-white p-5 rounded-lg shadow-sm border flex items-start gap-3 hover:shadow-md transition-shadow">
                        <div className="bg-green-100 p-2 rounded-full">
                            <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="text-center">
                            <h4 className="font-bold">Produse testate</h4>
                            <p className="text-sm text-gray-600">Verificate de sportivi profesioniști</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm border flex items-start gap-3 hover:shadow-md transition-shadow">
                        <div className="bg-purple-100 p-2 rounded-full">
                            <Shirt className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                            <h4 className="font-bold">Design modern</h4>
                            <p className="text-sm text-gray-600">Pentru un look impecabil</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm border flex items-start gap-3 hover:shadow-md transition-shadow">
                        <div className="bg-blue-100 p-2 rounded-full">
                            <Shield className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-bold">Suport dedicat</h4>
                            <p className="text-sm text-gray-600">Asistență rapidă 24/7</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-12 bg-gray-50 text-black py-12 px-4 rounded-lg">
                <div className="text-center mb-12">
                    <h2><p className="text-emerald-500 text-2xl uppercase font-semibold">De ce merită să faci parte din lumea noastră</p></h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">

                    <div className="flex-shrink-0">
                        <img
                            src="/img/happymen&women.jpg"
                            alt="Happy people"
                            className="rounded-full w-86 h-120 object-cover border-4 border-orange-500"
                        />
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-gray-200 p-4 rounded-full mb-3">
                                <FaHeartbeat className="text-orange-500 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">PROGRES</h3>
                            <p className="text-sm text-gray-400">
                                „Fiecare pas contează”
                                <br></br>
                                Programe adaptate ritmului tău biologic, cu monitorizare 3D a mișcării.
                                <br></br>
                                Tehnologii biofeedback care optimizează performanța.
                                <br></br>
                                Rezultate măsurabile în 21 de zile, cu certificare de progres.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-gray-200 p-4 rounded-full mb-3">
                                <FaDumbbell className="text-orange-500 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">ANTRENAMENT</h3>
                            <p className="text-sm text-gray-400">


                                „Redescoperă puterea din tine”
                                <br></br>
                                Antrenamente HIIT & pilates fusion, combinate cu terapie prin sunet.
                                Echipamente ergonomice importate din Elveția, pentru o experiență fără efort.
                                Sesuni de reîncărcare energetică cu aromaterpie și luminoterapie.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-gray-200 p-4 rounded-full mb-3">
                                <FaAppleAlt className="text-orange-500 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">NUTRIȚIE</h3>
                            <p className="text-sm text-gray-400">

                                „Tu ești ceea ce mănânci”
                                <br></br>
                                Planuri alimentare ADN-compatibile (opțional, cu teste genetice).
                                Superfood-uri cultivate organic în parteneriate locale.
                                Workshop-uri lunare cu chef Michelin pentru preparate fitness gourmet.

                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-gray-200 p-4 rounded-full mb-3">
                                <FaShieldAlt className="text-orange-500 text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">AUTOAPĂRARE</h3>
                            <p className="text-sm text-gray-400">


                                „Încrederea este armura noastră”
                                <br></br>
                                Cursuri de krav maga adaptate stilului de viață urban.
                                Tehnici de management al stresului în colaborare cu psihologi sportivi.
                                Asigurare medicală dedicată pentru orice accident în timpul antrenamentelor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white text-gray-800 text-center px-4">
                <h2 className="text-4xl font-bold mb-4">Serviciile Noastre</h2>
                <p className="mb-12 max-w-2xl mx-auto text-gray-600">
                    La Fit cu Stil, ne dedicăm să-ți oferim o experiență de shopping fără stres – de la livrare rapidă și retururi ușoare, până la oferte exclusive și asistență 24/7. Totul ca tu să fii mereu în formă, cu stil.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <div className="bg-white text-gray-800 p-6 rounded-md shadow-lg flex flex-col items-center border transition-colors duration-300 hover:bg-green-500 hover:text-white cursor-pointer">
                        <FaTruck className="text-4xl mb-4" />
                        <h3 className="font-semibold text-lg">Servicii de Livrare</h3>
                    </div>

                    <div className="bg-white text-gray-800 p-6 rounded-md shadow-lg flex flex-col items-center border transition-colors duration-300 hover:bg-green-500 hover:text-white cursor-pointer">
                        <FaExchangeAlt className="text-4xl mb-4" />
                        <h3 className="font-semibold text-lg">Livrare & Retur</h3>
                    </div>

                    <div className="bg-white text-gray-800 p-6 rounded-md shadow-lg flex flex-col items-center border transition-colors duration-300 hover:bg-green-500 hover:text-white cursor-pointer">
                        <FaPercent className="text-4xl mb-4" />
                        <h3 className="font-semibold text-lg">Promoții</h3>
                    </div>

                    <div className="bg-white text-gray-800 p-6 rounded-md shadow-lg flex flex-col items-center border transition-colors duration-300 hover:bg-green-500 hover:text-white cursor-pointer">
                        <FaUser className="text-4xl mb-4" />
                        <h3 className="font-semibold text-lg">Serviciu 24/7</h3>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16 text-center px-4">
                <h2 className="text-4xl font-bold mb-4">Brandurile noastre</h2>
                <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                    Colaborăm cu cele mai de încredere branduri din domeniul sportului și modei pentru a-ți oferi produse de calitate, stil și performanță. Fiecare brand este ales cu grijă pentru a-ți completa stilul activ și modern.
                </p>

                <div className="relative">


                    <div

                        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-10"
                    >
                        {brandLogos.map((brand, index) => (
                            <div key={index} className="flex-shrink-0">
                                <div className="rounded-full w-36 h-36 bg-white flex items-center justify-center shadow-md hover:bg-green-500 transition duration-300 cursor-pointer">
                                    <img
                                        src={brand.src}
                                        alt={brand.name}
                                        className="w-20 grayscale hover:grayscale-0 transition duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

        </div>
    );
};

export default DespreNoi;