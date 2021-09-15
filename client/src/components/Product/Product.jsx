import "./Product.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  return (
    <>
      <Link className="productList" to={`/products/${props._id}`}>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={props.imgURL} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.price}</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Product;

//   <Link className="productList" to={`/products/${props.id}`}>
//   <img src={props.imgURL} alt={props.name} height="200px" width="200px" />

//   <div className="price">{props.price}</div>

//   <div className="productName">{props.name}</div>
// </Link>
