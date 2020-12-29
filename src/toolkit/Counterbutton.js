import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { decrementAction, incrementAction, incrementdouble } from './store/CounterSlice'
import uuid from 'react-uuid'
import { addtodo} from './store/TodoSlice'
import Viewtodo from './Viewtodo'



const Counterbutton = () => {
    const [task, settask] = useState({})
    const [title, settitle] = useState()
    const dispatch = useDispatch()
    const handlechange = (e)=>{
        settitle(e.target.value)
    
       
    }

    const handlesubmit = (e)=>{
        e.preventDefault();

        settask({
            title: title,
            id: uuid(),
            
        })


        dispatch(addtodo(title)) 
    }



    return (
        <div>
            <button onClick ={ ()=> dispatch(incrementAction())}>+</button>
            <button onClick ={()=>dispatch(decrementAction())}>-</button>
            <button onClick = {()=> dispatch(incrementdouble())}>++</button>
           

<br />





           <div>
               <form onSubmit={handlesubmit}>
                   <input type='text' onChange={handlechange}/>
                   <button type= 'submit'>Add</button>
               </form>
           </div>
           <Viewtodo />
        </div>
        

        
    )
}

export default Counterbutton
