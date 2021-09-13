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
     
      </>

  );
};

export default Home;
