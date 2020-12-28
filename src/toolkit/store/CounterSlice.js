import {createSlice} from '@reduxjs/toolkit'


export const CounterSlice= createSlice({
    name:"counter",
    initialState: 0,
    reducers:{
        incrementAction: state => state+1,
        decrementAction: state => state-1,
        incrementdouble: state => state +2,
    },
});

export const {incrementAction,decrementAction,incrementdouble} = CounterSlice.actions
const Counterreducer = CounterSlice.reducer

export default Counterreducer;