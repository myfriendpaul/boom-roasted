import "./Home.css";
import Layout from "../../components/Layout/Layout";
import React from "react";
import { Link } from "react-router-dom";
import Popular from "../../components/Popular/Popular.jsx";
import Navigation from "../../components/Navigation/Navigation";

const Home = (props) => {
  return (
    <>
      <div className="background-group">
        <Layout user={props.user}>
          {/* <div className="home"></div> */}

          <div className="background-top">
            <div className="quote-block">
              <p id="title-quote">Coffee for the heart and mind.</p>
              <p>
                Coffee that will satisfy your everyday taste. From cold brew to
                roasted hot, we're sure that every cup you have will be a cup of
                joy.
              </p>
              <Link className="shop-link" to="/productList">
                <button className="shop-now-btn">SHOP NOW</button>
              </Link>
            </div>
          </div>

          <div className="random"></div>
          {/* <div className="who-we-are">
            <h1>Who we are</h1>
            <div className="p-who-we-are">
            <div className="who-we-are-image"></div>
            </div>
          </div> */}

          <div id="white-background">
            {/* <div id="background-div"> */}

            <div className="popular-container">
              <div className="most-popular-cards">
                <Popular />
              </div>

              {/* <Link to="Support-us-on-GitHub">
                <button>GitHub</button>
              </Link> */}
            </div>
            {/* </div> */}
          </div>
        </Layout>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
