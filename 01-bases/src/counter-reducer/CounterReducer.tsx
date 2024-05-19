import { useReducer } from 'react'
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';

const INICIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducerComponent = () => {
    
    const [counterState, dispatch] = useReducer(counterReducer, INICIAL_STATE)
    
    const increaseBy =  ( value: number ) => {
        dispatch({type: 'increaseBy', payload: {value}})
    }

    const handleReset =  () => {
        dispatch({type: 'reset'})
    }

    return (
        <>
            <h1>Counter Reducer Segmentado </h1>
            <pre>
                {JSON.stringify(counterState,null,2)}
            </pre>

            <button onClick={handleReset}>
                reset
            </button>
            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={() =>increaseBy(10)}>
                +10
            </button>
        </>
    )
}
