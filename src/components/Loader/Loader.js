import React from 'react'
import './Loader.sass'

const Loader = () => {
    return (
        <div className="fancy-spinner">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="dot"></div>
        </div>
    )
}

export default Loader
