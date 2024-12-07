import React from 'react';
import Slider from '../Home-component/Slider';
import { useLoaderData } from 'react-router-dom';
import ShowSixData from '../Home-component/ShowSixData';
import Feedback from '../Home-component/Feedback';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <section>
                <Slider></Slider>
            </section>

            <section>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        products.map(product => <ShowSixData
                            key={product._id}
                            product={product}
                        ></ShowSixData>)
                    }
                </div>
            </section>

            <section>
                <Feedback></Feedback>
            </section>

            <section>
                
            </section>

        </div>
    );
};

export default Home;