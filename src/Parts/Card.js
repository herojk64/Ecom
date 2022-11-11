import React from 'react'
import './css/Card.css'

const Card = (probs) => {
    
  return (
    <div className='PreviewCard'>
        <img 
        src={probs.thumbnail} 
        loading={probs.loading?"eager":"lazy"}
        alt="thumbnail"/>
        <div>Title:{probs.title}</div>
        <p className='Details'>{probs.description}</p>
        <p className='Category'>Category:{probs.category}</p>
        <p className='Ratings'>Rating:{probs.rating}</p>
    </div>
  )
}

export default Card
