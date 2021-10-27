import { useEffect, useState } from 'react';
import { Component } from 'react'


const Home = ({responses}) => {
    const [stories, setStories] = useState(0);
    const [metoo, setMeToo] = useState(0)
    
    useEffect(() => {
        setStories(responses.length)
    })


    return (
        <div>
            <div className="metoo-info">
                <h1>Stories Shared: {stories}</h1>
                <h3>Me too: {metoo}</h3>
                <button onClick={() => setMeToo(metoo + 1)}>
                Me too: {metoo}
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