import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Countries.css'

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div className='countries-container'>
            <div className='country-div'>
                <h3>Total Countries {countries.length}</h3>
                <div className='country-name'>
                    <h2>Country Name and Flag</h2>
                    <div className='country-list'>
                        <div className='country'>
                            {
                                countries.map(country =><li><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></li>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countries;