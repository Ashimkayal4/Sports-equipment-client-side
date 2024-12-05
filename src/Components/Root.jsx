import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
        
            <section className="w-11/12 mx-auto">
                <Outlet></Outlet>
           </section>
            
            <footer className="mt-3">
                <Footer></Footer>
           </footer>
        </div>
    );
};

export default Root;