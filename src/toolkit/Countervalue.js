import React from 'react'
import {useSelector} from 'react-redux'

function Countervalue() {
    const counter = useSelector(state => state)
    return (
        <div>
            counter value : {counter}
            
        </div>
    )
}

export default Countervalue
