

const Feedback = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
            <h2 className="text-center text-4xl font-bold mb-8">Game-Changer Stories</h2>
            <p className="text-center text-lg mb-12">
                Discover the moments where our gear turned the tide in the biggest games.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

                {/* person 1 */}
                <div className="bg-gray-700 p-8 shadow-xl rounded-lg relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-blue-600 text-sm px-4 py-1 rounded-full">
                        Game-Changer
                    </div>

                    <h3 className="text-2xl font-bold">Virat kholi</h3>
                    <p className="text-sm text-gray-400">cricket | world cup final</p>
                    <p className="mt-4 text-gray-300 italic">
                        Scored the winning goal in the final minute with ProStrike Boots.
                    </p>
                    <div className="mt-6 text-sm">
                        <p className="flex gap-2"><strong>Before :</strong> Struggled with control and accuracy </p>
                        <p><strong className="mr-2">After :</strong>improved accuracy by 20%, leading to a game-winning goal.</p>
                    </div>
                    <div className="mt-6 text-blue-400">

                    </div>
                </div>
                
                {/* person 2 */}
                <div className="bg-gray-700 p-8 shadow-xl rounded-lg relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-blue-600 text-sm px-4 py-1 rounded-full">
                        Game-Changer
                    </div>

                    <h3 className="text-2xl font-bold">Virat kholi</h3>
                    <p className="text-sm text-gray-400">cricket | world cup final</p>
                    <p className="mt-4 text-gray-300 italic">
                        Scored the winning goal in the final minute with ProStrike Boots.
                    </p>
                    <div className="mt-6 text-sm">
                        <p className="flex gap-2"><strong>Before :</strong> Struggled with control and accuracy </p>
                        <p><strong className="mr-2">After :</strong>improved accuracy by 20%, leading to a game-winning goal.</p>
                    </div>
                    <div className="mt-6 text-blue-400">

                    </div>
                </div>

                {/* person 3 */}
                <div className="bg-gray-700 p-8 shadow-xl rounded-lg relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-blue-600 text-sm px-4 py-1 rounded-full">
                        Game-Changer
                    </div>

                    <h3 className="text-2xl font-bold">Virat kholi</h3>
                    <p className="text-sm text-gray-400">cricket | world cup final</p>
                    <p className="mt-4 text-gray-300 italic">
                        Scored the winning goal in the final minute with ProStrike Boots.
                    </p>
                    <div className="mt-6 text-sm">
                        <p className="flex gap-2"><strong>Before :</strong> Struggled with control and accuracy </p>
                        <p><strong className="mr-2">After :</strong>improved accuracy by 20%, leading to a game-winning goal.</p>
                    </div>
                    <div className="mt-6 text-blue-400">

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Feedback;