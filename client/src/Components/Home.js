import { useEffect } from "react";
import axios from "axios";

const API_KEY = 'keyN5KW3EITtcAGls'
const API_URL = `https://api.airtable.com/v0/appix77dwjzsTAHgi/Table%201?api_key=${API_KEY}`

const Home = () => {

    const [response, setResponse] = useState([]);

    useEffect(() => {
        console.log('getting responses');
    })
}