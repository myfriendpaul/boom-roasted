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

          <div id="white-background">
            {/* <div id="background-div"> */}

            <div className="popular-container">
              <div className="most-popular-cards">
                <Popular />

                <div className="who-we-are">
                  <div className="about-us">
                    <p className="about-title">Who we are</p>
                    <p className="about-text">
                      We are five Software Engineering students who are putting
                      their lives on hold to bring our customers some of the
                      best Coffee they’ve ever had. One sip and you’ll be saying
                      “Damn. Thats good Coffee”
                    </p>
                    <Link to="Support-us-on-GitHub">
                      <button className="github">GitHub</button>
                    </Link>
                  </div>
                  <div className="p-who-we-are">
                    <img
                      src="https://imgur.com/SDwQJF4.png"
                      className="who-we-are-image"
                    />
                  </div>
                </div>
                <div className="footer"></div>
              </div>
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
