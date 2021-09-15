import "./Home.css";
import Layout from "../../components/Layout/Layout";
import React from "react";



const Home = (props) => {
  return (
    <>
      <Layout user={props.user}>
        <div className="home"></div>
      </Layout>
      <div className="shop-now-btn">
        <button>Shop Now</button>
      </div>
      <div className="divider">
        <h1>Coffee Divider</h1>
      </div>
      <div className="most-popular-cards">
        <h1>
        Most popular products
        </h1>
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
