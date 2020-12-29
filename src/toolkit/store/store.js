import {configureStore } from '@reduxjs/toolkit'
// import Counterreducer from './CounterSlice'
import todoreducer from './TodoSlice'


 const store = configureStore({
    //  reducer: Counterreducer,
     reducer: todoreducer,
  
 })

 export default store