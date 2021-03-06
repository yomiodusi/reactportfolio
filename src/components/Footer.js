import React from 'react'
import './footer.css'
import Contact from './Contact'

function Footer() {
  return (
    <footer id="contact-me">
      <div class="heading">
          <h1>My Footprint</h1>
      </div>

      <div class="findme">
          <ul>
              <li><a href={"https://github.com/yomiodusi"}> Yomi's Github</a></li>
              <li><a href={"https://www.linkedin.com/in/yomi-odusi-12917b193/"}> Yomi's LinkedIn</a></li>
              <li><a href={"https://twitter.com/MrOodusi"}>Twitter</a></li>
              <li><a href="#phonenumber">+16138693557</a></li>
              
          </ul>
      </div>
      <Contact></Contact>

    </footer>
  )
}

export default Footer