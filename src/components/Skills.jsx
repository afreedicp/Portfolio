import React from 'react';
import './Skills.css';
import { a, b, c, d, e, Renegade } from '../utils/datas.js';

function Skills() {
  const portfolio = (x) => {
    return (
      <div className='full-portfolio'>
        <div className='portfolio-container'>
          <div className='Portfolio'>
            <a href={x.url}>
              <img src={x.image1} alt=''></img>
            </a>
          </div>

          <hr />
        </div>
        <div className='vline'></div>
        <div className='aboutProject'>
          <a href={x.url2}>
            {x !== Renegade && (
              <button className='btn btn-outline-danger'>GitHub</button>
            )}
          </a>
          <a href={x.url}>
            <button className='btn btn-outline-danger'>Website</button>
          </a>
          <p>{x.p1}</p>
          <p>{x.p2}</p>
          <p>{x.p3}</p>
          <p>{x.p4}</p>
          <p>{x.p5}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='skills-container'>
      <div className='button-container'>
        <button className='btn btn-outline-success'>All</button>
        <button className='btn btn-outline-success'>React.js</button>
        <button className='btn btn-outline-success'>JavaScript</button>
        <button className='btn btn-outline-success'>HTML</button>
        <button className='btn btn-outline-success'>CSS</button>
      </div>
      <section id='/Skills'>
        <h1>Portfolio</h1>
        {portfolio(Renegade)}
        {portfolio(e)}
        {portfolio(b)}
        {portfolio(a)}
        {portfolio(c)}
        {portfolio(d)}
      </section>
    </div>
  );
}

export default Skills;
