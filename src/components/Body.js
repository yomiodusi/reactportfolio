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
    <h1>Projects</h1>
    <div  style={{display:'flex',paddingX:'20px',paddingTop:'50px',flexWrap:'wrap',alignItems:'center'}}>
    <Project  title='Team Profile Generator' link='https://github.com/yomiodusi/teampg' link2='google.ca' img='/teampg.png'/>
    <Project  title='BudgetTracker' link='https://github.com/yomiodusi/yomibudget-tracker' link2='https://yomibudget-tracker.herokuapp.com/' img='/btrack.png'/>
    <Project  title='Employee Tracker' link='https://github.com/yomiodusi/employeetracker' link2='google.ca' img='/emptrack.png'/>
    <Project  title='Password Generator' link='https://github.com/yomiodusi/odusigenerator' link2='google.ca' img='/passwordg.png'/>
    <Project  title='JackedInTheBox' link='https://github.com/project2bootcamp/JackedInTheBox'link2='https://immense-sea-90510.herokuapp.com/' img='/jacked.jpg'/>
    <Project  title='WorkDay Scheduler' link='https://github.com/yomiodusi/schedule-feat-yomi' link2='google.ca' img='/schedule.jpg'/>
    </div>
 </section>
 
</>
  )
}

export default Body