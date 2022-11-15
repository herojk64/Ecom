import React,{forwardRef, useState} from "react";
import './css/Input.css'

const Input = (probs,ref) => {
  const [Focused,SetFocused] = useState(false)
  const InputFocus = ()=>{
    SetFocused(true)
  }
  const LeaveFocus = ()=>{
    SetFocused(false);
  } 
  const handleFile=()=>{
   const file = document.getElementById(probs.id);
   const label = document.querySelector(`label[for=${probs.id}]`);
   label.style.backgroundColor="transparent"
   label.style.color="transparent";
   file.style.color="white";
  }
  return (
    <div className={`InputHolder ${probs.ContainerClass}`}>
      <label htmlFor={probs.id} data-select={Focused}>{probs.label?probs.label+":":null}</label>
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
        ):
        probs.type === 'file'?
        (<input
        type={probs.type}
        name={probs.name}
        className={probs.className}
        id={probs.id}
        placeholder=""
        ref={ref}
        onChange={handleFile}
        onFocus={InputFocus}
        onBlur={LeaveFocus}
        />)
        :
        (
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
