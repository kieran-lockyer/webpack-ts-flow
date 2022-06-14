import React, { useState, useEffect, ReactElement } from 'react'
import axios from 'axios'
import dog from '../../assets/dog.jpeg'
import { SampleTypescriptDataType } from '../../types/typescript/SampleTypescriptDataType'
import { SampleFlowDataType } from '../../types/flow/SampleFlowDataType'

interface ITsJokeProps {
    meta: SampleTypescriptDataType,
    flowMeta: SampleFlowDataType
}

const TsJoke = (props: ITsJokeProps) => {
    const {
        meta: { name, value, present, options },
        flowMeta: { name: flowName, value: flowValue, present: flowPresent, options: flowOptions },
    } = props

    const [joke, setJoke] = useState<string>('')

    const generateJoke = (): void => {
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
            <h2>TypeScript Component</h2>
            <div id="joke" className="joke">{joke}</div>
            <button id="jokeBtn" className="btn" onClick={generateJoke}>Get Another Joke</button>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '50px' }}>
                <h3>Typescript Meta</h3>
                <p>{name}</p>
                <p>{value}</p>
                <p>{present}</p>
                {options?.map((o: string | number) => {
                    return <p key={`flow-${o}`}>{o}</p>
                })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '50px' }}>
                <h3>Flow Meta</h3>
                <p>{flowName}</p>
                <p>{flowValue}</p>
                <p>{flowPresent}</p>
                {flowOptions?.map((o: string | number) => {
                    return <p key={`flow-${o}`}>{o}</p>
                })}
            </div>
        </div>
    )
}

export default TsJoke