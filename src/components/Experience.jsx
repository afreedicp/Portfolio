import React from 'react';
import './Skills.css';
export const Renegade = {
  id: 'React and Express',
  url: 'https://crm.dev.joinhobnob.com/',
  image1: 'img/renegade.png',
  p1: '    •HobNob Insurance is a Website used for Communicating With tenants around the world.',
  p3: `• CRM for connecting insurance agencies, agents and policy holders.
`,
  p4: `• Frontend architecture using React and Redux toolkit. Styling done.`,
  p5: `• using emotion/styled`,
};
const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      <h1>Hamon Technology (2022-present)</h1>
      <div className='Experiance'>
        <h2 className='Role'>Full Stack developer</h2>
        <h2>Hob Nob Insurence (Aprill 2022-December 2022)</h2>
        <div className='full-portfolio'>
          <div className='portfolio-container'>
            <div className='Description'>
              <p>{Renegade.p1}</p>
              <p>{Renegade.p3}</p>
              <p>{Renegade.p4}</p>
              <p>{Renegade.p5}</p>
              <a href={Renegade.url}>
                <button className='btn btn-outline-danger'>Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
