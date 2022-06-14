import React from 'react'
import FlowJoke from '../flow/FlowJoke';
import TsJoke from "./TsJoke";

export default function App() {
    return (
        <div className="app-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <TsJoke
                meta={{
                    name: "I'm a typescript typed object in a typescript component", value: 1, present: true, options: ['ts', 3, 'type']
                }}
                flowMeta={{
                    name: "I'm a flow typed object in a typescript component", value: 1, present: false, options: ['flow', 3, 'type']
                }}
            />
            <FlowJoke
                meta={{ name: "I'm a flow typed object in a flow component", value: 2, present: false, options: ['flow', 3, 'type'] }}
                tsMeta={{ name: "I'm a typescript typed object in a flow component", value: 2, present: false, options: ['ts', 3, 'type'] }}
            />
        </div>
    )
}
