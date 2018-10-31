import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import img18 from './img/2018.png';
import img17 from './img/2017.png';
import img16 from './img/2016.png';
import img15 from './img/2015.png';

var twenty18 = ["3D hubs honorable mention", "Apple HID prototyping Internship" , "Fast Company Innovation Award", "Featured on Bouncy Media", "Featured on UNILAD"];
var twenty17 = ["TEI publication and demo", "Google Visual Design Internship", "Dean's List", "School of Design Environments Merit Award"];
var twenty16 = ["Dean's List", "National Geothermal Design Grand prize"];
var twenty15 = ["First solo exhibition", "National Merit Scholar"];

var history = [twenty18, twenty17, twenty16, twenty15];
var portraitHistory = [img18, img17, img16, img15];
function Square (props) {
    return (
      <button className = "square" onClick = {props.onClick}
      >
        {props.value}
      </button>
    );
}
class Timeline extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: history,
      portrait: portraitHistory,
    };
  }
  handleYear(i){
    var dt = new Date();
    var yearValue = dt.getFullYear() - i;
    return yearValue;
  }
  renderYear(i){
    var current = false;
    if(i == 0){
      current = true;
    }
    return (
      <Year 
        events = {this.state.history[i]}
        which = {this.handleYear(i)}
        whichImg = {this.state.portrait[i]} 
        current = {current}
        key = {i}/>
    );
  }
  render() {
    var years = []
    for(var i=0; i < this.state.history.length; i++)
    {
      var year = this.renderYear(i);
      years.push(year);
    }
    return (
      <div>
          <div className="site-tagline">
            <h1>Timeline</h1>
          </div>
          {years}

      </div>
    );
  }
}

class Year extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      year: props.which,
      active: props.current,
      img: props.whichImg,
      events: props.events
    };
  }
  render(){
    const theYear = this.state.year;
    const thePortrait = this.state.img;
    var thePortraitClass = "annualPortrait";
    var theYearClass = "annual";
    if(this.state.active){
      thePortraitClass = "annualPortrait active";
      theYearClass = "annual active";
    }
    var events = []
    for(var i=0; i < this.state.events.length; i++)
    {
      var event = <anEvent what = {this.state.events[i]}/>;
      events.push(event);
    }

    return (
      <div>
        <h1 className = {theYearClass}>{theYear}</h1>
        <img className = {thePortraitClass} src={thePortrait}></img>
      </div>
    );
  }

}
class anEvent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      what: props.what,
    };
  }
  render(){
    const whatwhat = this.state.what;
    return (
      <div>
        <p>{whatwhat}</p>
      </div>
    );
  }

}
class AboutMe extends React.Component {
  render() {
    return (
    <div>
      <div className="site-container">
        <header id="header" className="header-transparent">        
          <div className="header-inner clearfix">
            <div id="logo" className="left-float"><a className="logotype" href="">LU/MAR</a></div>
            <div id="menu" className="right-float clearfix">
              <a href="#" className="open-nav"><span className="hamburger"></span></a>   
              <nav id="main-nav">
                <ul>
                  <li><a href="">Design</a></li>
                  <li><a href="">Computation</a></li>
                  <li><a href="#">Art</a></li>
                  <li className="current-menu-item"><a href="">Me</a></li>
                  <li><a href="../LuMarisaResume.pdf" target="_blank">Resume</a></li>
                </ul>
              </nav>
            </div>     
          </div>
        </header>
        
        <Timeline />
      </div>

    </div>
    );
  }
}
ReactDOM.render(
  <AboutMe />,
  document.getElementById('root')
);
