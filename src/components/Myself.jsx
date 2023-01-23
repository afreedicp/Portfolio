import React from 'react';
import './Myself.css';

function Myself() {
  return (
    <section id='/Myself'>
      <div className='img-container'>
        <img src='img/user.jpeg' className='profile-img' alt=''></img>
        <div className='about-me'>
          <h1 className='heading'> About me </h1>

          <h5>Muhammed Hassan Afreedi,</h5>
          <p>
            Full stack developer with proficiency in front-end technologies.
            Graduated from Sir Syed Institute of Technical Studies with a
            Bachelor’s Degree in Computer Science. Experience in interacting and
            communicating with people from different backgrounds, highlighting
            teamwork and problem-solving. Experience in Analysis, Design, and
            Development. Experience in Web App with Reactjs and Express Js.
            Extensive programming skills in JavaScript. Fast switching between
            technologies.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Myself;
