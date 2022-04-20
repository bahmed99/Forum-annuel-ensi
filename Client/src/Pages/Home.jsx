import React from 'react'
import Navbar from '../Components/Navbar'
import Speakers from '../Components/Speakers'
import '../Assets/css/homepage.css'
import PresForum from '../Components/PresForum'
import EJEpar from '../Components/EJEpar'
import Partenaires from '../Components/Partenaires'
import Footer from '../Components/Footer'
import Header from "../Components/HomeHeader"
import Funfact from "../Components/Statistique"
import Aftermovie from '../Components/Aftermovie'
import Sponsors from '../Components/Sponsors'


export default function Home() {

    return (
        <div className='homepage'>
            <Header />
            <EJEpar />
            <Partenaires />
            <PresForum />
            <Funfact />
            <br/>
            <Aftermovie/>
            <Sponsors />
         
            <Footer />
        </div>

    )
}