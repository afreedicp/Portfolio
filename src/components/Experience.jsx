import React from 'react';
import './Skills.css';
export const Renegade = {
  id: 'React and Express',
  description: `Hobnob Insurance is a Website used for Communicating With the tenants
around the world .CRM developed for Renegade Insurance to manage interactions
between insurance agencies, agents and policy holders. The one SuperAdmin can
Add/Remove Admins and the admins adds the tenants(Other Insurance
Company)While each tenants have Agents who can add Clients and their details.so
they can provide Client needs accordingly`,
  url: 'https://crm.dev.joinhobnob.com/',
  image1: 'img/renegade.png',
  p1: '    •HobNob Insurance is a Website used for Communicating With tenants around the world.',
  p3: `• CRM for connecting insurance agencies, agents and policy holders.
`,
  p4: `• Frontend architecture using React and Redux toolkit. Styling done.`,
  p5: `• using emotion/styled`,
};
export const Robo = {
  description: `Robo Rampage is an online gambling game, Where people around the world can
participate with NTFs (non-fungible-token). Created smart contracts for games battle
using custom ERC-20 token (Beetz) and marketplace.Smart contracts with different
mechanisms to airdrop NFTs.Bulk generation of NFT metadata`,
  id: 'React and Express',
  url: 'https://crm.dev.joinhobnob.com/',
  image1: 'img/renegade.png',
  p1: '    •Development of UI and functionality for the web screens in various break-points.',
  p3: `• Communicate with team members for the understanding and acquiring of
requirements.
`,
  p4: `• Bug fixes in all responsive screens.`,
};
const Experience = () => {
  return (
    <section id='/Experience'>
      <div>
        <h1>Experience</h1>
        <h1>Hamon Technology (2022-present)</h1>
        <div className='Experiance'>
          <h2 className='Role'>Full Stack developer</h2>
          <h2>Hob Nob Insurence (April 2022-December 2022)</h2>
          <p className='DescrptionOfTheProject'>{Renegade.description}</p>
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
          <h2>Robo Rampage (Jan 2022-March 2022)</h2>
          <p className='DescrptionOfTheProject'>{Robo.description}</p>
          <div className='full-portfolio'>
            <div className='portfolio-container'>
              <div className='Description'>
                <p>{Robo.p1}</p>
                <p>{Robo.p3}</p>
                <p>{Robo.p4}</p>
                <p>{Robo.p5}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
