import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';

const Lunette = () => {
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
            <div className='showImage'>
                <img src="Mira/IMG-20230919-WA0111.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0112.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0113.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0114.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0115.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0116.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0117.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0118.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0119.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0120.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0121.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0122.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0123.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0124.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0125.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0135.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0127.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0128.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0129.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0130.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0131.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0132.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0133.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0134.jpg" alt="" onClick={handlclick}/>
            </div>
            <div className='link'><a href="/category">Retour</a></div> 
            { modal && <Modal closeModal={()=>{setmodal(false)}}/>}    
        </div>
    );
};

export default Lunette;