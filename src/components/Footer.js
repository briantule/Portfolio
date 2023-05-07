import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon/>
            <p> &copy; 2023 briantule.github.io</p>
        </div>
    </div>
  )
}

export default Footer