import "./ProductList.css";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProducts } from "../../services/products";
import Product from "../../components/Product/Product";
import { Link, Route } from "react-router-dom";

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
              </>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default ProductList;

// const ProductList = (props) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const allProducts = await getProducts();
//       console.log(allProducts);
//       setProducts(allProducts);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {/* <Layout user={props.user}> */}
//       {/* <div className="products"> */}
//       <Layout></Layout>
//       <div className="cards-container">
//         {products.map((product, index) => {
//           return (
//             <Card style={{ width: "20rem" }}>
//               {/* <Product */}
//               <Card.Img variant="top" src={product.imgURL} />
//               <Card.Body>
//                 <Card.Title>{product.name}</Card.Title>
//                 <Card.Text>{product.price}</Card.Text>
//                 <Button href={`/products/${products.id}`} variant="primary">
//                   <Link to={`/products/${products.id}`}>Add to cart</Link>
//                 </Button>
//                 {/* id={product._id} */}
//                 {/* name={product.name} */}
//                 {/* imgURL={product.imgURL} */}
//                 {/* price={product.price} */}
//                 {/* key={index} */}
//                 {/* /> */}
//                 {/* <button>Add to cart</button> */}
//               </Card.Body>
//             </Card>
//           );
//         })}
//       </div>
//       {/* </Layout> */}
//     </>
//   );
// };

// export default ProductList;
