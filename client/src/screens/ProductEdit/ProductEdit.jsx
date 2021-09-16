import { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
    <Layout user={props.user}>
      {/* <div className="product-edit"> */}
        {/* <div className="image-container">
          
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={product.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div> */}

  


        <Form className="edit-form">

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name: </Form.Label>
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
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description: </Form.Label>
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price: </Form.Label>
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
  
          <Button variant="secondary" size="lg" type="submit"
          onClick={handleSubmit}
          >
    Save
  </Button>
</div>
</Form>



        {/* <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            cols={78}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form> */}
      {/* </div> */}
    </Layout>
  );
};

export default ProductEdit;
