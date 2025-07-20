import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Food Paradise, where every bite feels like heaven on earth. Indulge in mouthwatering flavors, crafted with love and the freshest ingredients. From sizzling starters to decadent desserts, your perfect meal awaits in a warm and inviting atmosphere. Step in, relax, and let us take you on a delicious journey of taste. At Food Paradise, we don’t just serve food — we serve happiness.
            </p>
            <Link to={"/menu"}>
              Explore Menu{""}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;