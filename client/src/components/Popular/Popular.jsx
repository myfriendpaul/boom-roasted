import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Popular = () => {
  const [popProducts, setPopProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      //Algo that selects 3 random products then set popProducts to that, will be array of objects
      setPopProducts(popProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {popProducts.map((product, index) => (
        <Product
          id={product._id}
          name={product.name}
          imgURL={product.imgURL}
          price={product.price}
          key={index}
        />
      ))}
    </div>
  );
};

export default Popular;
