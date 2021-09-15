import React from 'react';
import resume from './Resume.pdf'

export default function TypeAnimation() {
    return (
        <div>
          
        <footer className="page-footer">
          <div className="container foot">
            <div className="row">
                <div className=" col l4">
                  <a href="https://github.com/Surge3216" ><i className="fab fa-github fa-2x text"></i>
            <p className="text">Github</p></a>
                </div>
                <div className="col l4">
                  <a href="https://www.linkedin.com/in/sergio-campos-545a86206/"><i className="fab fa-linkedin fa-2x text"></i>
            <p className="text">Linkedin</p></a>
                </div>
                <div className="col l4">
                <a href={resume}download>
            <i className="far fa-file fa-2x text"></i>
            <p className="text">Resume</p></a>
            </div>
                

            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            
        
            </div>
          </div>
        </footer>
        </div>
    )
}
