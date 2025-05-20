
const Featured = () => {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Echipat pentru Performanță</h2>
                <p className="text-lg italic mb-12">„🎯Fă mișcare. Arată bine. Trăiește Fit.”</p>

                <div className="grid md:grid-cols-3 gap-8">

                    <img src="/img/feature_prod_02.jpg"
                        className="w-full h-auto rounded-lg shadow-xl"
                    ></img>

                    <img src="/img/feature_prod_01.jpg"
                        className="w-full h-auto rounded-lg shadow-xl"></img>
                    <img src="/img/feature_prod_03.jpg"
                        className="w-full h-auto overflow-visible rounded-lg shadow-xl">

                    </img>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">WatchX Pro</h3>
                        <p className="mb-4">
                            Ceas smart cu stil sportiv. Monitorizează-ți pașii, pulsul și obiectivele zilnice cu tehnologie de ultimă oră.
                        </p>
                        <p className="text-sm text-gray-500 mb-4">Reviews (48)</p>
                        <div className="items-center gap-4 ">
                            <span className="text-lg font-bold">$480.00</span>
                            <span className="text-sm text-gray-500 line-through">$540.00</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">SmartFit Torch</h3>
                        <p className="mb-4">
                            Lumină puternică pentru antrenamentele de seară sau plimbările de dimineață. Compactă, modernă și mereu pregătită.
                        </p>
                        <p className="text-sm text-gray-500 mb-4">Reviews (24)</p>
                        <div className="items-center gap-2">
                            <span className="text-lg font-bold">$240.00</span>
                            <span className="text-sm text-gray-500 line-through">$480.00</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">RetroMotion Cam</h3>
                        <p className="mb-4">
                            Suprinde-ți progresul cu o cameră old-school, dar cu stil. Ideală pentru un vibe vintage la sală sau în parc.
                        </p>
                        <p className="text-sm text-gray-500 mb-4">Reviews (74)</p>
                        <div className="items-center gap-4 ">
                            <span className="text-lg font-bold">$360.00</span>
                            <span className="text-sm text-gray-500 line-through">$420.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;