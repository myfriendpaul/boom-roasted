import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import { Container } from "react-bootstrap";

const Popular = () => {
  const [popProducts, setPopProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      const topProducts = allProducts.slice(0, 3);
      setTopProducts(topProducts);
      setPopProducts(popProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {topProducts.map((product, index) => {
        return (
          <>
            <Link className="productList" to={`/products/${product._id}`}>
              <Container>
                <Card
                  id="popcard"
                  style={{ width: "20rem", display: "inline-block" }}
                >
                  <Card.Img variant="top" src={product.imgURL} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Container>
            </Link>
          </>
        );
      })}
    </div>
  );
};

/* <Link className="productList" to={`products/614217046e043ffccc8940a1`}>
<Card style={{ width: "20rem" }}>
  <Card.Img variant="top" src="https://i.imgur.com/lgljKKl.png" />
  <Card.Body>
    <Card.Title>Andrew's Cup</Card.Title>
  </Card.Body>
</Card>
</Link>
<Link className="productList" to={`products/614217046e043ffccc8940a4`}>
<Card style={{ width: "20rem" }}>
  <Card.Img variant="top" src="https://i.imgur.com/W0380gz.png" />
  <Card.Body>
    <Card.Title>Black Excellence</Card.Title>
  </Card.Body>
</Card>
</Link>
<Link className="productList" to={`/products/614217046e043ffccc8940a5`}>
<Card style={{ width: "20rem" }}>
  <Card.Img variant="top" src="https://i.imgur.com/W0380gz.png" />
  <Card.Body>
    <Card.Title>Nadia's Blend</Card.Title>
  </Card.Body>
</Card>
</Link> */

// const Popular = (props) => {
//   return (
//     <div>
//       <>
//         <Link className="productList" to={`/products/${props.id}`}>
//           <h3>Andrew's Cup</h3>
//           <img
//             src="https://i.imgur.com/lgljKKl.png"
//             alt="Cool Cup"
//             height="100px"
//           />
//         </Link>
//         <Link to="/products/614217046e043ffccc8940a4">
//           <h3>Black Excellence</h3>
//           <img
//             src="https://i.imgur.com/W0380gz.png"
//             alt="Cool Beans"
//             height="100px"
//           />
//         </Link>
//         <Link to="/products/614217046e043ffccc8940a5">
//           <h3>Nadia's Blend</h3>
//           <img
//             src="https://i.imgur.com/W0380gz.png"
//             alt="Cooler Beans"
//             height="100px"
//           />
//         </Link>
//       </>
//     </div>
//   );
// };

export default Popular;


