const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Pantofi */}
            <div className="mb-16 p-8 bg-gray-50 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-8">Alege Încălțămintea top</h2>
                        <blockquote className="text-2xl italic mb-6">„Mișcă-te cu stil. T-Mork.”</blockquote>
                        <p className="text-lg mb-8">
                            T-Mork nu e doar o pereche de pantofi sport. Este o declarație de stil, viteză și motivație.
                            Proiectați pentru mișcare, gândiți pentru impact – fiecare pas te apropie de cea mai bună
                            versiune a ta.
                        </p>
                        <div className="border-t border-gray-300 mb-6"></div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                            Cumpără acum
                        </button>

                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/img/banner_img_01.jpg"
                            alt="Pantofi sport T-Mork"
                            className="w-full h-auto rounded-lg shadow-xl" />
                    </div>
                </div>
            </div>

            {/* Tricou */}
            <div className="mb-16 p-8 bg-blue-50 rounded-xl">
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">FlexWear - Respiră mișcarea</h2>
                        <p className="text-lg mb-8">
                            Tricou sport ușor, elastic și ultra-respirabil. Ideal pentru orice tip de antrenament intens.
                        </p>
                        <div className="border-t border-gray-300 mb-6"></div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg mb-6">
                            Cumpără acum
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="/img/flexwear.png"
                            alt="Tricou sport FlexWear"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Mănuși */}
            <div className="p-8 bg-gray-50 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">PowerGrip</h2>
                        <p className="text-xl mb-4">Control total, fără compromisuri</p>
                        <p className="text-lg mb-8">
                            PowerGrip este alegerea ideală pentru cei care ridică serios. Aceste mănuși de sală sunt
                            proiectate pentru aderență maximă și confort de durată. Cu o prindere anti-alunecare și
                            protecție pentru încheieturi, ai mai multă putere și mai puțină oboseală.
                        </p>
                        <div className="border-t border-gray-300 mb-6"></div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg mb-6">
                            Cumpără acum
                        </button>

                    </div>

                    <div className="md:w-1/2">
                        <img
                            src="/img/powergrip.png"
                            alt="Mănuși PowerGrip"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;