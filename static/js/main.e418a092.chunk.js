(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/serbia.82ff3005.png"},function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(16),a(6)),s=a.n(o),l=a(7),m=a(1),u=a(2),p=a(4),d=a(3),E=a(5),h=(a(20),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("i",{className:"fas fa-bolt"}),r.a.createElement("i",{className:"fas fa-cloud-sun"}),r.a.createElement("i",{className:"fas fa-cloud-showers-heavy"}),r.a.createElement("h2",null,"Weather Forecast for Serbia"),r.a.createElement("i",{className:"fas fa-cloud-rain"}),r.a.createElement("i",{className:"fas fa-sun"}),r.a.createElement("i",{className:"fas fa-cloud-moon"}))}}]),t}(n.Component)),f=a(10),g=a.n(f),v=(a(22),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"getTemperatures",value:function(){var e=Object(l.a)(s.a.mark(function e(t,a,n,r){var c,i,o,l,m,u,p,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="".concat(this.props.proxy,"https://api.darksky.net/forecast/").concat(this.props.API_KEY,"/").concat(t,",").concat(a),e.next=4,fetch(c);case 4:return i=e.sent,e.next=7,i.json();case 7:o=e.sent,console.log(o),l=o.currently,m=l.temperature,u=l.icon,p=(5*(m-32)/9).toFixed(0),document.getElementById(n).textContent=p,d='<img src="./../temperature icons/'.concat(u,'.svg" alt="no picture" />'),document.getElementById(r).innerHTML=d,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}},e,this,[[0,16]])}));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getTemperatures(43.15306,22.58611,"temPirot","iconPirot"),this.getTemperatures(43.32472,21.90333,"temNis","iconNis"),this.getTemperatures(43.85861,19.84878,"temUzice","iconUzice"),this.getTemperatures(44.01667,20.91667,"temKragujevac","iconKragujevac"),this.getTemperatures(43.90358,22.26405,"temZajecar","iconZajecar"),this.getTemperatures(44.62133,21.18782,"temPozarevac","iconPozarevac"),this.getTemperatures(44.80401,20.46513,"temBeograd","iconBeograd"),this.getTemperatures(45.25167,19.83694,"temNoviSad","iconNoviSad"),this.getTemperatures(46.1,19.66667,"temSubotica","iconSubotica")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"map-content"},r.a.createElement("img",{className:"img-pos",src:g.a,alt:"serbia map"}),r.a.createElement("ul",null,r.a.createElement("li",{id:"pirot",className:"city-pos",onClick:function(){return e.getTemperatures(43.15306,22.58611)}},r.a.createElement("h4",null,"Pirot"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconPirot"}),r.a.createElement("h3",{id:"temPirot",className:"temperature-degree"},"35"),r.a.createElement("span",null,"C"))),r.a.createElement("li",{id:"nis",className:"city-pos",onClick:function(){return e.getPosition(43.32472,21.90333)}},r.a.createElement("h4",null,"Ni\u0161"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconNis"}),r.a.createElement("h3",{id:"temNis",className:"temperature-degree"},"30"),r.a.createElement("span",null,"C"))),r.a.createElement("li",{id:"uzice",className:"city-pos",onClick:function(){return e.getPosition(43.85861,19.84878)}},r.a.createElement("h4",null,"U\u017eice"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconUzice"}),r.a.createElement("h3",{id:"temUzice",className:"temperature-degree"},"30"),r.a.createElement("span",null,"C"))),r.a.createElement("li",{id:"kragujevac",className:"city-pos",onClick:function(){return e.getPosition(44.01667,20.91667)}},r.a.createElement("h4",null,"Kragujevac"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconKragujevac"}),r.a.createElement("h3",{id:"temKragujevac",className:"temperature-degree"},"30"),r.a.createElement("span",null,"C"))),r.a.createElement("li",{id:"zajecar",className:"city-pos",onClick:function(){return e.getPosition(43.90358,22.26405)}},r.a.createElement("h4",null,"Zaje\u010dar"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconZajecar"}),r.a.createElement("h3",{id:"temZajecar",className:"temperature-degree"},"30"),r.a.createElement("span",null,"C"))),r.a.createElement("li",{id:"pozarevac",className:"city-pos",onClick:function(){return getPosition(44.62133,21.18782)}},r.a.createElement("h4",null,"Po\u017earevac"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconPoyarevac"}),r.a.createElement("h3",{id:"temPozarevac",className:"temperature-degree"},"30"),r.a.createElement("span",null,"C"))),r.a.createElement("li",{id:"beograd",className:"city-pos",onClick:function(){return e.getPosition(44.80401,20.46513)}},r.a.createElement("h4",{id:"bg"},"Beograd"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconBeograd"}),r.a.createElement("h3",{id:"temBeograd",className:"temperature-degree"},"30"),r.a.createElement("span",null,"C"))),r.a.createElement("li",{id:"novi-sad",className:"city-pos",onClick:function(){return e.getPosition(45.25167,19.83694)}},r.a.createElement("h4",null,"Novi Sad"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconNoviSad"}),r.a.createElement("h3",{id:"temNoviSad",className:"temperature-degree"},"30"),r.a.createElement("span",null,"C"))),r.a.createElement("li",{id:"subotica",className:"city-pos",onClick:function(){return e.getPosition(46.1,19.66667)}},r.a.createElement("h4",null,"Subotica"),r.a.createElement("div",{className:"temperature-content"},r.a.createElement("span",{id:"iconSubotica"}),r.a.createElement("h3",{id:"temSubotica",className:"temperature-degree"},"30"),r.a.createElement("span",null,"C")))))}}]),t}(n.Component)),N=(a(24),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"current-temperatures"},r.a.createElement("h2",{className:"currDate"},"10.07.2019."),r.a.createElement("hr",null),r.a.createElement("p",null,"This is daily temperature component"))}}]),t}(n.Component)),b=(a(26),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"long-temperature"},r.a.createElement("div",{className:"long-temp"},r.a.createElement("hr",null),r.a.createElement("h4",{className:"dayFirst"},"27"),r.a.createElement("hr",null),r.a.createElement("h4",{className:"daySecond"},"28"),r.a.createElement("hr",null),r.a.createElement("h4",{className:"dayThird"},"28"),r.a.createElement("hr",null)),r.a.createElement("p",null,"This is long term temperature component"))}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={cities:["Pirot",,"Ni\u0161","U\u017eice","Kragujevac","Zaje\u010dar","Po\u017earevac","Beograd","Novi Sad","Subotica"],pirot:{},temperatures:[],proxy:"http://cors-anywhere.herokuapp.com/",API_KEY:"fb4c116f915c61742654d62a921fffa2"},a.setPosition=function(){var e=a.getTemperatures(43.15306,22.58611);console.log(e)},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"getTemperatures",value:function(){var e=Object(l.a)(s.a.mark(function e(t,a){var n,r,c,i,o,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(this.state.proxy,"https://api.darksky.net/forecast/").concat(this.state.API_KEY,"/").concat(t,",").concat(a),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,console.log(c),i=c.currently,o=i.temperature,l=i.icon,console.log(o,l),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setPosition()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"weather-container"},r.a.createElement(N,null),r.a.createElement(v,{proxy:this.state.proxy,API_KEY:this.state.API_KEY}),r.a.createElement(b,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.e418a092.chunk.js.map