import "./ProductList.css";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProducts } from "../../services/products";
import Product from "../../components/Product/Product";








import { Link, Route } from "react-router-dom";
import Popular from "../../components/Popular/Popular";
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
      <Layout user={props.user}>
        <div className="products">
          {products.map((product, index) => {
            return (
              <>
                <Product
                  id={product._id}
                  name={product.name}
                  imgURL={product.imgURL}
                  price={product.price}
                  key={index}
                />
                {/* <Route exact path="/">
                  <Popular
                    id={product._id}
                    name={product.name}
                    imgURL={product.imgURL}
                    price={product.price}
                    key={index}
                  />
                </Route> */}
              </>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default ProductList;
