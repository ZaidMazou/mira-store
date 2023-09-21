import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const Sac = () => {
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
                <img src="Mira/IMG-20230919-WA0084.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0085.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0086.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0087.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0088.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0089.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0090.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0091.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0092.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0093.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0094.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0095.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0096.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0097.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0098.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0099.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0100.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0101.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0102.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0103.jpg" alt="" onClick={handlclick} />
                <img src="Mira/IMG-20230919-WA0104.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0105.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0106.jpg" alt="" onClick={handlclick}/>
                <img src="Mira/IMG-20230919-WA0107.jpg" alt="" onClick={handlclick}/>
            </div>
            <div className='link'>
                <Link to="/category">Retour</Link>
            </div>
            { modal && <Modal closeModal={()=>{setmodal(false)}}/>}
        </div>
    );
};

export default Sac;