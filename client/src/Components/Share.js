
import { useEffect, useState } from 'react';
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Share = ({toggleFetch, setToggleFetch}) => {
    const API_KEY = 'keyN5KW3EITtcAGls'
    const API_URL = `https://api.airtable.com/v0/appix77dwjzsTAHgi/Table%201?api_key=${API_KEY}`


    const [date, setDate] = useState('');
    const [story, setStory] = useState('');
    const [grade, setGrade] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const newStory = {
            records: [
                {
                    fields: {
                        date,
                        story,
                        grade
                    }
                }
            ]
        }

        await axios.post(API_URL, newStory)
        setToggleFetch(!toggleFetch)
        setSubmit(!submit);
    }
    return (
        <div>
            {submit ?
            <h1>thank you</h1> :
            <form onSubmit={handleSubmit}>
            <div className="form-container">

            <FormControl fullWidth>
                <InputLabel>Grade</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Garde"
                onChange={(ev) => setGrade(ev.target.value)}
                >
                <MenuItem value={"freshman"}>Freshman</MenuItem>
                <MenuItem value={"sophomore"}>Sophomore</MenuItem>
                <MenuItem value={"junior"}>Junior</MenuItem>
                <MenuItem value={"senior"}>Senior</MenuItem>
                <MenuItem value={"grad"}>Grad Student</MenuItem>
                </Select>
            </FormControl>
                <TextField type="text" id="input-date" label="Date" onChange={(ev) => setDate(ev.target.value)}/>
                <TextField type="text" id="input-story" multiline
                label="Story"
                rows={12} onChange={(ev) => setStory(ev.target.value)} />
            </div>
                <Button variant="outlined" type="submit">
                Submit
                </Button>
            </form>}
        </div>

    )
}

export default Share;