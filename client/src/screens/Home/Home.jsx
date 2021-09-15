import "./Home.css";
import Layout from "../../components/Layout/Layout";
import React from "react";
import { Link } from "react-router-dom";
import Popular from "../../components/Popular/Popular.jsx";

const Home = (props) => {
  return (
    <>
      <img src="https://imgur.com/wTkAT8z.jpg" className="background" />

      <Layout user={props.user}>
        <div className="home"></div>
      </Layout>
      <div className="shop-now-btn">
        <Link to="/productList">Shop Now</Link>
      </div>
      <div className="divider">
        <h1>Coffee Divider</h1>
      </div>
      <div className="most-popular-cards">
        <Popular />
      </div>
      <div className="who-we-are">
        <h1>Who we are</h1>
        <div className="p-who-we-are">
          <div className="who-we-are-image"></div>
        </div>
      </div>
      {/* <Footer /> */}

      <div className="random"></div>
      <img src="https://imgur.com/jeZ7LEJ.jpg" className="background2" />
    </>
  );
};

export default Home;
