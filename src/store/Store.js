import {createStore} from 'redux'
import ReducerCounter from './Reducer'
const Store = createStore(ReducerCounter)
export default Store;