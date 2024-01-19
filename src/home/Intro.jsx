import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <div className='intro-body'>
            <div className="intro-content">
                <h1 className='title'>Souparno's Code Editor</h1>
                <span className="description">A Simple Code editor made by me, <br /> I you wnat to practice html,css,javascript, practice right here <br /> Use Web rather than mobile for better experience</span>
                <Link to={"/code"} className="editor-butt">Go To Editor</Link>
            </div>

        </div>
    )
}

export default Intro
