import { useState } from "react";
import "./ProductCreate.css";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/products.js";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
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
    <div className="parent-create">
      <Layout user={props.user}>
        <div className="phrase">
          <h1>Create your own coffee blend</h1>
        </div>
        <div className="form-wrap">
          <form className="create-form" onSubmit={handleSubmit}>
            <div className="form-create-div">
              <label id="label-create">Name</label>
              <br />
              <input
                className="input-name"
                value={product.name}
                name="name"
                required
                autoFocus
                onChange={handleChange}
              />
              <label id="label-create">Price</label>
              <br />
              <input
                className="input-price"
                value={product.price}
                name="price"
                required
                onChange={handleChange}
              />
              <label id="label-create">Description</label>
              <br />
              <textarea
                className="textarea-description"
                rows={10}
                value={product.description}
                required
                onChange={handleChange}
              />
              <label id="label-create">Image Link</label>
              <br />
              <input
                className="input-image-link"
                value={product.imgURL}
                name="imgURL"
                onChange={handleChange}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default ProductCreate;
