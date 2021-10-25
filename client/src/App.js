import Home from './Components/Home.js'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Share from './Components/Share.js'
import { compose } from '@mui/system';

import axios from "axios";
import { useEffect, useState } from 'react';
import Petition from './Components/Petition.js'
import Prevention from './Components/Prevention.js'


const API_KEY = 'keyN5KW3EITtcAGls'
const API_URL = `https://api.airtable.com/v0/appix77dwjzsTAHgi/Table%201?api_key=${API_KEY}`

function App() {

  const [toggleFetch,setToggleFetch] = useState(true)
  const [responses, setResponses] = useState([]);
  

  useEffect(() => {
      console.log('getting responses');
      const getResponses = async () => {
          const resp = await axios.get(API_URL);
          console.log(resp.data.records);
          setResponses(resp.data.records);
      }

      getResponses();

  },[toggleFetch])
  

  return (
    <div>
      <nav>
        <div className="home-icon">

          <Link to="/" className="title" exact>
            <h1 id="main-title">BU Speaks</h1>
            <h5 id="sub-title">Boston University</h5>
          </Link>

        </div>
        <div className="nav-links">
          <a className="nav-link">Why</a>
          <a className="nav-link">Survivor Support</a>


          <Link to="/prevention">
            <a className="nav-link">Prevention</a>
          </Link>
          
          <Link to="/share-your-story">
            <a className="nav-link">Share Your Story</a>
          </Link>
          <Link to="/sign-the-petition">
            <a className="nav-link">Sign the Petition</a>
          </Link>

        </div>
      </nav>
      <hr></hr>
      <section>
        <article className="home-responses-container">
        <Route path="/" exact>
          <Home 
            responses={responses}
          />
        </Route>

        <Route path="/prevention">
          <Prevention />
        </Route>

        <Route path="/share-your-story">
          <Share 
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path="/sign-the-petition">
          <Petition />
        </Route>        
        
        </article>
        <article className='resources'>
          <h1>Resources</h1>
        </article>
      </section>

    </div>
  );
}

export default App;
