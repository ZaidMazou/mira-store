import React from 'react';

const Header = () => {
    return (
        <div className='header' id='header'>
           <div className='headerContainer'>
                <div className="slider">
                    <img src="Mira/IMG-20230919-WA0084.jpg" alt="" />
                    <img src="Mira/IMG-20230919-WA0087.jpg" alt="" />
                    <img src="Mira/IMG-20230919-WA0115.jpg" alt="" />
                    <img src="Mira/IMG-20230919-WA0119.jpg" alt="" />
                    <img src="Mira/IMG-20230919-WA0071.jpg" alt="" />
                    <img src="Mira/IMG-20230919-WA0084.jpg" alt="" />
                </div>
           </div>
           <div className='headerContent'>
                <h2>Bienvenu Chez <span>MiraStore</span></h2>
                <p>Trouvez ici tous les articles dont vous avez besoin</p>
           </div>
        </div>
    );
};

export default Header;