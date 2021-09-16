import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "paul1",
    email: "paul1@gmail.com",
    password: "0805",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
  });
  await user1.save();

  const products = [
    {
      name: "Andrew's cup",
      description: "A delicate piece of glassware",
      price: "$9.69",
      origin: "Ohio",
      imgURL: "https://i.imgur.com/XAzAhZg.png",
    },
    {
      name: "Paul's blend",
      description: "Gives you what you need when you need it",
      price: "$9.99",
      origin: "Kona",
      imgURL: "https://i.imgur.com/H2j6OLy.png",
    },
    {
      name: "Alex's batch",
      description: "Espresso, 100% arabica",
      price: "$11",
      origin: "Italy",
      imgURL: "https://i.imgur.com/UNED53g.png",
    },
    {
      name: "Black Excellence",
      description: "Bold and smooth",
      price: "$10",
      origin: "Kenya",
      imgURL: "https://i.imgur.com/I3m4qFp.png",
    },
    {
      name: "Nadia's blend",
      description: "Breakfast blend, light roast ",
      price: "$ 25",
      origin: "Guatemala",
      imgURL: "https://i.imgur.com/7dk9tjJ.png",
    },
    {
      name: "Cafes ROURA",
      description: "Breakfast blend",
      price: "$12",
      origin: "Catalunya",
      imgURL: "https://i.imgur.com/XP1hwm2.png",
    },
    {
      name: "GA Special Blend",
      description: "French roast",
      price: "$15",
      origin: "Brazil",
      imgURL: "https://i.imgur.com/utHRLUA.png",
    },
    {
      name: "Andrew smeltz",
      description: "good",
      price: "currently sold out",
      origin: "Ohio(No, not where Lebron is from)",
      imgURL: "https://i.imgur.com/mfkeoK2.png",
    },
    {
      name: "Better than Sturbucks",
      description: "Medium roast",
      price: "$35",
      origin: "Seattle",
      imgURL: "hhttps://i.imgur.com/nO62lLM.png",
    },
  ];
  await Product.insertMany(products);
  console.log("created products!!!!!");
  db.close();
};
insertData();
