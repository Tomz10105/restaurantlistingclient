import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl text-center mb-8">
                Welcome To <span className="text-blue-500 font-extrabold">Restaurant Listing App</span>
            </h1>
            <h2 className="text-3xl text-center mb-6">Find awesome restaurants near you.</h2>
            <button className="button-search text-3xl text-white bg-blue-500 py-2 px-12 rounded-lg">
                <Link to="/search">Search</Link>
            </button>
        </div>
    );
};

export default Home;
