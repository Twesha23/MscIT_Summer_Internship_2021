import React from 'react';
import Card from './Card';

const CardList=({cafes})=>
{
    return(
    <div>{
            cafes.map((user,index)=>{
                return(
                    <Card
                    key={index}
                    id={cafes[index].id}
                    name={cafes[index].name}
                    email={cafes[index].email}
                    src={cafes[index].src} 
                    alt={cafes[index].alt}/>
                );
            })
          
        }
       
    </div>
    );
}
export default CardList;