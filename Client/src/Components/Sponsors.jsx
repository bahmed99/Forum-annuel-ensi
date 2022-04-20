import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../data/sponsors.json"
import "../Assets/css/partenaires.css"
import bgPartenaire from "../Assets/images/bg.jpg"
export default function Partenaires() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
  
        dots: false,
        autoplay: true,
        speed: 100,
        className: `testimonial-content--3 testimonial-grid`,
      
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div style={{ paddingBottom: "10%" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="service-area-top" style={{ backgroundImage: `url("${bgPartenaire}")` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 m-auto text-center">
                            <h2 className="section-title">Nos Sponsors</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="service-content-area container" >
                <div className="partenaire  " >
                    <SlickSlider {...settings}>
                        {
                            data.map(ele => (
                                <div className="">
                                    <div class="boxPartenaire container">
                                        <div class="imgBx">
                                            <img src={require(`../Assets/images/${ele.thumb}`).default} alt=""/>
                                        </div>
                                        <div class="content">
                                            <h3>{ele.title}</h3>
                                            <div class="contentText">
                                            <p>{ele.shortDesc}</p>
                                        </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            ))
                        }
                    </SlickSlider>
                </div>
            </div>
        </div>
    )
}
