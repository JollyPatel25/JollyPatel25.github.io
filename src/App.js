import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* Navigation bar */}
      <div>
        <navbar>
          <div class ="nav-cover" style={{backgroundColor:'green'}}>
            <ul class="nav nav-head">
              <li class="nav-item">Jolly Patel</li>
            </ul>
            <ul class="nav nav-side">
              <li class="nav-item">Work</li>
              <li class="nav-item">Skills</li>
              <li class="nav-item">Education</li>
              <li class="nav-item">About</li>
            </ul>
          </div>
        </navbar>
      </div>
      {/* Navigation bar ends */}
    </div>
  );
}

export default App;
