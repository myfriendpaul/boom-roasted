import { useState } from "react";
import "./ProductCreate.css";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products.js";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "https://i.imgur.com/e05qa4X.png",
    price: "",
  });
  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/productList`} />;
  }

  return (
    <div>
      <Layout className="mediaSignup" user={props.user}></Layout>
      <div className="phrase">
        <h1>Create your own coffee blend</h1>
      </div>
      <div className="create">
        <form className="create-form" onSubmit={handleSubmit}>
          <label id="label">Name</label>
          <input
            className="inputName"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <label id="label">Price</label>
          <input
            className="inputPrice"
            // placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <label id="label">Description</label>
          <input
            className="inputDescription"
            // placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          {/* <label id='label'>Image Link</label>
        <input
          className="inputImage"
          // placeholder="Image Link"
          value={product.imgURL}
          name="imgURL"
          
          onChange={handleChange}
        /> */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
