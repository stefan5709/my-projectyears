const Products = () => {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Top Selecții pentru un Stil Activ</h2>
                <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
                    Am selectat cele mai îndrăgite produse care îmbină performanța cu stilul. Fie că ești în sală, pe stradă sau în natură – fii activ, dar rămâi tu însuți.
                </p>

                <div className="grid md:grid-cols-3 gap-8 ">
                    <div className="text-center">
                        <img
                            src="/img/category_img_01.jpg"
                            className="w-auto h-auto rounded-full object-cover"></img>

                        <h3 className="mt-4 text-xl font-semibold mb-4">Watches</h3>
                        <button className="bg-emerald-600 text-white px-6 py-2 rounded">
                            Cumpără acum
                        </button>
                    </div>
                    <div className="text-center">
                        <img
                            src="/img/category_img_02.jpg"
                            className="w-auto h-auto rounded-full object-cover">

                        </img>
                        <h3 className=" mt-4 text-xl font-semibold mb-4">Shoes</h3>
                        <button className="bg-emerald-600 text-white px-6 py-2 rounded">
                            Cumpără acum
                        </button>

                    </div>
                    <div className="text-center">
                        <img
                            src="/img/category_img_03.jpg"
                            className="w-auto h-auto rounded-full object-cover"></img>
                        <h3 className="mt-4 text-xl font-semibold mb-4">Accessories</h3>
                        <button className="bg-emerald-600  text-white px-6 py-2 rounded">
                            Cumpără acum
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
