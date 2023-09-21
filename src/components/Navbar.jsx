import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav' id='nav'>
            <div className="navhead">
                <marquee>
                    Site vitrine promouvant plusieurs articles indispensables du quotidient et de la mode 
                    contact : +229 41 82 29 25
                    Fait par ZaidMazou
                </marquee>
            </div>
            <div className='navlink'>
                <div className='logo'>
                    <h2>Mira<span>Store</span></h2>
                    <ul>
                        <a href="#"><img src="facebook.png" alt="facebook" /></a>
                        <a href="#"><img src="twitter.png" alt="twitter" /></a>
                        <a href="#"><img src="Group.png" alt="instagram" /></a>
                    </ul>
                </div>
                <div className='links'>
                    <Link to="/">Accueil</Link>
                    <Link to="/category">Catégories</Link>
                    <Link to="/category/sac">Sacs</Link>
                    <Link to="/category/lunette">Lunettes</Link>
                    <Link to="/category/divers">Divers</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;