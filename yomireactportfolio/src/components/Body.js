import React from 'react'
import './body.css'
import Project from './Project'

function Body() {
  return (
    <>
 <section class="lambeau">
    <div id="lambeau">
            <img src="../mrodusi-portfolio/images/yomi.jpg" alt="selfie of Yomi Odusi"/>
    </div>
    <div class="subtitle">
        <p>God, Family & The GreenBay Packers</p>
    </div>
 </section>

 <section class='projects' >
    <h1>Projects</h1>
    <div  style={{display:'flex',paddingX:'20px',paddingTop:'50px',flexWrap:'wrap',alignItems:'center'}}>
    <Project  title='runbuddy' link='google.ca' img='/runbuddy.jpg'/>
    <Project  title='ledwall' link='google.ca' img='/ledwall.jpg'/>
    <Project  title='calculator' link='google.ca' img='/calculator.jpg'/>
    <Project  title='runbuddy' link='google.ca' img='/runbuddy.jpg'/>
    <Project  title='ledwall' link='google.ca' img='/ledwall.jpg'/>
    <Project  title='calculator' link='google.ca' img='/calculator.jpg'/>
    </div>
 </section>
 
</>
  )
}

export default Body