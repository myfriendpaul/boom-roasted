import { Link } from "react-router-dom";
import Card  from "react-bootstrap";

const Popular = () => {

  return (
    <div>
      <>
        <Link className="productList" to={`products/614217046e043ffccc8940a1`}>
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
        </Link>
      </>
    </div>
  );
};

export default Popular;
