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

class Timeline extends React.Component {
  constructor(props){
    super(props);
    var howManyYears = history.length;
    this.state = {
      history: history,
      portrait: portraitHistory,
      years: Array(howManyYears).fill(null)
    };
  }
  handleYear(i){
    var dt = new Date();
    var yearValue = dt.getFullYear() - i;
    return yearValue;
  }
  renderYear(i){
    var current = false;
    if(i === 0){
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
    for(var i=0; i < this.state.history.length; i++)
    {
      var year = this.renderYear(i);
      this.state.years.push(year);
    }
    return (
      <div>
          <div className="site-tagline">
            <h1>Timeline</h1>
          </div>
          {this.state.years}

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
  activate(){
    var toggle = !this.state.active;
    this.setState({active: toggle});
  }
  deactivate(){
    this.setState({active: false});
  }
  renderEvents(i){
    const whatwhat = this.state.events[i];
    return (
      <Event 
        what = {whatwhat} />
    );
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
      var event = this.renderEvents(i);
      events.push(event);
    }

    return (
      <div>
        <div className = {theYearClass} onMouseEnter = {() => this.activate()}
            onMouseLeave = {() => this.activate()}>
        <h1 className = "annualYear">{theYear}</h1>
          <div className = "eventList">{events}</div>
        </div>
        <img className = {thePortraitClass} src={thePortrait} alt="portrait"></img>

      </div>
    );
  }

}
class Event extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      what: props.what,
    };
    console.log(this.state.what);
  }
  render(){
    var whatwhat = this.state.what;
    return (
      <div className = "event">
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
            <div id="logo" className="left-float"><a className="logotype" href="http://marisa.lu/">LU/MAR</a></div>
            <div id="menu" className="right-float clearfix">
              <a href="http://marisa.lu/" className="open-nav"><span className="hamburger"></span></a>   
              <nav id="main-nav">
                <ul>
                  <li><a href="http://marisa.lu/">Design</a></li>
                  <li><a href="http://marisa.lu/">Computation</a></li>
                  <li><a href="http://marisa.lu/">Art</a></li>
                  <li className="current-menu-item"><a href="http://marisa.lu/">Me</a></li>
                  <li><a href="http://marisa.lu/">Resume</a></li>
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
