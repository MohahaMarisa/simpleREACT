(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/2018.67cab17e.png"},function(e,t,a){e.exports=a.p+"static/media/2017.371ed948.png"},function(e,t,a){e.exports=a.p+"static/media/2016.f2c4d0a7.png"},function(e,t,a){e.exports=a.p+"static/media/2015.f2c4d0a7.png"},function(e,t,a){e.exports=a(13)},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),l=a(3),s=a(5),c=a(0),u=a.n(c),o=a(7),m=a.n(o),h=(a(18),a(8)),v=a.n(h),p=a(9),d=a.n(p),f=a(10),E=a.n(f),b=a(11),g=a.n(b),y=[["3D hubs honorable mention","Apple HID prototyping Internship","Fast Company Innovation Award","Featured on Bouncy Media","Featured on UNILAD"],["TEI publication and demo","Google Visual Design Internship","Dean's List","School of Design Environments Merit Award"],["Dean's List","National Geothermal Design Grand prize"],["First solo exhibition","National Merit Scholar"]],j=[v.a,d.a,E.a,g.a],O=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(i.a)(this,Object(l.a)(t).call(this,e));var r=y.length;return a.state={history:y,portrait:j,years:Array(r).fill(null)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleYear",value:function(e){return(new Date).getFullYear()-e}},{key:"renderYear",value:function(e){var t=!1;return 0===e&&(t=!0),u.a.createElement(w,{events:this.state.history[e],which:this.handleYear(e),whichImg:this.state.portrait[e],current:t,key:e})}},{key:"render",value:function(){for(var e=0;e<this.state.history.length;e++){var t=this.renderYear(e);this.state.years.push(t)}return u.a.createElement("div",null,u.a.createElement("div",{className:"site-tagline"},u.a.createElement("h1",null,"Timeline")),this.state.years)}}]),t}(u.a.Component),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={year:e.which,active:e.current,img:e.whichImg,events:e.events},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"activate",value:function(){var e=!this.state.active;this.setState({active:e})}},{key:"deactivate",value:function(){this.setState({active:!1})}},{key:"renderEvents",value:function(e){var t=this.state.events[e];return u.a.createElement(N,{what:t})}},{key:"render",value:function(){var e=this,t=this.state.year,a=this.state.img,n="annualPortrait",r="annual";this.state.active&&(n="annualPortrait active",r="annual active");for(var i=[],l=0;l<this.state.events.length;l++){var s=this.renderEvents(l);i.push(s)}return u.a.createElement("div",null,u.a.createElement("div",{className:r,onMouseEnter:function(){return e.activate()},onMouseLeave:function(){return e.activate()}},u.a.createElement("h1",{className:"annualYear"},t),u.a.createElement("div",{className:"eventList"},i)),u.a.createElement("img",{className:n,src:a,alt:"portrait"}))}}]),t}(u.a.Component),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={what:e.what},console.log(a.state.what),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.what;return u.a.createElement("div",{className:"event"},u.a.createElement("p",null,e))}}]),t}(u.a.Component),k=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"site-container"},u.a.createElement("header",{id:"header",className:"header-transparent"},u.a.createElement("div",{className:"header-inner clearfix"},u.a.createElement("div",{id:"logo",className:"left-float"},u.a.createElement("a",{className:"logotype",href:"http://marisa.lu/"},"LU/MAR")),u.a.createElement("div",{id:"menu",className:"right-float clearfix"},u.a.createElement("a",{href:"http://marisa.lu/",className:"open-nav"},u.a.createElement("span",{className:"hamburger"})),u.a.createElement("nav",{id:"main-nav"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("a",{href:"http://marisa.lu/"},"Design")),u.a.createElement("li",null,u.a.createElement("a",{href:"http://marisa.lu/"},"Computation")),u.a.createElement("li",null,u.a.createElement("a",{href:"http://marisa.lu/"},"Art")),u.a.createElement("li",{className:"current-menu-item"},u.a.createElement("a",{href:"http://marisa.lu/"},"Me")),u.a.createElement("li",null,u.a.createElement("a",{href:"http://marisa.lu/"},"Resume"))))))),u.a.createElement(O,null)))}}]),t}(u.a.Component);m.a.render(u.a.createElement(k,null),document.getElementById("root"))},,,,,function(e,t,a){}],[[12,2,1]]]);
//# sourceMappingURL=main.dab83138.chunk.js.map