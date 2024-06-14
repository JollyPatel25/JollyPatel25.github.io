import './App.css';
import React from 'react';
import "./CSS/NavBar.css";
function App() {
  return (
    <div className="app">
      <div className="NavigationBar">
        <ul className="my-name-head"><li>Jolly Patel</li></ul>
        <ul className='navbar'>
          <li>Experience</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Skills</li>
          <li>About</li>
        </ul>
      </div>
      <div className="home-two">
        <div className="home-two-canvas">
          <div className='inner-home-two-canvas'>
            <div className="profile-pic"></div>
            <div className="data">
              <p>Currently, I'm pursuing a Bachelor's degree in Computer Engineering, 
                where I'm immersing myself in the ever-evolving world of technology. 
                With a keen eye on emerging trends and a thirst for knowledge, I'm constantly seeking 
                opportunities to broaden my skill set and contribute meaningfully to collaborative projects. 
                As a passionate and forward-thinking developer, I'm driven by innovation and inspired by 
                the potential of technology to shape the future.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="home-two">
        <div className="home-two-canvas">
          <div className='inner-home-two-canvas'>
            <div className="profile-pic"></div>
            <div className="data">
              <p>Currently, I'm pursuing a Bachelor's degree in Computer Engineering, 
                where I'm immersing myself in the ever-evolving world of technology. 
                With a keen eye on emerging trends and a thirst for knowledge, I'm constantly seeking 
                opportunities to broaden my skill set and contribute meaningfully to collaborative projects. 
                As a passionate and forward-thinking developer, I'm driven by innovation and inspired by 
                the potential of technology to shape the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;