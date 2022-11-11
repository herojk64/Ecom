import React,{forwardRef, useState} from "react";
import './css/Input.css'

const Input = (probs,ref) => {
  const [Focused,SetFocused] = useState(false)
  const InputFocus = ()=>{
    SetFocused(true)
  }
  const LeaveFocus = ()=>{
    SetFocused(false)
  } 
  return (
    <div className={`InputHolder ${probs.ContainerClass}`}>
      <label htmlFor={probs.id} data-select={Focused}>{probs.label}:</label>
      {
        probs.min
        ||
        probs.max
        ?(
          <input
        type={probs.type}
        name={probs.name}
        className={probs.className}
        id={probs.id}
        placeholder=""
        ref={ref}
        onFocus={InputFocus}
        onBlur={LeaveFocus}
        min={probs.min}
        max={probs.max}
      />
        ):(
          <input
        type={probs.type}
        name={probs.name}
        className={probs.className}
        id={probs.id}
        placeholder=""
        ref={ref}
        onFocus={InputFocus}
        onBlur={LeaveFocus}
      />
        )
      }
    </div>
  );
};

export default forwardRef(Input);
