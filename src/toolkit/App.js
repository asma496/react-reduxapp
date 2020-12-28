import React from 'react'
import { Provider } from 'react-redux'
import Counterbutton from './Counterbutton'
import Countervalue from './Countervalue'
import store from './store/store'

function App() {
    return (
        <Provider store={store}>

        <div>
        <Countervalue />

            <Counterbutton />
            
        </div>
        </Provider>
    )
}

export default App
