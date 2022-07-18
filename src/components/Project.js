import React from 'react'

function Project({title,img,link,link2}) {
  return (
    <div style={{margin:'10px',display:'flex',flexDirection:'column',width:'700px',height:'150px', backgroundImage:`url(${img})`}}>
        <h1>{title}</h1>
        <a href={link}> Link to Repository</a>
        <a href={link2}> Link to Project</a>
    </div>
  )
}

export default Project