(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/2018.67cab17e.png"},function(e,t,a){e.exports=a.p+"static/media/2017.8132aa1d.png"},function(e,t,a){e.exports=a.p+"static/media/2016.f2c4d0a7.png"},function(e,t,a){e.exports=a.p+"static/media/2015.cd2587a6.png"},function(e,t,a){e.exports=a(13)},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),l=a(3),s=a(5),c=a(0),o=a.n(c),u=a(7),h=a.n(u),m=(a(18),a(8)),d=a.n(m),v=a(9),p=a.n(v),f=a(10),E=a.n(f),g=a(11),b=a.n(g),y=[["Fast Company Innovation Award","Google Creative Lab $15k Research Grant","\uf8ff HID prototyping Internship","Exhibited at Vandebilt Hall, Grand Central","Exhibited at Data&Society's Future Perfect","Exhibited at CMU's 'Where are the Humans in AI' Spring show","Featured on Bouncy Media","Featured on UNILAD","3D Hubs honorable mention","Illustrator at Expii"],["TEI Conference publication and demo in Yokohama, Japan","SURG grant and presentation at Meeting of the Minds 2017","Google Visual Design Internship","Dean's List","School of Design Environments Merit Award"],["Dean's List","National Geothermal Design Grand prize","First-year Design Student Merit Award"],["First solo exhibition","National Merit Scholar","Berkeley's Regents and Chancellors scholar","Presidential Scholar @ Carnegie Mellon","7 Regional Gold \ud83d\udd11 Scholastic Art & Writing awards, 1 National silver "]],w=[d.a,p.a,E.a,b.a],j=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(i.a)(this,Object(l.a)(t).call(this,e));var r=y.length;return a.state={history:y,portrait:w,years:Array(r).fill(null)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleYear",value:function(e){return(new Date).getFullYear()-e}},{key:"renderYear",value:function(e){return 0===e&&!0,o.a.createElement(O,{events:this.state.history[e],which:this.handleYear(e),whichImg:this.state.portrait[e],key:e})}},{key:"render",value:function(){for(var e=0;e<this.state.history.length;e++){var t=this.renderYear(e);this.state.years.push(t)}return o.a.createElement("div",null,o.a.createElement("div",{className:"site-tagline"},o.a.createElement("h1",null,"Timeline"),o.a.createElement("img",{class:"annualPortrait active",src:this.state.portrait[0]})),this.state.years)}}]),t}(o.a.Component),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={year:e.which,active:e.current,img:e.whichImg,events:e.events},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"activate",value:function(){var e=!this.state.active;this.setState({active:e})}},{key:"deactivate",value:function(){this.setState({active:!1})}},{key:"renderEvents",value:function(e){var t=this.state.events[e];return o.a.createElement(N,{what:t})}},{key:"render",value:function(){var e=this,t=this.state.year,a=this.state.img,n="annualPortrait",r="annual";this.state.active&&(n="annualPortrait active",r="annual active");for(var i=[],l=0;l<this.state.events.length;l++){var s=this.renderEvents(l);i.push(s)}return o.a.createElement("div",null,o.a.createElement("div",{className:r,onMouseEnter:function(){return e.activate()},onMouseLeave:function(){return e.activate()}},o.a.createElement("h1",{className:"annualYear"},t),o.a.createElement("div",{className:"eventList"},i)),o.a.createElement("img",{className:n,src:a,alt:"portrait"}))}}]),t}(o.a.Component),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={what:e.what},console.log(a.state.what),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.what;return o.a.createElement("div",{className:"event"},o.a.createElement("p",null,e))}}]),t}(o.a.Component),k=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"site-container"},o.a.createElement("header",{id:"header",className:"header-transparent"},o.a.createElement("div",{className:"header-inner clearfix"},o.a.createElement("div",{id:"logo",className:"left-float"},o.a.createElement("a",{className:"logotype",href:"http://marisa.lu/"},"LU/MAR")),o.a.createElement("div",{id:"menu",className:"right-float clearfix"},o.a.createElement("a",{href:"http://marisa.lu/",className:"open-nav"},o.a.createElement("span",{className:"hamburger"})),o.a.createElement("nav",{id:"main-nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"http://marisa.lu/"},"Design")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://marisa.lu/"},"Computation")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://marisa.lu/"},"Art")),o.a.createElement("li",{className:"current-menu-item"},o.a.createElement("a",{href:"http://marisa.lu/"},"Me")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://marisa.lu/"},"Resume"))))))),o.a.createElement(j,null)))}}]),t}(o.a.Component);h.a.render(o.a.createElement(k,null),document.getElementById("root"))},,,,,function(e,t,a){}],[[12,2,1]]]);
//# sourceMappingURL=main.fef640a8.chunk.js.map