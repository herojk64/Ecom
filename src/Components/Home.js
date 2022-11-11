import React from 'react'
import Card from '../Parts/Card'
import data from '../Test/Data.json'
import './css/Home.css'

const Home = () => {
  const ParallaxEffect=(e)=>{
    console.log()
    const overlay = document.getElementById("Overlay");
    overlay.style.boxShadow="0 0 1000px 1px #19823981";
  }
  return (
    <main className='Home_Container' onScroll={ParallaxEffect}>
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