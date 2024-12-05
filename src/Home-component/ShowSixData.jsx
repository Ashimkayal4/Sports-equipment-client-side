
const ShowSixData = ({product }) => {
    return (
        <div className="card glass m-3">
            <figure>
                <img
                    src={product.image}
                    className="w-60 h-60"
                    alt="products" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default ShowSixData;