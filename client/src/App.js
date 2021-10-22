import Home from './Components/Home.js'


function App() {
  return (
    <div>
      <nav>
        <div className="home-icon">
          <h1>BU Speaks</h1>
          <h5>Boston University</h5>
        </div>
        <div className="nav-links">
          <a>Why</a>
          <a>Survivor Support</a>
          <a>Prevention</a>
          <a>Share Your Story</a>
          <a>Sign the Petition</a>
        </div>
      </nav>
      <hr></hr>
      <Home />
    </div>
  );
}

export default App;
