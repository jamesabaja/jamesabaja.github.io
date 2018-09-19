import React from 'react';
import logo from '../assets/images/Logo.png';

const LandingPage = () => {
  return(
    <div className='main-content'>
      <img
        src={logo}
        class='ui centered small image animated slideInDown'
        alt="logo"
      />
      <div class='ui hidden divider' />
      <div className='animated slideInUp'>
      <div className='ui center aligned container'>
        <h2>Hello, there! I'm James.</h2>
      </div>
      <div class='ui hidden divider' />
      <div className='ui center aligned container'>
        <h3>As of the moment, I am a graduating Computer Science student in UP Diliman.</h3>
      </div>
      <div className='ui center aligned container'>
        <h3>I'm also a web developer living in Taguig, Metro Manila. Innovation is my passion.</h3>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;