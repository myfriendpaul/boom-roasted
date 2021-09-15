import "./Product.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          href={`/products/${props.id}`}
          src={props.imgURL}
        />
        <Card.Body>
          <Card.Title>
            <Link className="productList" to={`/products/${props.id}`}>
              {props.name}
            </Link>
          </Card.Title>
          <Card.Text>{props.price}</Card.Text>
          <button>
            <Link className="productList" to={`/products/${props.id}`}>
              Add
            </Link>
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;

//   <Link className="productList" to={`/products/${props.id}`}>
//   <img src={props.imgURL} alt={props.name} height="200px" width="200px" />

//   <div className="price">{props.price}</div>

//   <div className="productName">{props.name}</div>
// </Link>
