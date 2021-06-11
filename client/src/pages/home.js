import React, {useState} from 'react'
import axios from "axios"

export default function Home() {

    const [search, setSearch] = useState(null)
    const [results, setResults] = useState([])

const searchHandler = async (event) => {

    let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${search}&rating=pg`).catch(err => console.log(err))
    setResults(res.data.data)
}

const handleChange = (event) => {
    setSearch(event.target.value)
}


    return (
        <div>
            <input onChange={handleChange}></input>
            <button onClick={searchHandler}>search</button>

             {results.map(gif => <img src={gif.images.fixed_height_small.url}></img>)}

            
            
        </div>
    )
}
