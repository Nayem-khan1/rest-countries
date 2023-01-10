import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Country.css'

const Country = () => {
    const countries = useLoaderData()[0];
    const {capital, name, population, region, startOfWeek, status, subregion} = countries;
    return (
        <div className='country-container'>
            <div className='country-details'>
                <div className='country-flag'>
                    <img src={`${countries.flags.png}`} alt="" />
                </div>
                <div className='country-info'>
                    <h4>Name: {name.common}</h4>
                    <h3>Official Name: {name.official}</h3>
                    <p>Capital: {capital[0]}</p>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Start of Week: {startOfWeek}</p>
                    <p>Status: {status}</p>
                    <p>Subregion: {subregion}</p>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Country;