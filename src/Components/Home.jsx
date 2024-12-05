import React from 'react';
import Slider from '../Home-component/Slider';
import { useLoaderData } from 'react-router-dom';
import ShowSixData from '../Home-component/ShowSixData';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <section>
                <Slider></Slider>
            </section>

            <section>
                <h1>{products.length}</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        products.map(product => <ShowSixData
                            product={product}
                        ></ShowSixData>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;