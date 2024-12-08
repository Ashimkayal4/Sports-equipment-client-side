import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const products = useLoaderData();

    const { extraGrip, hitPaper, image, item, category, description, price, rating, time, stock, _id } = products;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value
        const item = form.item.value
        const category = form.category.value
        const description = form.description.value
        const price = form.price.value
        const rating = form.rating.value
        const extraGrip = form.extraGrip.value
        const hitPaper = form.hitPaper.value
        const time = form.time.value
        const stock = form.stock.value

        const newEquipment = {
            extraGrip, hitPaper, image, item, category, description, price, rating, time, stock
        }

        fetch(`https://assignment-ten-server-side-mauve.vercel.app/equipments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div>
            <div className="flex justify-center text-2xl mb-4">
                <h1>Update your equipment</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className="lg:grid lg:grid-cols-2 gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='image' defaultValue={image} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name='item' defaultValue={item} placeholder="Item name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <input type="text" name='category' defaultValue={category} placeholder="category name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' defaultValue={description} placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Extra Grip</span>
                        </label>
                        <input type="text" name='extraGrip' defaultValue={extraGrip} placeholder="Customization" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Hit Paper</span>
                        </label>
                        <input type="text" name='hitPaper' defaultValue={hitPaper} placeholder="Customization" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing Time </span>
                        </label>
                        <input type="text" name='time' defaultValue={time} placeholder="Processing Time " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <input type="text" name='stock' defaultValue={stock} placeholder="Stock status" className="input input-bordered" required />
                    </div>

                </div>
                <input type="submit" className="btn btn-neutral w-full mt-2" value="Update" />
            </form>
        </div>
    );
};

export default Update;