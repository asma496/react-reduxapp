import {configureStore } from '@reduxjs/toolkit'
import Counterreducer from './CounterSlice'


 const store = configureStore({
     reducer: Counterreducer,
  
 })

 export default store