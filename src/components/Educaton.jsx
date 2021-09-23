import React from "react";
import "./Education.css";

function Educaton() {
  return (
    <section id="/Education">
    <div>
      <div className="heading">
        <h1>Education</h1>
      </div>

      <div className="details">
        <h4>
          <i className="fas fa-laptop-code" />
          Udemy &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2021
        </h4>

        <h5>The complete javascript course</h5>
        <div className="vl"></div>
        <h4>
          <i class="fas fa-laptop-code"></i>Tandum Institute
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;2020
        </h4>
        <h5>Python Programing</h5>
        <div className="vl"></div>
        <h4>
          <i class="fas fa-university"></i>Kannur University
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 2015-2019
        </h4>
        <h5>BSC Computer Science</h5>
      </div>
    </div>
    </section>
  );
}

export default Educaton;
