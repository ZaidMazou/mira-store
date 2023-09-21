import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';

const Divers = () => {
    const [modal, setmodal] = useState(false);
    const handlclick = ()=>{
        setmodal(true)
    }
    useEffect(()=>{
        const images = document.querySelectorAll('.show img')
        images.forEach((img)=>{
            const obv = new IntersectionObserver(h=>{
                if (h[0].isIntersecting) {
                    img.classList.add('active')
                }
            })
            obv.observe(img)
        })
    },[])
    return (
        <div className='show'>
            <div className="showImage">
                <img src="/Mira/IMG-20230919-WA0080.jpg" alt=""  onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0079.jpg" alt=""  onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0078.jpg" alt=""  onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0077.jpg" alt=""  onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0076.jpg" alt=""  onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0075.jpg" alt=""  onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0074.jpg" alt=""  onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0073.jpg" alt=""  onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0071.jpg" alt=""  onClick={handlclick}/>
            </div>
            <div className='link'>
                <a href="/category">Retour</a>
            </div>
            { modal && <Modal closeModal={()=>{setmodal(false)}}/>}
        </div>
    );
};

export default Divers;