// pages/index.js
import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PostList from './components/PostList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-4">
                <PostList/>

            </div>
            <Footer />
        </div>
    );
};

export default Home;
