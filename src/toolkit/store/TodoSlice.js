import {createSlice} from '@reduxjs/toolkit'
import uuid from 'react-uuid';

 const  TodoSlice = createSlice({
     name:'todo',
     initialState:[],
     reducers:{
    addtodo(state,action){
        let newobj = action.payload
        let {id,title} = newobj
       let newstate= [...state,newobj]
       return newstate
    },
    prepare(title){
        return{payload:{title:title,id:uuid()}}
    
    }
    
},
// deletetodo:{
//     reducer(state,action){
//     console.log(action.payload.id)
//     let newstate1 = state.filter(item=>item.id != action.payload.id)
//     return newstate1
//     },
reducers:{
    deletetodo(state,action){
    console.log(action.payload.id)
    let state2 = state.filter(item=>item.id != action.payload.id)
    return state2

}
}
//     prepare(id){
//         return {payload:{id}}
//    } 


 });


 export const {addtodo, deletetodo} = TodoSlice.actions;
 const todoreducer = TodoSlice.reducer;
 export default todoreducer;
     

 