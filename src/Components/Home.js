



const Home = ({responses}) => {
    return (
        <div className="responses-div">
            {responses.map((response) => (
            <div className='each-response'>
                <p>{response.fields.story}</p>
                <h6>{response.fields.date}</h6>
            </div>
        ))}
        </div>

    )
}

export default Home;