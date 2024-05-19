import { useReducer } from 'react'


interface CounterState {
    counter: number,
    previous: number,
    changes: number
}

const INICIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction = 
    |{ type: 'increaseBy', payload: { value: number } }
    |{ type: 'reset' }

const counterReducer = ( state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case  'increaseBy':
            
            return {
                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes + 1
            };
        case  'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
            ;
    
        default:
            return state;
    }

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
            <h1>Counter Reducer </h1>
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
