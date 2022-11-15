import React, { useEffect, useRef, useState } from 'react'
import Input from '../Parts/Input'
import './css/Add.css'

const Add = () => {
  const [uploaded , setUploaded] = useState(null)
  const title = useRef()
  const description=useRef()
  const price = useRef()
  const discount = useRef()
  const image = useRef()
  const stock = useRef()
  const brand = useRef()
  useEffect(
    ()=>{
      if(image.current.files.length){
       
        const fileReader = new FileReader();
        const url = fileReader.readAsDataURL(image.current.files[0]);
             setUploaded(url)
             
      }
    },
    [image]
  )
  
  //form haneler
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const file = new FormData();
    await file.append('File',image.current.files[0])
    console.log(image.current.files)
  }

  return (
    <div className='Product_Add'>
      <form onSubmit={handleSubmit}>
         <Input
          ContainerClass="TitleContainer"
          label="Title"
          type="text"
          id="Title"
          className="Title"
          name="Title"
          ref={title}
        />
         <Input
          ContainerClass="PriceContainer"
          label="Price"
          type="number"
          id="Price"
          className="Price"
          name="Price"
          min={0}
          ref={price}
        />
        <Input
          ContainerClass="DiscountContainer"
          label="Discount"
          type="number"
          id="Discount"
          className="Discount"
          name="Discount"
          min={0}
          max={100}
          ref={discount}
        />
        <Input
          ContainerClass="StockContainer"
          label="Stock"
          type="number"
          id="Stock"
          className="Stock"
          name="Stock"
          min={0}
          max={10000}
          ref={stock}
        />
        <Input
          ContainerClass="BrandContainer"
          label="Brand"
          type="text"
          id="Brand"
          className="Brand"
          name="Brand"
          ref={brand}
        />
        <Input
          ContainerClass="DescriptionContainer"
          label="Description"
          type="text"
          id="Description"
          className="Description"
          name="Description"
          ref={description}
        />
        <Input
          ContainerClass="ImageInput"
          label="Upload Image"
          type="file"
          id="ImageUpload"
          className="ImageUpload"
          name="ImageUpload"
          ref={image}
        />
        {uploaded?(<img src={uploaded} alt=""/>):null}
        <button 
        type="submit"
        >
            Sign Up
        </button>
      </form>
    </div>
  )
}

export default Add