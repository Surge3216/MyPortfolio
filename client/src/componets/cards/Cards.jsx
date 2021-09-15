import React, { useEffect, useState } from 'react';
import "./cards.css"
import axios from 'axios'

export default function Cards() {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    axios.get('/api/projects')
    .then(function(response){
      console.log(response.data)
      setProjects(response.data)
    })
  }, [])

  const project = projects.map((data)=>(
    <div className="col s12 m6 l4">
    <div className="card ">
    <div className="card-image row">
            <div className="col l12 responsive-img">
              <img src={data.image} alt={data.title}/>
            </div>
          </div>
      <div className="card-content">
      <span className="card-title">{data.title}</span>
        <p>{data.description}</p>
      </div>
      <div className="card-action">
        <a href={data.gitLink}>GitHub</a>
        <a href={data.deployedLink}>Deployed</a>
      </div>
    </div>
  </div>
  ))

    return (
        
          <div className="row">
          {project}
    </div>
    )
}
