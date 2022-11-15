import React,{ useState} from 'react'
import Card from '../Parts/Card'
import data from '../Test/Data.json'
import './css/Home.css'

const Home = () => {

  
  return (
    <main className='Home_Container'>
      <section className='FrontPreview'>
        <div id="Overlay">
        </div>
      </section>
      <section className='ProductCards'>
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
      </section>
    </main>
  )
}

export default Home