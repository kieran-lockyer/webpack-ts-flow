import React, { useState, useEffect } from 'react'
import axios from 'axios'
import dog from '../assets/dog.jpeg'

export default function App() {
    const [joke, setJoke] = useState('')

    const generateJoke = () => {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }

        axios.get('https://icanhazdadjoke.com', config).then((res) => {
            setJoke(res.data.joke)
        })
    }

    useEffect(() => {
        generateJoke()
    }, [])

    return (
        <div className="container">
            <img id="dogImg" alt="dog" src={dog} />
            <h3>Don't Laugh Challenge</h3>
            <div id="joke" className="joke">{joke}</div>
            <button id="jokeBtn" className="btn" onClick={generateJoke}>Get Another Joke</button>
        </div>
    )
}
