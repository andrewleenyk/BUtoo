
import { useEffect, useState } from 'react';
import axios from "axios";

const Share = ({toggleFetch, setToggleFetch}) => {
    const API_KEY = 'keyN5KW3EITtcAGls'
    const API_URL = `https://api.airtable.com/v0/appix77dwjzsTAHgi/Table%201?api_key=${API_KEY}`


    const [date, setDate] = useState('');
    const [story, setStory] = useState('');

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const newStory = {
            records: [
                {
                    fields: {
                        date,
                        story
                    }
                }
            ]
        }

        await axios.post(API_URL, newStory)
        setToggleFetch(!toggleFetch)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='input-date'>Date :</label>
                <input type="text" id="input-date" onChange={(ev) => setDate(ev.target.value)}/>
                <label htmlFor='input-story'>Title :</label>
                <input type="text" id="input-story" onChange={(ev) => setStory(ev.target.value)}/>
                <input type="submit"/>
            </form>
        </div>

    )
}

export default Share;