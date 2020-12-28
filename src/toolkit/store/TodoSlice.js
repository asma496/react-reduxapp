import {createSlice} from '@reduxjs/toolkit'

 const  TodoSlice = createSlice({
     name:'todo',
     initialState:[],
     reducers:{
    add(state,action){
        return [...state,action.payload]
    },
    deletetodo(id){

    }

     }
 });

 export const {} = 
     

 