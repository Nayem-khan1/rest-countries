import React from 'react';
import image from '../../images/worldcollage.webp';
import worldimage from '../../images/selectBack.webp';
import './Home.css'

const Home = () => {
    return (
        <div className='main-container'>
            <div className='image-1'>
                <img src={image} alt="" />
            </div>
            <div className='article-container'>
                <div className='image-2'>
                    <img src={worldimage} alt="" />
                </div>
                <div className='article'>
                    <p>CountryReports delivers unique content on Culture, Countries and Travel from around the world. Students, tourists, libraries, business and researchers appreciate our ability deliver hard to find, fun and current information. Get started, pick a country!</p>
                    <button>Sample Country</button>
                </div>
            </div>
            
        </div>
    );
};

export default Home;