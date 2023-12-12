import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <navbar>
        <div class="nav-cover" style={{ backgroundColor: "pink" }}>
          <ul class="nav">
            <li class="nav-item nav-head text-hov">Jolly Patel</li>
            <li class="nav-item nav-side text-hov">Work</li>
            <li class="nav-item nav-side text-hov">Skills</li>
            <li class="nav-item nav-side text-hov">Education</li>
            <li class="nav-item nav-side text-hov">About</li>
          </ul>
        </div>
      </navbar>
      {/* Navigation bar ends */}
    </div>
  );
}

export default App;
