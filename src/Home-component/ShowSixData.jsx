import { Link } from "react-router-dom";

const ShowSixData = ({ product }) => {
    return (
        <div className="card glass m-3">
            <figure>
                <img
                    src={product.image}
                    className="w-60 h-60 mt-4"
                    alt="products" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.item}</h2>
                <p>{product.description}</p>
                <p>$ { product.price}</p>
                <div className="card-actions">
                    <Link to={`/details/${product._id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ShowSixData;