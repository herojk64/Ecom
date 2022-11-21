import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import data from '../Test/Data.json'
import Card from '../Parts/Card'
import './css/Search.css'
const Search = () => {
    const [searching,setSearching] = useState("");
    const {tag} = useParams();
    useEffect(
        ()=>{
            setSearching(tag);
            return ()=>setSearching("");
        },
        [tag]
    )
  return (
    <main className='SearchContainer'>
        <section>

        </section>
        <section className='SearchData'>
        {
            data.map((value,index)=>{
                
               if(value.brand.toLowerCase().search(searching.toLowerCase())===-1){
                return null;
               }
                return (
                 <Card 
                    key={index}
                    thumbnail={value.thumbnail}
                    title={value.title}
                    description={value.description}
                    category={value.description}
                    rating={value.rating}
                    />
                )
               
            })
            }
            </section>        
    </main>
  )
}

export default Search