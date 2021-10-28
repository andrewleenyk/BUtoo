import { useEffect, useState } from 'react';
import { Component } from 'react'


const Home = ({responses}) => {
    const [stories, setStories] = useState(0);
    const [metoo, setMeToo] = useState(0)

    //connect new airtable
    
    useEffect(() => {
        setStories(responses.length)
    },[])


    return (
        <div id="home-container">
            <div className="metoo-info">
                <h1 id="stories-shared">Stories Shared</h1>
                <h2 id="number-stories">{stories}</h2>
                <button className="metoo-btn" onClick={() => setMeToo(metoo + 1)}>
                #MeToo: {metoo}
                </button>
            </div>
            <div className="responses-div">
                {responses.map((response) => (
                <div className='each-response'>
                    <p>{response.fields.story}</p>
                    <h6>{response.fields.date}</h6>
                </div>
                ))}
                
            </div>
        </div>


    )
}

export default Home;