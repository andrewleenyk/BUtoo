import Home from './Components/Home.js'
import { Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <div className="home-icon">

          <Link to='/' className="title">
            <h1>BU Speaks</h1>
            <h5>Boston University</h5>
          </Link>

        </div>
        <div className="nav-links">
          <a className="nav-link">Why</a>
          <a className="nav-link">Survivor Support</a>
          <a className="nav-link">Prevention</a>
          <a className="nav-link">Share Your Story</a>
          <a className="nav-link">Sign the Petition</a>

        </div>
      </nav>
      <hr></hr>
      <Home />
    </div>
  );
}

export default App;
