import React from 'react';
import '../styles/Cards.css';

import Card from '../components/Card';

export default function Cards({cities, onClose}){
    return(
        <div className='cards'>
            {cities.map( c => <Card 
                key={c.id}
                min={c.min}
                max={c.max}
                name={c.name}
                img={c.img}
                onClose={ () => onClose(c.id)}
            />)}
        </div>
    )
}