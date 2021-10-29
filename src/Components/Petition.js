
import { useState, useEffect } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

const Petition = () => {
    const API_KEY = 'keyN5KW3EITtcAGls'
    const API_URL = `https://api.airtable.com/v0/appuLhOISTz80oHLg/Table%201?api_key=${API_KEY}`
    

    const [toggleFetch,setToggleFetch] = useState(true)
    const [signatures, setSignatures] = useState([]);
    const [signed, setSigned] = useState(false);
    

    useEffect(() => {
        console.log('getting responses');
        const getSignatures = async () => {
            const resp = await axios.get(API_URL);
            console.log(resp.data.records);
            setSignatures(resp.data.records);
        }

        getSignatures();
        console.log(signatures)

    },[toggleFetch])

    const [signature, setSignature] = useState('');

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const newSign = {
            records: [
                {
                    fields: {
                        signature
                    }
                }
            ]
        }

        await axios.post(API_URL, newSign)
        setToggleFetch(!toggleFetch)
        setSigned(!signed)
    }
    return (
        <div>
        <iframe src="https://giphy.com/embed/y6aGq7e5NnPr96E0ap" width="480" height="168" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            {signed ? <h1>Thank You!!!</h1> : 
            <form id="petition-form" onSubmit={handleSubmit}>
                <TextField type="text" id="input-signature" multiline
                label="Name"
                onChange={(ev) => setSignature(ev.target.value)} />

                <Button id="petition-submit" variant="outlined" type="submit">
                Submit
                </Button>
            </form>}
            <article className="petition-signatures">
                {signatures.map((signature) => (
                <a className="each-signature">{signature.fields.signature}</a>
            ))}
            </article>

        </div>
    )
}

export default Petition;