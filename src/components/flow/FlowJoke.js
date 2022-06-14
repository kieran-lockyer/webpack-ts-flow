// @flow

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import dog from '../../assets/dog.jpeg'
import type { SampleFlowDataType } from '../../types/flow/SampleFlowDataType'
import { SampleTypescriptDataType } from '../../types/typescript/SampleTypescriptDataType'

type FlowJokeProps = {
    meta: SampleFlowDataType,
    tsMeta: SampleTypescriptDataType
}

export default function FlowJoke(props: FlowJokeProps): React$Element<*> {
    const {
        meta: { name, value, present, options },
        tsMeta: { name: tsName, value: tsValue, present: tsPresent, options: tsOptions }
    } = props;

    const [joke, setJoke] = useState < string > ('')

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
            <h2>Flow Component</h2>
            <div id="joke" className="joke">{joke}</div>
            <button id="jokeBtn" className="btn" onClick={generateJoke}>Get Another Joke</button>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '50px' }}>
                <h3>Flow Meta</h3>
                <p>{name}</p>
                <p>{value}</p>
                <p>{present}</p>
                {options?.map((o: string | number) => {
                    return <p key={`flow-${o}`}>{o}</p>
                })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '50px' }}>
                <h3>Flow Meta</h3>
                <p>{tsName}</p>
                <p>{tsValue}</p>
                <p>{tsPresent}</p>
                {tsOptions?.map((o: string | number) => {
                    return <p key={`flow-${o}`}>{o}</p>
                })}
            </div>
        </div>
    )
}
