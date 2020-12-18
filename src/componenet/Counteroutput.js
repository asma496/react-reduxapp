import React from 'react'
import {useDispatch} from 'react-redux'
import { decAction, incAction } from '../store/Action'

function Counteroutput() {
    const dispatch = useDispatch()
    return (
        <div>
            <h1> Dispatch with actions</h1>
            <button onClick={()=> dispatch({type:'INCREMENT'})}>+</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>-</button> <br />
          
          
          
          
          <h1>Dispatch with functions</h1>
            <button onClick={()=> dispatch(incAction())}>+</button>
            <button onClick={()=> dispatch(decAction())}>-</button>

        </div>
    )
}

export default Counteroutput
