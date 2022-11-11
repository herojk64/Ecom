import React, { useRef } from 'react'
import Input from '../Parts/Input'

const Add = () => {
  const title = useRef()
  const description=useRef()
  const price = useRef()
  const discount = useRef()
  const stock = useRef()
  const brand = useRef()
  return (
    <div className='Product_Add'>
      <form>
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
          ContainerClass="DescriptionContainer"
          label="Description"
          type="text"
          id="Description"
          className="Description"
          name="Description"
          ref={description}
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
      </form>
    </div>
  )
}

export default Add