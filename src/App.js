import './App.css';
// import './tailwind.css'; // Import Tailwind CSS globally
import MarkdownComponent from './demo.js';
import TailStylingComponent from './demo2.js';

function App() {

  return (
    <div className="App">
      {/* Navigation bar */}
      {/* <navbar>
        <div class="nav-cover" style={{ backgroundColor: "pink" }}>
          <ul class="nav">
            <li class="nav-item nav-head text-hov">Jolly Patel</li>
            <li class="nav-item nav-side text-hov">Work</li>
            <li class="nav-item nav-side text-hov">Skills</li>
            <li class="nav-item nav-side text-hov">Education</li>
            <li class="nav-item nav-side text-hov">About</li>
          </ul>
        </div>
      </navbar> */}
      {/* Navigation bar ends */}

   
      <h1>My React App</h1>
      <MarkdownComponent />
      <TailStylingComponent/>
    </div>
  );
}

export default App;
// className="text-4xl font-bold mb-4"
//  className="container mx-auto px-4 py-8"