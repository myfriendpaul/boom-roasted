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
      name: "Black Excellence",
      description:
        "This is a certified organic coffee. The cup is floral with notes of stone fruit and melon. We have worked with the Kata Muduga coop for the last 3 years, and every year coffees we source from the Nano Genji mill are some of our most highly anticipated coffees. Its a wonderful cup, full of surprises, and it's arrival always a sign of the beginning of summer.",
      price: "$10",
      origin: "Kenya",
      imgURL: "https://i.imgur.com/CE0JMql.png",
    },
    {
      name: "Alex's batch",
      description: "Espresso, 100% arabica",
      price: "$11",
      origin:
        "The bright flavors of this medium roast are inspired—and created—by trailblazing women of the coffee industry. The juicy, citrusy and chocolaty blend combines coffee from Latin America. Named for the Mermaids from Pirates of the Carribean that symbolizes Boom! Roasted, this blend honors the innovations of women, from farmer to roaster to barista.",
      imgURL: "https://i.imgur.com/IuP6Voj.png",
    },
    {
      name: "Nadia's blend",
      description:
        "Coffee from the Antigua Valley of Guatemala is the touchstone of quality. Here farmers take enormous pride in traditions, resulting in consistent flavor, cup after cup—lemon, chocolate and soft spice notes with an elegant mouthfeel unique to this region. It’s why we loved this coffee back in ’71, and why we love it today.",
      price: "$ 25",
      origin: "Guatemala",
      imgURL: "https://i.imgur.com/wTkvw8V.png",
    },
    {
      name: "Can I get a Cup of That",
      description:
        "A balanced roast between medium and dark. Mild fruit, balanced body, notes of caramel and roasted hazelnut.Gives you what you need when you need it",
      price: "$9.99",
      origin: "Kona",
      imgURL: "https://i.imgur.com/r1vNkQ6.png",
    },
    {
      name: "Andrew's cup",
      description: "A delicate piece of glassware",
      price: "$9.69",
      origin: "Ohio",
      imgURL: "https://i.imgur.com/XAzAhZg.png",
    },
    {
      name: "Cafes ROURA",
      description:
        "Like the early morning sun on Mount San Boom Roasted, this blend shines with gentle brightness. Tangy citrus flavors combine with those of complex wild berries. Wake up every morning with this cup of sunshine.",
      price: "$12",
      origin: "Catalunya",
      imgURL: "https://i.imgur.com/gBIrMiG.png",
    },
    {
      name: "GA Special Blend",
      description: "Edit Me Andy",
      price: "$15",
      origin: "Brazil",
      imgURL: "https://i.imgur.com/R84uKK5.png",
    },
    {
      name: "Andrew smeltz",
      description: "good",
      price: "Currently Sold Out",
      origin: "Ohio(No, not where Lebron is from)",
      imgURL: "https://i.imgur.com/XUvl0CL.png",
    },
    {
      name: "Better than Sturbucks",
      description:
        "This outstanding single-origin coffee exhibits a rustic earthiness typical of Sumatra but with a sunny attitude. A meticulous drying process yields a unique clean taste; we roast it light and let it shine.",
      price: "$35",
      origin: "Seattle",
      imgURL: "https://i.imgur.com/ZIuqNDE.png",
    },
  ];
  await Product.insertMany(products);
  console.log("created products!!!!!");
  db.close();
};
insertData();
