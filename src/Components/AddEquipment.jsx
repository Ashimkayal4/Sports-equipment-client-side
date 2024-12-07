import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddEquipment = () => {
    const { user } = useContext(AuthContext);

    const email = user.email;

    const handleEquipment = e => {
        e.preventDefault();
        const form = e.target;
        const image=form.image.value
        const item =form.item.value
        const category=form.category.value
        const description = form.description .value
        const price = form.price .value
        const rating = form.rating .value
        const extraGrip = form.extraGrip.value
        const hitPaper = form.hitPaper.value
        const time = form.time.value
        const stock = form.stock.value
        
        const newEquipment = { extraGrip, hitPaper, image, item, category, description, price, rating, time, stock ,email }
        

        fetch('http://localhost:5000/equipments', {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
            
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Equipments added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
    }
    return (
        <div>
            <form onSubmit={handleEquipment}>
                <div className="lg:grid lg:grid-cols-2 gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='image' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name='item' placeholder="Item name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <input type="text" name='category' placeholder="category name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Extra Grip</span>
                        </label>
                        <input type="text" name='extraGrip' placeholder="Customization" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Hit Paper</span>
                        </label>
                        <input type="text" name='hitPaper' placeholder="Customization" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing Time </span>
                        </label>
                        <input type="text" name='time' placeholder="Processing Time " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <input type="text" name='stock' placeholder="Stock status" className="input input-bordered" required />
                    </div>
                  
                </div>
                <input type="submit" className="btn btn-neutral w-full mt-2" value="Submit" />
            </form>
        </div>
    );
};

export default AddEquipment;