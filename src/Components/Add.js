import React, { useEffect, useRef, useState } from "react";
import Category from "../Parts/Category";
import Input from "../Parts/Input";
import Tags from "../Parts/Tags";
import "./css/Add.css";

const Add = () => {
  const [defaultCategory, setDefaultCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [tags, setTags] = useState([]);
  const title = useRef();
  const description = useRef();
  const price = useRef();
  const discount = useRef();
  const thumbnailImage = useRef();
  const brand = useRef();

  useEffect(
    ()=>{
      setDefaultCategory(["Mobile", "Laptop"]);
    },[]
  )
  //image handler
  const handleImage = async (e) => {
    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if(acceptedImageTypes.includes(e.target.files[0].type)){
      setImage([...image, e.target.files[0]]);
    }
  };
  const removeImage = (imgIndex) => {
    setImage(image.filter((_, index) => index !== imgIndex));
  };
  //form haneler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    const formdata = new FormData();
    formdata.append("thumbnail",thumbnailImage.current.files[0]);
    console.log(formdata);
    console.log(image);
  };

  return (
    <form onSubmit={handleSubmit} className="Product_Add">
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
        ContainerClass="BrandContainer"
        label="Brand"
        type="text"
        id="Brand"
        className="Brand"
        name="Brand"
        ref={brand}
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
      <Category
        defaultCategory={defaultCategory}
        category={category}
        setCategory={setCategory}
      />
      <Tags Tags={tags} setTags={setTags} />

      <Input
        ContainerClass="ThumbnailInputContainer"
        label="Thumbnail"
        type="file"
        id="thumbnailUpload"
        className="thumbnailUpload"
        name="thumbnailUpload"
        ref={thumbnailImage}
        Accept="images/*"
      />
      <Input
        ContainerClass="ProductImageContainer"
        label="Images"
        type="file"
        id="ImagesUpload"
        className="ProductImageUpload"
        name="ProductImageUpload"
        ImageInput={handleImage}
        Accept="images/*"
      />
      <div className="imgDisplay">
        {image.map((e, index) => {
          return (
            <span key={index}>
              <button
                type="button"
                onClick={() => {
                  removeImage(index);
                }}
              >
                X
              </button>
              <img src={URL.createObjectURL(e)} alt="" />
            </span>
          );
        })}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Add;
