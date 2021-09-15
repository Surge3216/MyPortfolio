import React from 'react';
import './AboutMe.css'

export default function AboutMe() {
    return (
        <div>
            <div className="row bpad">
            <div className="col s12 m12 l12">
      <div className="card blue">
        <div className="card-content white-text">
          <span className="card-title">README.md</span>
          <p className="txt">Sergio Campos is currently studying to be a full stack web developer. Currently living in Salt Lake City, Utah. In the past he has worked in retail management running teams of three to thirty people, recently he's made a transition into web development where he hopes to put his team management skills to use as well as work in a field where he can put his creativity to use. To see some of the projects he has worked on clicked here.</p>
        </div>     
      </div>
    </div>
            </div>
              <div className="row">
    <div className="col s12 m6 l4">
      <div className="card yellow">
        <div className="card-content  black-text">
          <span className="card-title ">Var Home =</span>
          <p className="txt2">Salt Lake City, UT</p>
        </div>     
      </div>
      <div className="card con2 blue">       
        <div className="card-content white-text">
          <span className="card-title">&lt;!DOCTYPE&gt;</span>
          <div className="con">
          <div className='row'>
            <div className="col  l4 m4 s4">
          <i className="fab fa-node-js fa-2x medium"></i>
            </div>
            <div className="col  l4 m4 s4">
            <i className="fab fa-css3-alt fa-2x medium"></i>
            </div>
            <div className="col l4 m4 s4">
            <i className="fab fa-js-square fa-2x medium"></i>
            </div>         
          </div>
          <div className='row'>
          <div className="col offset-l2 l4 m4 s4">
          <i className="fab fa-react medium"></i>
            </div> 
            <div className="col l4 m4 s4">
            <i className="fab fa-php medium"></i>
            </div> 
          </div>
          <div className='row'>
          <div className="col offset-l4 l4 m4 s4">
          <i className="fas fa-database medium"></i>
            </div>
            <div className="col push-l2 l7 m12 s12">
          <p className="center-align">MySql & MongoDB</p>
            </div>              
          </div>
        </div>  
        </div>      
        </div>
      
    </div>
    <div className="col s12 m6 l4">
      <div className="card pink">
        <div className="card-content black-text">
        <span className="card-title">&lt;img&gt;</span>
        <div className="row valign-wrapper">
            <div className="col s12 m12 l12">
              <img src="https://surge3216.github.io/serg-2nd-portfolio/assets/apicofme.png" alt="" className="circle responsive-img center-align"/>
            </div>
          </div>
        </div>     
      </div>
    </div>
    <div className="col s12 m6 l4">
      <div className="card yellow">
        <div className="card-content black-text">
        <span className="card-title ">function<br/>Hobbies/Interest&#40;&#41;</span>
        <p className="txt2">I have always had a passion for boardgames and writing. 
                I love board games because I like learning the rules seeing which 
                ones I can remove without breaking the game and then coming up with my own.
                I love creative writing because when you find the correct sequence of 
                letters you can give the reader a truly unique experience. I was drawn to coding
                because in a way it combines both my passions.</p>
        </div>     
      </div>
    </div>
  </div>
        </div>
    )
}
