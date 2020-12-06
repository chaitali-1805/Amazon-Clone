import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            </div>
            <div className="home__row">
                <Product
                    id="12321543" title='The Mamba Mentality: How I Play'
                    price={13.51}
                    image="https://images-na.ssl-images-amazon.com/images/I/51TngkrkmsL._SX414_BO1,204,203,200_.jpg"
                    rating={3} />

                <Product
                    id="23443453"
                    title='BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games'
                    price={41.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
                    rating={4} />



            </div>
            <div className="home__row">
                <Product
                    id="1245767" title='TJuicy Couture Viva La Juicy Perfume for Women'
                    price={56.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/81OZu-RrD2L._SL1500_.jpg"
                    rating={4} />

                <Product
                    id="75643534" title='Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate, Black/Black, One Size (S & L Bands Included)'
                    price={98.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/71wPLzgLNYL._AC_SL1500_.jpg"
                    rating={3} />
                <Product
                    id="2432454" title='CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz, GeForce GTX 1660 Super 6GB, 8GB DDR4, 500GB NVMe SSD, WiFi Ready & Win 10 Home (GXiVR8060A10)'
                    price={798.52}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Wx7hw9vwL._AC_SL1500_.jpg"
                    rating={5} />
            </div>
            <div className="home__row">
                <Product
                    id="4557852" title='ASUS VivoBook 15.6" FHD Touchscreen Notebook - Intel Core i5-1035G1 1.0GHz - 8GB RAM 256GB PCIe SSD - Webcam - Windows 10 Home, Black'
                    price={599.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71TzSqpfz8L._AC_SL1500_.jpg"
                    rating={4} />

            </div>
        </div>
    )
}

export default Home
