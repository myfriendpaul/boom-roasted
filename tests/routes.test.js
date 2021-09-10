import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import Product from "../models/product.js";

beforeAll(async () => {
  // create a test database url
  const MONGODB_TEST_URI = `mongodb://127.0.0.1/projectsTestDatabase`;

  // close the existing connection to the database so we can connect to the test database
  await mongoose.connection.close();

  // connect to the test database
  await mongoose.connect(MONGODB_TEST_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const products = [
    {
      name: "Andrew's cup",
      description: "A delicate piece of glassware",
      price: "$9.69",
      origin: "Ohio",

      imgURL: "https://i.imgur.com/lgljKKl.png",
    },
    {
      name: "Paul's blend",
      description: "Gives you what you need when you need it",
      price: "$9.99",
      origin: "Kona",
      imgURL: "https://i.imgur.com/W0380gz.png",
    },
    {
      name: "Alex's batch",
      description: "Espresso, 100% arabica",
      price: "$11",
      origin: "Italy",
      imgURL: "https://i.imgur.com/W0380gz.png",
    },
    {
      name: "Black Excellence",
      description: "Bold and smooth",
      price: "$10",
      origin: "Kenya",
      imgURL: "https://i.imgur.com/W0380gz.png",
    },
    {
      name: "Nadia's blend",
      description: "Breakfast blend, light roast ",
      price: "$ 25",
      origin: "Guatemala",
      imgURL: "https://i.imgur.com/W0380gz.png",
    },
    {
      name: "Cafes ROURA",
      description: "Breakfast blend",
      price: "$12",
      origin: "Catalunya",
      imgURL: "https://i.imgur.com/W0380gz.png",
    },
    {
      name: "GA Special Blend",
      description: "French roast",
      price: "$15",
      origin: "Brazil",
      imgURL: "https://i.imgur.com/W0380gz.png",
    },
    {
      name: "Andrew smeltz",
      description: "good",
      price: "currently sold out",
      origin: "Ohio(No, not where Lebron is from)",
      imgURL: "https://i.imgur.com/W0380gz.png",
    },
    {
      name: "Better than Sturbucks",
      description: "Medium roast",
      price: "$35",
      origin: "Seattle",
      imgURL: "https://i.imgur.com/W0380gz.png",
    },
  ];
  await Product.insertMany(products);
  console.log("created products!!!!!");
});

let productId;

// projects api tests
describe("Test the express routes for products", () => {
  // test the GET express route for the '/api/projects' path
  it("should show all projects", async () => {
    const res = await request(app).get(`/api/products`);
    // test that the status code is 200 - successful
    expect(res.statusCode).toEqual(200);
    // test that the response object has an _id property
    expect(res.body[0]).toHaveProperty("_id");
    // Save the _id value for later use with other tests
    productId = res.body[0]._id;
  });
  it("should show a specific product", async () => {
    const res = await request(app).get(`/api/products/${productId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  });
});

afterAll(async () => {
  // after all tests are complete delete the test database
  await mongoose.connection.db.dropDatabase();
  // close the database connection
  await mongoose.connection.close();
});
