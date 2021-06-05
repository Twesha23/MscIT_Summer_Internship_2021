import './Card.css';
import React from 'react';
const Card = ({alt,src,name,email}) =>
{
    
    return(
        <div className='tc bg-light-blue dib br3 bw3 pa3 ma2 grow shadow-5'>
            <img alt={alt} src={src} width="400px" height="350px"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;