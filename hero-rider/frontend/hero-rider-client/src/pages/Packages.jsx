import React from "react";
import style from "./Packages.css";

const Packages = () => {
  return (
    <section className="package-div">
      <div className="car">
        <h1>Car Driving Lesson</h1>
        <div className="car-payment">
          <button>$200</button>
          <button>Pay</button>
        </div>
      </div>
      <div className="bike">
        <h1>Bike Driving Lesson</h1>
        <div className="bike-payment">
          <button>$100</button>
          <button>Pay</button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
