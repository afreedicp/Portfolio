import React from "react";
import "./Footer.css";
import {Link} from "react-scroll"

function FooterBlock() {
  return (
    <div className="footer">
      <button className=" btn btn-outline">
        <a href="https://github.com/afreedicp">
          <i class="fab fa-github fa-3x"></i>
        </a>
      </button>
      <button className=" btn btn-outline">
        <a href="https://www.linkedin.com/in/muhammad-hassan-afreedi-8a5038212/">
          <i class="fab fa-linkedin fa-3x"></i>
        </a>
      </button>
      
      <Link className="nav-link" to="/" smooth={true}duration={100}><button className="btn-outline btn-danger "><i class="fas fa-step-backward"></i></button> </Link>
            
      
    </div>
  );
}

export default FooterBlock;
