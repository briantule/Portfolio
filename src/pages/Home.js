import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is Brian</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <spann>
              ReactJS, HTML, CSS, React Native, NPM, BootStrap, MaterialUI, Yarn, StyledComponents
            </spann>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <spann>
              NodeJS, Java Spring, MySQL, MongoDB, MS SQL
            </spann>
          </li>ß
          <li className='item'>
            <h2>Languages</h2>
            <spann>
              JavaScript, Java, Python, C#, C, C++
            </spann>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home