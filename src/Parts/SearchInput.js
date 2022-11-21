import React, { useRef } from 'react'
import './css/SearchInput.css'
import SearchIco from '../Icons/search.png'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  
  const search = useRef();
  const location = useNavigate();
  const HandleFocusin = async() =>{
    const searchIco = document.getElementById('SearchIco');
    const searchInput = document.getElementById('searchEngine');
    const searchBtn = document.getElementById('SearchBtn');
    searchBtn.style.visibility="visible";
    searchBtn.style.opacity=0.5;
    searchBtn.style.opacity=1;
    searchIco.style.opacity = 0.5;
    searchIco.style.opacity = 0;
    searchIco.style.visibility="hidden";
    searchInput.style.width="60%";


    
  }
  const HandleFocusout=async()=>{
    const searchIco = document.getElementById('SearchIco');
    const searchInput = document.getElementById('searchEngine');const searchBtn = document.getElementById('SearchBtn');
    searchBtn.style.opacity=0.5;
    searchBtn.style.opacity=0;
    searchBtn.style.visibility="hidden";
    searchInput.style.width="20%";
    searchIco.style.visibility="visible";
    searchIco.style.opacity= 0.5;
    searchIco.style.opacity = 1;
    search.current.value='';
  }
  const HandleSearch=(e)=>{
      if(e.target.value==="")location("/");
      if(e.target.value!=="")location("/search/"+e.target.value);

  }
 
  return (
    <div className='SearchBarContainer'>
        <img 
        src={SearchIco}
        alt=""
        className='SearchIco'
        id="SearchIco"
        />
        <label htmlFor='searchEngine' hidden={true}>
          Search:  
        </label>
        <input 
        type={`text`}
        name="searchEngine" 
        id='searchEngine'
        ref={search}
        onFocus={HandleFocusin}
        onBlur={HandleFocusout}
        onKeyUp={e=>{HandleSearch(e)}}
        />
        <button
        type='button'
             className='SearchBtn'
              id="SearchBtn">
                Search
            </button>
    </div>
  )
}

export default Search