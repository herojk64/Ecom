import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import Add from "./Add";
import Modify from "./Modify";
import './css/Products.css'

const AddProduct = () => {
  return (
    <section className="Product_Section">
      <nav>
        <ol>
          <li>
            <Link to="add">Add</Link>
          </li>
          <li>
            <Link to="modify">Modify</Link>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route exact path="add" element={<Add />} />
        <Route exact path="modify" element={<Modify />} />
      </Routes>
      
    </section>
  );
};

export default AddProduct;
