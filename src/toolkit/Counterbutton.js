import React from 'react'
import {useDispatch} from 'react-redux'
import { decrementAction, incrementAction, incrementdouble } from './store/CounterSlice'
const Counterbutton = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick ={ ()=> dispatch(incrementAction())}>+</button>
            <button onClick ={()=>dispatch(decrementAction())}>-</button>
            <button onClick = {()=> dispatch(incrementdouble())}>++</button>
           

<br />
           <div>
               <form onSubmit>
                   <input type='text' onChange />
                   <button>Add</button>
               </form>
           </div>
        </div>

        
    )
}

export default Counterbutton
