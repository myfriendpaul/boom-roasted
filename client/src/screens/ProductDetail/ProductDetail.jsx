import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../services/products";
import Layout from "../../components/Layout/Layout";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      console.log(product);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Layout user={props.user}>
        <div className="product-detail">
          <img
            className="product-detail-image"
            src={product.imgURL}
            alt={product.name}
          />

          <div className="info-detail">
            <div className="name">{product.name}</div>
            <div className="price">{product.price}</div>
            <div className="description">{product.description}</div>
          </div>
        </div>

        <div className="add-cart-div">
          <button className="add-cart">Add to cart</button>
        </div>

        <div className="delete-button-div">
          <button
            className="delete-button"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>

        <div className="edit-button-div">
          <Link to={`/products/${product._id}/edit`}>Edit</Link>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
