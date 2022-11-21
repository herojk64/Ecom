import React from 'react';
import './css/Category.css'

const Category = (probs) => {
    const addCategory=(e)=>{
        if(e.target.value !=="" && !probs.category.includes(e.target.value)){
            probs.setCategory([...probs.category,e.target.value])
            e.target.value=""
        }
    }
    const addDataCategory=(e)=>{
        if(e.target.value !=="" && !probs.category.includes(e.target.value)){
            probs.setCategory([...probs.category,e.target.value])
            e.target.value=""
            //add new Category here
        }
    }
    const removeCategory = (catNumber)=>{
        probs.setCategory(probs.category.filter((_,index)=>index!==catNumber));
    }

  return (
    <div className='CategoryHolder'>
        <ul>
         {probs.category.map((e,index)=>{
                return (
                <li key={index}>
                    {e}
                    <button type="button" onClick={()=>{removeCategory(index)}}>X</button>
                </li>
                );
            })}
        </ul>
        <label htmlFor='Category_Select' hidden={true}>Category:</label>
        <select id="Category_Select" onChange={addCategory} defaultValue={``}>
            <option value={``} hidden={true}></option>
            {probs.defaultCategory.map((e,index)=>{
                return (
                    <option key={index} value={e}>
                        {e}
                    </option>
                );
            })}
        </select>
        
        <input
        type={`text`}
        className="CategoryInput"
        placeholder="Enter Category"
        onKeyUp={e=>e.key ==="Enter"?addDataCategory(e):null}
        
      />
    </div>
  )
}

export default Category