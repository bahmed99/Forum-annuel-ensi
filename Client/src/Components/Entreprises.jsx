import React from 'react';
import '../Assets/css/entreprises.css'
import Zoom from 'react-reveal/Zoom';
import img1 from '../Assets/images/sponsors/AxeFinance.png'
import img2 from '../Assets/images/sponsors/habemus.png'
import img3 from '../Assets/images/sponsors/minotore.png'
import img4 from '../Assets/images/sponsors/value.png'
import img5 from '../Assets/images/sponsors/Linedata_Logo.png'
import img6 from '../Assets/images/hli.png'
import img7 from '../Assets/images/telnet.png'
import img8 from '../Assets/images/elyadata.png'
import img9 from '../Assets/images/oddobh.png'
import img10 from '../Assets/images/iobeya.png'
import img11 from '../Assets/images/sagemcom.png'
import img12 from '../Assets/images/3s.png'
import img13 from '../Assets/images/insta.png'



export default function Entreprises() {
    return (
        <section id="partners">
           
            <div className="partners">
                <div className="box">
                    <span style={{ "--i": 1 }}><img src={img1} alt=""/></span>
                    <span style={{ "--i": 6 }}><img src={img2} alt=""/></span>
                    <span style={{ "--i": 2}}><img src={img12} alt=""/></span>
                    <span style={{ "--i": 3  }}><img src={img3} alt=""/></span>
                    <span style={{ "--i": 4 }}><img src={img4} alt=""/></span>
                    <span style={{ "--i": 5 }}><img src={img5} alt=""/></span>
                    <span style={{ "--i":12 }}><img src={img6} alt=""/></span>
                    <span style={{ "--i": 7 }}><img src={img7} alt=""/></span>
                    <span style={{ "--i": 8 }}><img src={img8} alt=""/></span>
                    <span style={{ "--i":11 }}><img src={img9} alt=""/></span>
                    <span style={{ "--i": 10 }}><img src={img10} alt=""/></span>

                    <span style={{ "--i": 13}}><img src={img11} alt=""/></span>
      
                    <span style={{ "--i": 9}}><img src={img13} alt=""/></span>
                    
                </div>
            </div>
        </section>
    )
}