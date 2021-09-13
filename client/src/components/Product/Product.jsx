import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <Link className="productList" to={`/products/${props.id}`}>
        <img src={props.imgURL} alt={props.name} height="200px" width="200px" />

        <div className="price">{props.price}</div>

        <div className="productName">{props.name}</div>
      </Link>
    </>
  );
};

export default Product;
