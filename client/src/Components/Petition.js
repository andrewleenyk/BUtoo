
import { useState, useEffect } from 'react';
import axios from "axios";


const Petition = () => {
    const API_KEY = 'keyN5KW3EITtcAGls'
    const API_URL = `https://api.airtable.com/v0/appuLhOISTz80oHLg/Table%201?api_key=${API_KEY}`
    

    const [toggleFetch,setToggleFetch] = useState(true)
    const [signatures, setSignatures] = useState([]);
    

    useEffect(() => {
        console.log('getting responses');
        const getSignatures = async () => {
            const resp = await axios.get(API_URL);
            console.log(resp.data.records);
            setSignatures(resp.data.records);
        }

        getSignatures();

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
    }
    return (
        <div>
        {signatures.map((signature) => (
            <a>{signature.fields.signature}</a>
        ))}
            <form onSubmit={handleSubmit}>
                <label htmlFor='input-signature'>Sig :</label>
                <input type="text" id="input-signature" onChange={(ev) => setSignature(ev.target.value)}/>
                <input type="submit"/>
            </form>

        </div>

    )
}

export default Petition;