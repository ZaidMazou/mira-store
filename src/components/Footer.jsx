import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='footerlogo'>
                <h1>Mira<span>Store</span></h1>
                <p>Contact: <span>+229 41 82 29 25</span></p>
            </div>
            <div className='right'>
                <div>
                    <Link to="/">Accueil</Link>
                    <Link to="/category">Catégories</Link>
                </div>
                <p>Tous droits réservés 2023</p>
            </div>
            <div className="autor">
                <p>By ZaidMazou</p>
            </div>
        </footer>
    );
};

export default Footer;