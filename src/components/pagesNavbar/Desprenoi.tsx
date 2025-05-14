const DespreNoi = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8 max-w-screen">

                <div className="md:w-1/2 ">
                    <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
                        {/* Text pe partea stângă */}
                        <div className="md:w-auto ">
                            <h2 className="text-2xl font-semibold mb-4">1. Scurtă Introducere</h2>
                            <p className="text-lg italic py-4">
                                La Fit cu Stil, credem că sportul nu este doar o activitate fizică, ci un mod de viaţă. Am creat acest magazin online pentru a inspira oamenii să se simtă bine în pielea lor, să fie activi şi... să o facă cu stil!
                            </p>
                        </div>

                        {/* Imagine pe partea dreaptă */}
                        <div className="md:w-auto">
                            <img
                                src="/img/poza1.jpg"
                                alt="Fit cu Stil - sport și stil"
                                className="w-full h-auto rounded-lg shadow-xl"
                            />
                        </div>
                    </section>

                    <section className="mb-12 p-6">
                        <h2 className="text-2xl font-semibold mb-4">2. Misiunea Noastră</h2>
                        <p className="text-lg py-4 italic  pl-2  ">
                            "Misiunea noastră este să oferim produse sportive de calitate, care combină confortul, funcţionalitatea şi designul modern. Fiecare articol din colecţia noastră este ales cu grijă pentru a te susţine în drumul tău spre o viaţă mai sănătoasă."
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">3. De ce să alegi Fit cu Stil?</h2>
                        <ul className="space-y-3 text-lg">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Produse testate şi recomandate de sportivi</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Design modern şi atrăgător</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Livrare rapidă & suport client dedicat</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <section className="mb-12">
                <h2 className="text-4xl font-bold mb-6">Serviciile Noastre</h2>
                <p className="text-lg mb-8">
                    La Fit cu Stil, ne dedicăm să-ți oferim o experiență de shopping fără stres – de la livrare rapidă și returnări ușoare, până la oferte exclusive și asistență 24/7. Totul ca tu să fii mereu în formă, cu stil.
                </p>

                <div className="border-b-2 border-gray-200 mb-8"></div>

                <h2 className="text-xl font-semibold mb-4">Servicii de Livrare</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Livrare & Retur</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Promoții</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Serviciu 24/7</h3>
                    </div>
                </div>
            </section>


            <section>
                <h2 className="text-4xl font-bold mb-6">Brandurile noastre</h2>
                <p className="text-lg mb-8">
                    Colaborăm cu cele mai de încredere branduri din domeniul sportului și modei pentru a-ți oferi produse de calitate, stil și performanță. Fiecare brand este ales cu grijă pentru a-ți completa stilul activ și modern.
                </p>

                <div className="border-b-2 border-gray-200 mb-8"></div>

                <div className="flex flex-wrap gap-4">
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h3 className="font-medium">Levis</h3>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default DespreNoi;