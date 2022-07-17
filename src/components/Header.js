import React from 'react'
import './header.css'

function Header({props}) {
  return (
    <header>
                    <h1>Yomi Odusi</h1>
            <nav>
                <ul>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#work">Portfolio</a></li>
                    <li><a href="#contact-me">Contact Me</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
    </header>
  )
}

export default Header