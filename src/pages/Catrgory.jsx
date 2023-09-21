import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const Catrgory = () => {
    const [modal, setmodal] = useState(false);
    const handlclick = ()=>{
        setmodal(true)
    }
    useEffect(()=>{
        const imgs = document.querySelectorAll('.cat .catTitle')
        imgs.forEach((img)=>{
            const obv = new IntersectionObserver(h=>{
                if (h[0].isIntersecting) {
                    img.classList.add("active")
                }
            })
            obv.observe(img)
        })
    },[])
    return (
        <>
            <Navbar/>
            <div className='category'>
                <div className="cat">
                    <div className="catTitle">
                        <Link to="/category/sac">
                            <img src="Mira/IMG-20230919-WA0103.jpg" alt="" />
                            <p>Sac à main</p>
                        </Link>
                    </div>
                    <div className="catContent">
                        <img src="Mira/IMG-20230919-WA0088.jpg" alt=""onClick={handlclick}/>
                        <img src="Mira/IMG-20230919-WA0089.jpg" alt=""onClick={handlclick}/>
                        <img src="Mira/IMG-20230919-WA0090.jpg" alt=""onClick={handlclick}/>
                    </div>
                </div>
                <div className="cat">
                    <div className="catTitle">
                        <Link to="/category/lunette">
                            <img src="Mira/IMG-20230919-WA0111.jpg" alt="" />
                            <p>Lunettes</p>
                        </Link>
                    </div>
                    <div className="catContent">
                        <img src="Mira/IMG-20230919-WA0115.jpg" alt=""onClick={handlclick}/>
                        <img src="Mira/IMG-20230919-WA0134.jpg" alt=""onClick={handlclick}/>
                        <img src="Mira/IMG-20230919-WA0139.jpg" alt=""onClick={handlclick}/>
                    </div>
                </div>
                <div className="cat">
                    <div className="catTitle">
                        <Link to="/category/divers">
                            <img src="Mira/IMG-20230919-WA0075.jpg" alt="" />
                            <p>Divers</p>
                        </Link>
                    </div>
                    <div className="catContent">
                        <img src="Mira/IMG-20230919-WA0078.jpg" alt="" onClick={handlclick}/>
                        <img src="Mira/IMG-20230919-WA0079.jpg" alt="" onClick={handlclick}/>
                        <img src="Mira/IMG-20230919-WA0073.jpg" alt="" onClick={handlclick}/>
                    </div>
                </div>
            </div>
            { modal && <Modal closeModal={()=>{setmodal(false)}}/>}
            <Footer/>
        </>
        
    );
};

export default Catrgory;