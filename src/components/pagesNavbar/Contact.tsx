function Contact() {
    return (
        <div className="px-10 py-12 bg-white">
            <h1 className="text-4xl font-bold text-emerald-700 mb-4 text-center">Pagina de contact</h1>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Ai întrebări sau sugestii? Scrie-ne un mesaj folosind formularul de mai jos, iar noi vom reveni cât mai curând posibil.
            </p>

            {/* Google Maps */}
            <div className="flex justify-center mb-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.274063303704!2d28.81561447697164!3d47.04806137114508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cd6e7ffdbff%3A0x3803e7e2f342b6be!2sStrada%20Miron%20Costin%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sro!2s!4v1715984826903!5m2!1sro!2s"
                    width="1000"
                    height="400"
                    loading="lazy"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>

            {/* Formular */}
            <form className="max-w-3xl mx-auto space-y-6">
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">Nume</label>
                        <input
                            type="text"
                            placeholder="Introduceți numele"
                            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Introduceți email"
                            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Subiect</label>
                    <input
                        type="text"
                        placeholder="Introduceți subiectul"
                        className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Mesajul</label>
                    <textarea
                        placeholder="Introduceți Mesajul"
                        rows={5}
                        className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                        Începe conversația
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
