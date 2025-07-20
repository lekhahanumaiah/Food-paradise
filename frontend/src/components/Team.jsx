import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          Our team is a passionate group of chefs, servers, and innovators dedicated to delivering 
          the best dining experience.
          With years of expertise and a love for great food, we work together to craft every dish to perfection.
          We value teamwork, creativity, and a shared commitment to quality in everything we do.
          Every member plays a vital role in making our guests feel welcomed and satisfied.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;