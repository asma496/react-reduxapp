import React from 'react'
import {useSelector} from 'react-redux'



function Counterinput() {
    const counter = useSelector(state => state.counter)

    return (
        <div>
           counter value:{counter} <br />

        </div>
    )
}

export default Counterinput
