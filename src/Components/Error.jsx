import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error.png'

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-4'>
            <h1>Oops!</h1>
            <img src={error} className='w-72' alt="" />
            <Link to='/'>
                <button className='btn btn-outline'>Go Home</button>
            </Link>
        </div>
    );
};

export default Error;