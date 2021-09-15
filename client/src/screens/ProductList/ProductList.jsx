import "./ProductList.css";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProducts } from "../../services/products";
import Product from "../../components/Product/Product";
import { Link, Route } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* <Layout user={props.user}> */}
      {/* <div className="products"> */}
      <Layout></Layout>
      <div className="cards-container">
        {products.map((product, index) => {
          return (
            <Card style={{
              width: "20rem",
             backgroundColor: "white"
            }}>
              {/* <Product */}
              <Card.Img variant="top" src={product.imgURL} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Link to={`/products/${products.id}`}>
                  <Button variant="primary">Add to cart</Button>
                  {/* id={product._id} */}
                  {/* name={product.name} */}
                  {/* imgURL={product.imgURL} */}
                  {/* price={product.price} */}
                  {/* key={index} */}
                  {/* /> */}
                  {/* <button>Add to cart</button> */}
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {/* </Layout> */}
    </>
  );
};

export default ProductList;
