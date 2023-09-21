import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Store from '../components/Store';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Store/>
            <Footer/>
        </>
    );
};

export default Home;