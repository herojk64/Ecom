import React from 'react'
import data from '../Test/Data.json'
import Card from '../Parts/Card'
import './css/Shop.css'

const Shop = () => {
  return (
    <main className='ShopContainer'>
      {data.map(
          (value,index)=>{
            return (<Card
            key={index}
            thumbnail={value.thumbnail}
            title={value.title}
            description={value.description}
            category={value.description}
            rating={value.rating}
             />);
          }
        )}
    </main>
  )
}

export default Shop