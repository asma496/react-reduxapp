import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { deletetodo } from './store/TodoSlice'



function Viewtodo() {
    const [title, settitle] = useState('')
    const state = useSelector(state => state)
    const dispatch = useDispatch();

     const handledelete=(id)=>{
        dispatch(deletetodo(id))
     }

    return (
        <div>{title}{
            state.map((item)=>(
                <div key={item.id}>
             {item.title}
             <button onClick={()=>handledelete(item.id)}>X</button>


                </div>
            ))
        }
            
        </div>
    )
}

export default Viewtodo
