import React from 'react';

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
                    <a href="/">Accueil</a>
                    <a href="/category">Catégories</a>
                    <a href="/category/sac">Sacs</a>
                    <a href="/category/lunette">Lunettes</a>
                    <a href="/category/divers">Divers</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;