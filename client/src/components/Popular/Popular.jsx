import { Link } from "react-router-dom";

import { useEffect, useState } from "react"
import Product from "../Product/Product";

const Popular = () => {
  const [popProducts, setPopProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // const allProducts = await getProducts();
      //Algo that selects 3 random products then set popProducts to that, will be array of objects
      setPopProducts(popProducts);
    };
    fetchProducts();
  }, []);



const Popular = () => {

  return (
    <div>
      <Link to="/products/614217046e043ffccc8940a1">
        <h3>Andrew's Cup</h3>
        <img
          src="https://i.imgur.com/lgljKKl.png"
          alt="Cool Cup"
          height="100px"
        />
      </Link>
      <Link to="/products/614217046e043ffccc8940a4">
        <h3>Black Excellence</h3>
        <img
          src="https://i.imgur.com/W0380gz.png"
          alt="Cool Beans"
          height="100px"
        />
      </Link>
      <Link to="/products/614217046e043ffccc8940a5">
        <h3>Nadia's Blend</h3>
        <img
          src="https://i.imgur.com/W0380gz.png"
          alt="Cooler Beans"
          height="100px"
        />
      </Link>
    </div>
  );
};

export default Popular;
