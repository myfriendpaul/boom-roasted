import { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      console.log("this is the id", id);
      console.log("this is the fetch product", product);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  return (
    <div className="wrap-detail">
      <Layout user={props.user}>
        <Form className="edit-form">
          <div className="product-detail">
            <img
              className="product-detail-image"
              src={product.imgURL}
              alt={product.name}
            />
            <div className="info-detail">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="name">Name: </Form.Label>
                <br />
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.name}
                  name="name"
                  required
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>

              <div id="bean-divider"></div>
              
              
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="description">Description: </Form.Label>
                <br />
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Description"
                  value={product.description}
                  name="description"
                  required
                  onChange={handleChange}
                />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Image: </Form.Label>
                  <br />
                  <Form.Control
                    placeholder="Image Link"
                    value={product.imgURL}
                    name="imgURL"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="price">Price: </Form.Label>
                <br />
                <Form.Control
                  type="email"
                  placeholder="Price"
                  value={product.price}
                  name="price"
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="secondary"
                  size="lg"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Layout>
    </div>
  );
};

export default ProductEdit;
