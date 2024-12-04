import { useLoaderData } from "react-router-dom";

const AllSports = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Item name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr>
                                <th>
                                    <img className="w-20 h-20 rounded-full border" src={product.image} alt="" />
                                </th>
                                <th>{ product.item}</th>
                                <td>{ product.category}</td>
                                <td>{product.price}</td>
                                <button className="btn my-3">view details</button>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSports;