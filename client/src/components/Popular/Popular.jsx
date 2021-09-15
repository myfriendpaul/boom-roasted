import { Link } from "react-router-dom";

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
