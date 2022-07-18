import React from 'react'
import './body.css'
import Project from './Project'

function Body() {
  return (
    <>
 <section class="lambeau">
    <div id="lambeau">
            <img src="/yomi.jpg" alt="selfie of Yomi Odusi"/>
    </div>
    <div class="subtitle">
        <p>God, Family & The GreenBay Packers</p>
    </div>
 </section>

 <section class='projects' >
    <br></br>
    <br></br>
    <h3>Hi Everyone! Welcome to my portfolio. I am a recent grad from Western University who studied aviation. 
      On the side I love going out of my comfort zone and and really challenge myself. Coding is fun and challenging
      and I cannot wait to advance my skills in this field!</h3>
    <br></br>
    <h2>My Projects</h2>
    <div  style={{display:'flex',paddingX:'20px',paddingTop:'50px',flexWrap:'wrap',alignItems:'center'}}>
    <Project  title='Team Profile Generator' link='https://github.com/yomiodusi/teampg' link2='https://yomiodusi.github.io/teampg/dist/teampg.html' img='/teampg.png'/>
    <Project  title='BudgetTracker' link='https://github.com/yomiodusi/yomibudget-tracker' link2='https://yomibudget-tracker.herokuapp.com/' img='/btrack.png'/>
    <Project  title='Employee Tracker' link='https://github.com/yomiodusi/employeetracker' link2='https://ifunny.co/tags/nodejs' img='/emptrack.png'/>
    <Project  title='Password Generator' link='https://github.com/yomiodusi/odusigenerator' link2='https://yomiodusi.github.io/odusigenerator/' img='/passwordg.png'/>
    <Project  title='JackedInTheBox' link='https://github.com/project2bootcamp/JackedInTheBox'link2='https://immense-sea-90510.herokuapp.com/' img='/jacked.jpg'/>
    <Project  title='Note Taker' link='https://github.com/yomiodusi/yominotes' link2='https://yominotes.herokuapp.com/' img='/schedule.jpg'/>
    </div>
 </section>
 
</>
  )
}

export default Body