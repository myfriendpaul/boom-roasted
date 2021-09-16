import "./Home.css";
import Layout from "../../components/Layout/Layout";
import React from "react";
import { Link } from "react-router-dom";
import Popular from "../../components/Popular/Popular.jsx";

const Home = (props) => {
  return (
    <>

      <div className="background-group">
        <Layout user={props.user}>
          <div className="home"></div>
        </Layout>
        <img src="https://imgur.com/wTkAT8z.jpg" className="background-top" />
        <div className="random"></div>
        <img
          src="https://imgur.com/jeZ7LEJ.jpg"
          className="background-bottom"
        />
      </div>
      <button className="shop-now-btn">
        <Link className="shop-link" to="/productList">
          Shop Now
        </Link>
      </button>

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

    </>
  );
};

export default Home;
