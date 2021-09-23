import React from "react";
import "./Myself.css";

function Myself() {
  return (
    <section  id="/Myself">
    <div className="img-container">
      <img src="img/me.jpg" className="profile-img" alt=""></img>
      <div className="about-me">
        <h1 className="heading"> About me </h1>

        <h5>
          My name is Muhammed Hassan Afreedi, a fresher Software Engneer based
          in india
        </h5>
        <p>
          <br />
          i am a hardcore gamer who fell in love with art, designs and
          animations from the begining, I've been passionate about building
          applications that solve real world problems by applying new and
          exciting technologies.
          <br />
          My latest experience has been focused on building single-page
          applications with JavaScript,
        </p>
      </div>
    </div>
    </section>
  );
}

export default Myself;
