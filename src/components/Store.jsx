import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const Store = () => {
    const [modal, setmodal] = useState(false);
    const handlclick = ()=>{
        setmodal(true)
    }
    useEffect(()=>{
        const imgs = document.querySelectorAll('.part img')
        imgs.forEach((img)=>{
            const obv = new IntersectionObserver(h=>{
                if (h[0].isIntersecting) {
                    img.classList.add('active')
                }
            })
            obv.observe(img)
        })
    },[])
    return (
        <section className='store'>
            <div className='storetitle'>
                <div></div>
                <h1>Pour Vous</h1>
                <div></div>
            </div>
            <div className='part'>
                <img src="Mira/IMG-20230919-WA0069.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0071.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0073.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0074.jpg" alt="" onClick={handlclick}/>
            </div>
            <div className='part'>
                <img src="Mira/IMG-20230919-WA0085.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0086.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0088.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0089.jpg" alt="" onClick={handlclick}/>
            </div>
            <div className='part'>
                <img src="Mira/IMG-20230919-WA0097.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0080.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0134.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0130.jpg" alt="" onClick={handlclick}/>
            </div>
            <div className='part'>
                <img src="Mira/IMG-20230919-WA0135.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0136.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0138.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0141.jpg" alt="" onClick={handlclick}/>
            </div>
           { modal && <Modal closeModal={()=>{ setmodal(false)}}/>}
        </section>
    );
};

export default Store;