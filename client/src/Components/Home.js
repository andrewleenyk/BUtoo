
import { useEffect, useState } from 'react';
import axios from "axios";

const API_KEY = 'keyN5KW3EITtcAGls'
const API_URL = `https://api.airtable.com/v0/appix77dwjzsTAHgi/Table%201?api_key=${API_KEY}`

const Home = () => {

    const [responses, setResponses] = useState([]);

    useEffect(() => {
        console.log('getting responses');
        const getResponses = async () => {
            const resp = await axios.get(API_URL);
            console.log(resp.data.records);
            setResponses(resp.data.records);
        }

        getResponses();

    },[])
    return (
        <div className="responses-div">
            {responses.map((response) => (
            <div className='resp'>
                <p>{response.fields.response}</p>
                <h6>{response.fields.date}</h6>
            </div>
        ))}
        </div>

    )
}

export default Home;