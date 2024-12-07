import { useLoaderData, useParams } from "react-router-dom";

const HomeDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const product = data.find(service => service._id === id);

    return (
        <div className="flex justify-center items-center bg-gray-100 py-8">
            <div className="card bg-white shadow-lg rounded-lg w-full max-w-4xl">
                <div className="flex flex-col md:flex-row">
                    
                    <div className="flex-1">
                        <img
                            src={product.image}
                            alt="Product"
                            className="w-full h-[400px] md:rounded-l-lg md:w-[500px] md:h-[350px]"
                        />
                    </div>

        
                    <div className="flex-1 p-6 space-y-4">
                        <h2 className="text-3xl font-semibold text-gray-800">
                            {product.item}
                            <span className="ml-4 px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">
                                NEW
                            </span>
                        </h2>

                        <div className="flex justify-between text-gray-600 text-lg">
                            <p><span className="font-semibold">Category:</span> {product.category}</p>
                            <p><span className="font-semibold">Price:</span> ${product.price}</p>
                        </div>

                        <div className="flex justify-between text-gray-600">
                            <p><span className="font-semibold">Stock:</span> {product.stock}</p>
                            <p><span className="font-semibold">Rating:</span> {product.rating} / 5</p>
                        </div>

                        <div className="text-gray-600">
                            <p><span className="font-semibold">Time:</span> {product.time}</p>
                            <p><span className="font-semibold">Grip:</span> {product.extraGrip}</p>
                            <p><span className="font-semibold">Hit Paper:</span> {product.hitPaper}</p>
                        </div>

                        <p className="text-gray-700 text-lg mt-4">
                            <span className="font-semibold">Description:</span> {product.description}
                        </p>

                        <div className="flex justify-between mt-6">
                            <button className="btn btn-primary px-8 py-3 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                                Add to Cart
                            </button>
                            <button className="btn btn-secondary px-8 py-3 text-gray-800 font-semibold rounded-md border-2 border-gray-300 hover:bg-gray-200 transition duration-300">
                                Back to Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;
