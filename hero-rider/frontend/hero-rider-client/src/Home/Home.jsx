import React, { useEffect } from "react";
import style from "./Home.css";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="container">
      <div className="banner-info">
        <h1>Grow as a Rider or Learn Driving with us</h1>

        <div className="banner-btn">
          <button>
            <Link to="/rider-login">Join as a Rider</Link>
          </button>
          <button>
            <Link to="/learner-login">Join as a Driving Lesson Learner</Link>
          </button>
        </div>
      </div>
      <div className="banner-pic-div">
        <img className="banner-pic" src={banner} alt="banner" />
      </div>
    </section>
  );
};

export default Home;
