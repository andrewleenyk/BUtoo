
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


    //const [date, setDate] = useState('');
    const [story, setStory] = useState('');
    const [grade, setGrade] = useState('');
    const [approved, setApproved] = useState(false);
    const [submit, setSubmit] = useState(false);

    const submitDate = () => {
        let dateObj = new Date();
        let date = `${dateObj.getUTCMonth() + 1}/${dateObj.getUTCDate()}/${dateObj.getUTCFullYear()}`;
        return date;
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();


        console.log(submitDate())
        const newStory = {
            records: [
                {
                    fields: {
                        date:submitDate(),
                        story,
                        grade,
                        approved
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
            <form onSubmit={handleSubmit} id="story-form">
            <div className="form-container">
                <FormControl id="input-grade">
                    <InputLabel>Grade</InputLabel>
                    <Select
                    labelId="grade-select"
                    id="grade-select"
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

                <FormControl id="input-story">
                <TextField type="text" id="story-box" multiline
                label="Story"
                rows={12} onChange={(ev) => setStory(ev.target.value)} />
                </FormControl>
            </div>
                <Button variant="outlined" id="submit-share" type="submit">
                Submit
                </Button>
            </form>}
        </div>

    )
}

export default Share;