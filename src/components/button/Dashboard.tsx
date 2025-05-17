
function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
                <h1 className="text-3xl font-bold text-emerald-700 mb-6">Bine ai venit în Dashboard</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 bg-emerald-50 rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-emerald-800">Comenzile tale</h2>
                        <p className="text-gray-600">Vezi toate comenzile plasate în magazin.</p>
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-emerald-800">Datele tale</h2>
                        <p className="text-gray-600">Editează informațiile contului personal.</p>
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-emerald-800">Abonamente</h2>
                        <p className="text-gray-600">Gestionează planul tău activ și plățile.</p>
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-lg shadow hover:shadow-md transition">
                        <h2 className="text-xl font-semibold text-emerald-800">Ieșire din cont</h2>
                        <p className="text-gray-600">Te poți deconecta în siguranță.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
