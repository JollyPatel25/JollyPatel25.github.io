import './App.css';
import React, { useRef, useEffect }from 'react';
import "./CSS/NavBar.css";

class Ball {
  constructor(x, y, radius, dx, dy, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;
      this.color = color;
  }

  draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
  }

  update(canvasWidth, canvasHeight) {
      if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
      }
      if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
  }
}

// Canvas component
const Canvas = () => {
  const canvasRef = useRef(null);
  const balls = useRef([]);

  useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const initBalls = () => {
          const ballCount = 70;
          for (let i = 0; i < ballCount; i++) {
              const radius = Math.random() * 3;
              const x = Math.random() * (canvas.width - 2 * radius) + radius;
              const y = Math.random() * (canvas.height - 2 * radius) + radius;
              const dx = (Math.random() - 0.5) * 0.5;
              const dy = (Math.random() - 0.5) * 0.5;
              const color = 'pink'; // Single color for all balls
              balls.current.push(new Ball(x, y, radius, dx, dy, color));
          }
      };

      const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          balls.current.forEach(ball => {
              ball.update(canvas.width, canvas.height);
              ball.draw(ctx);
          });
          requestAnimationFrame(animate);
      };

      initBalls();
      animate();
  }, []);

  return <canvas ref={canvasRef} className='background-canvas'/>;
};


function App() {

  return (
    <div className="app">
      <div className="NavigationBar">
        <ul className="my-name-head"><a href="#"><li>Jolly Patel</li></a></ul>
        <ul className='navbar'>
          <a href="#experience"><li>Experience</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#education"><li>Education</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#about"><li>About</li></a>
        </ul>
      </div>
      <div  className="home-two">
      <Canvas className="canvas1"></Canvas>
        <div className="home-two-canvas">
        
          <div className='inner-home-two-canvas'>
            
            <div className="profile-pic"></div>
            <div id="about" className="data">
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