import React from 'react'
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay'
import CounterPanel from '../../components/CounterPanel/CounterPanel'

function Counter() {
    return (
        <div className="App">
            <h1>Welcome to my counter. By Panumas</h1>
            <CounterDisplay/>
            <CounterPanel/>
        </div>
    )
}

export default Counter
