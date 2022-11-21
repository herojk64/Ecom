import React from "react";
import "./css/Tags.css";

const Tags = (probs) => {
    const addTags = e=>{
        if(e.target.value !== ""){
            probs.setTags([...probs.Tags,e.target.value]);
            e.target.value ="";
        }
    }
    const removeTags = (tagNumber)=>{
        probs.setTags(probs.Tags.filter((_,index)=>index!==tagNumber));
    }
  return (
    <div
      className="TagsContainer"
    >
      <ul>
        {probs.Tags.map((value,index)=>{
            return (
            <li key={index}>
                {value}
                <button type="button" onClick={()=>{removeTags(index)}}>X</button>
            </li>
            )
        })}
      </ul>
      <input
        type={`text`}
        className="TagsInput"
        placeholder="Enter tags"
        onKeyUp={e=>e.key ==="Enter"?addTags(e):null}
      />
    </div>
  );
};

export default Tags;
