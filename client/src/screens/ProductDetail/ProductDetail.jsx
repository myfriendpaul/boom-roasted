import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory, Redirect } from "react-router-dom";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../services/products";
import Layout from "../../components/Layout/Layout";
import "./ProductDetail.css";
import { Button } from "react-bootstrap";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const params = useParams();
  const [isDeleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      console.log(product, "This is the deleted code");
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async (event) => {
    event.preventDefault();
    const deleted = await deleteProduct(id, product);
    setDeleted(deleted);
  };

  if (!isLoaded) {
    return <h1>Loading</h1>;
  }

  if (isDeleted) {
    return <Redirect to="/productList" />;
  }

  // const thisProduct = props.product.find(product => id === product.id)
  // if (!thisProduct) {
  //   return (<p>Invalid ID</p>)
  // }

  return (
    <div className="wrap-detail">
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
            <div className="add-cart-div">
              <Link to="/shoppingCart" onClick={() => alert("Added to cart")}>
                <Button className="add-cart">Add to cart</Button>
              </Link>
              <Link to="/productList" onClick={handleDelete}>
                <Button variant="delete">Delete</Button>
              </Link>

              <Link to={`/products/${product._id}/edit`}>
                <Button variant="edit">Edit</Button>
              </Link>
              <Link to={`/products/${product._id}/edit`}>
                <Button variant="edit">Edit</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="delete-button-div"> */}
        {/* </div> */}

        {/* <div className="edit-button-div"> */}
        {/* </div> */}
      </Layout>
    </div>
  );
};

export default ProductDetail;
