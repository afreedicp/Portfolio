import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="/">
    <div className="img-containers">
      <img className="image-background" src="img/egg.jpg" alt="" />
      <p className="text">Web Designer</p>
      <div className="main-btns">
        <button className="btn btn-active">
          <a href="https://www.instagram.com/af__zy_y">
            <i className="fab fa-instagram fa-3x"></i>
          </a>
        </button>
        <button className="btn">
          <a href="https://github.com/afreedicp">
            <i className="fab fa-github fa-3x"></i>
          </a>
        </button>
        <button className="btn">
          <a href="https://www.linkedin.com/in/muhammad-hassan-afreedi-8a5038212/">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
        </button>
      </div>
    </div>
    </section>
  );
}

export default Home;
