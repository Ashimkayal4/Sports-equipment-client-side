import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllSports = () => {
    const originalProducts = useLoaderData();
    const [products, setProducts] = useState(originalProducts);

    const sortByPriceDescending = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-6">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-8">
                        All Products ({products.length})
                    </h1>

                    <button
                        className="btn btn-outline text-xl"
                        onClick={sortByPriceDescending}
                    >
                        Sort by price
                    </button>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="table-auto w-full text-left">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold">Image</th>
                                <th className="px-6 py-4 text-sm font-semibold">Item Name</th>
                                <th className="px-6 py-4 text-sm font-semibold">Category</th>
                                <th className="px-6 py-4 text-sm font-semibold">Price</th>
                                <th className="px-6 py-4 text-sm font-semibold">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <img
                                            className="w-20 h-20 rounded-full object-cover"
                                            src={product.image}
                                            alt={product.item}
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-sm">{product.item}</td>
                                    <td className="px-6 py-4 text-sm">{product.category}</td>
                                    <td className="px-6 py-4 text-sm">${product.price}</td>
                                    <td className="px-6 py-4">
                                        <Link
                                            to={`/details/${product._id}`}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSports;

